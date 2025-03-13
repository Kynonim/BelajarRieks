import { NextResponse } from "next/server";
import { LoginDatabase, UserDatabases } from "../.rahasia/struktur";
import { verifikasi } from "@/app/lib/kunci";
import db from "../.rahasia/auth";

export async function POST(req: Request) {
  const { email, password }: LoginDatabase = await req.json()
  if (!email || !password) return NextResponse.json({ status: false, statusCode: 400, message: "Data tidak lengkap" }, { status: 400 })

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email) as UserDatabases
  const verify: Promise<Boolean> = verifikasi(user.password, password)
  return await verify ? NextResponse.json({ status: true, statusCode: 200, message: "Login berhasil", uid: String(user.uid) }, { status: 200 }) : NextResponse.json({ status: false, statusCode: 401, message: "Email atau password salah" }, { status: 401 })
}