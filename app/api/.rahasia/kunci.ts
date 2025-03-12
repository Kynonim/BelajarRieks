import { compare, hash } from "bcrypt"

export async function enkripsi(katasandi: string): Promise<{ status: boolean; data: string }> {
  try {
    const salt = 10
    const encrypt = await hash(katasandi, salt)
    return { status: true, data: encrypt }
  } catch (error) {
    return { status: false, data: String(error) }
  }
}
export async function verifikasi(katasandiEnkripsi: string, katasandi: string): Promise<boolean> {
  const verify = await compare(katasandi, katasandiEnkripsi)
  return verify ? true : false
}