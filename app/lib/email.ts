import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env?.EMAIL_HOST,
  port: Number(process.env?.EMAIL_PORT),
  auth: {
    user: process.env?.EMAIL_USER,
    pass: process.env?.EMAIL_PASS
  }
} as nodemailer.TransportOptions)

export const kirimKodeOTP = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env?.EMAIL_ADDRESS,
    to: email,
    subject: "Kode OTP untuk Verifikasi Email",
    html: `
    <p>Kode OTP Anda adalah:</p>
    <h1>${otp}</h1>
    <p>Gunakan kode ini untuk verifikasi email Anda.</p>
    <p>Kode ini akan kadaluarsa dalam 10 menit.</p>
    `
  })
}

export const buatKodeOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export const batasWaktuOTP = new Date(Date.now() + 10 * 60 * 1000).getTime() // 10 menit dari sekarang