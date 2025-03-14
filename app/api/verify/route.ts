import { NextResponse } from "next/server"
import db from "../.rahasia/auth"
import { SessionDatabase } from "../.rahasia/struktur"

export async function POST(req: Request) {
  const { email, otp } = await req.json()
  const user = db.prepare("SELECT * FROM sessions WHERE email = ?").get(email) as SessionDatabase
  if (!user) return NextResponse.json({ status: false, statusCode: 400, message: "Email tidak terdaftar" }, { status: 400 })
  
  const nowTime = new Date().getTime()
  const otpTime = user.times

  if (otp !== user.otp) return NextResponse.json({ status: false, statusCode: 405, message: "Kode OTP salah" }, { status: 405 })
  if (nowTime > otpTime) {
    await onHapus(email)
    return NextResponse.json({ status: false, statusCode: 400, message: "Kode OTP sudah kadaluarsa" }, { status: 400 })
  }
  await onHapus(email, false)
  return NextResponse.json({ status: true, statusCode: 200, message: "Verifikasi berhasil" }, { status: 200 })
}

async function onHapus(email: string, status: boolean = true) {
  if (status) {
    db.prepare("DELETE FROM users WHERE email = ?").run(email)
  }
  db.prepare("DELETE FROM sessions WHERE email = ?").run(email)
}