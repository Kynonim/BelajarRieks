"use client"

import { ApiEndpoint, RoutesEndpoint } from "@/app/api/.rahasia/struktur"
import { useRouter } from "next/navigation"
import { JSX, useState } from "react"
import styles from "@/app/styles/malas.module.css"
import LoadingPage from "@/app/components/Loading"

export default function VerifikasiEmail(): JSX.Element {
  const [ otp, setOtp ] = useState("")
  const [ message, setMesssage ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  const cekVerifikasiEmail = async (): Promise<void> => {
    setLoading(true)
    try {
      const localEmail = localStorage.getItem("email")
      if (!localEmail) {
        setMesssage("Email tidak ditemukan")
        setTimeout(() => router.push(RoutesEndpoint.register), 1000);
        return
      }
      const props = { email: localEmail, otp: parseInt(otp) }
      const res = await fetch(ApiEndpoint.verify, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(props)
      })
      const json = await res.json()
      if (json.status) {
        setMesssage(json.message)
        localStorage.removeItem("email")
        setTimeout(() => router.push(RoutesEndpoint.login), 3000)
      } else {
        setMesssage(json.message)
        if (json.statusCode === 400) {
          setTimeout(() => router.push(RoutesEndpoint.register), 1000)
        }
      }
    } catch (error) {
      setMesssage("Terjadi kesalahan " + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    loading ? <LoadingPage/> :
    <div className={styles.container}>
    <div className={styles.loginpages}>
      <h1>Verifikasi Email</h1>
      <div className={styles.loginpages}>
        <input className={styles.masukan} type="text" placeholder="Kode OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button className={styles.tombol} onClick={cekVerifikasiEmail}>Verifikasi</button>
        <p>{message && <span className={styles.info}>{message}</span>}</p>
      </div>
    </div>
    </div>
  )
}