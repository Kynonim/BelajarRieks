import { NextResponse } from "next/server";
import { LoginDatabase, UserDatabases } from "../.rahasia/struktur";
import { verifikasi } from "../.rahasia/kunci";
import { users } from "../.rahasia/auth";

export async function POST(req: Request) {
  const { email, password }: LoginDatabase = await req.json()
  if (!email || !password) {
    return NextResponse.json({ status: false, statusCode: 400, message: "Data tidak lengkap" }, { status: 400 })
  } else {
    const user = users.find((user : UserDatabases) => user.email === email)
    if (!user) {
      return NextResponse.json({ status: false, statusCode: 404, message: "Email tidak ditemukan" }, { status: 404 })
    } else {
      const verify = await verifikasi(user.password, password)
      if (verify) {
        return NextResponse.json({ status: true, statusCode: 200, message: "Login berhasil" }, { status: 200 })
      } else {
        return NextResponse.json({ status: false, statusCode: 401, message: "Password salah" }, { status: 401 })
      }
    }
  }
}