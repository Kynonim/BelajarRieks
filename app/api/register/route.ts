import { NextResponse } from "next/server"
import { enkripsi } from "@/app/lib/kunci"
import db from "../.rahasia/auth"
import { batasWaktuOTP, buatKodeOTP, kirimKodeOTP } from "@/app/lib/email"

export async function POST(req: Request) {
  const { uid, name, email, password } = await req.json()
  if (!uid || !name || !email || !password) return NextResponse.json({ status: false, statusCode: 400, message: "Data tidak lengkap" }, { status: 400 })

  const cekUser = db.prepare("SELECT * FROM users WHERE email = ?").get(email)
  if (cekUser) return NextResponse.json({ status: false, statusCode: 400, message: "Email sudah terdaftar" }, { status: 400 })

  const sandi = enkripsi(password)
  const otp = buatKodeOTP()
  const query = db.prepare("INSERT INTO users (uid, name, email, password) VALUES (?, ?, ?, ?)")
  if (!(await sandi).status) return NextResponse.json({ status: false, statusCode: 500, message: "Server error" }, { status: 500 })
  const result = query.run(uid, name, email, (await sandi).data)
  
  if (result) {
    const query = db.prepare("INSERT INTO sessions (email, otp, times) VALUES (?, ?, ?)")
    const result = query.run(email, otp, batasWaktuOTP)
    if (result) {
      await kirimKodeOTP(email, otp)
      return NextResponse.json({ status: true, statusCode: 200, message: "Berhasil mendaftar" }, { status: 200 })
    }
  } else {
    return NextResponse.json({ status: false, statusCode: 500, message: "Gagal mendaftar" }, { status: 500 })
  }
}