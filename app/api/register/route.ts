import { NextResponse } from "next/server"
import { buatAkun, users } from "../.rahasia/auth"
import { UserDatabases } from "../.rahasia/struktur"
import { enkripsi } from "../.rahasia/kunci"

export async function POST(req: Request) {
  const { id, name, email, password }: UserDatabases = await req.json()
  if (!id || !name || !email || !password) {
    return NextResponse.json({ status: false, statusCode: 400, message: "Data tidak lengkap" }, { status: 400 })
  } else {
    const finder = users.find((user : UserDatabases) => user.email === email)
    if (finder) {
      return NextResponse.json({ status: false, statusCode: 409, message: "Email sudah terdaftar" }, { status: 409 })
    } else {
      const { status, data } = await enkripsi(password)
      if (!status) {
        return NextResponse.json({ status: false, statusCode: 500, message: "Terjadi kesalahan pada server" }, { status: 500 })
      }
      const user = { id, name, email, password: data }
      users.push(user)
      buatAkun(users)
      return NextResponse.json({ status: true, statusCode: 201, message: "Akun berhasil dibuat" }, { status: 201 })
    }
  }
}