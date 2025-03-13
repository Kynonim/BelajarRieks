"use client"

import { RoutesEndpoint } from "@/app/api/.rahasia/struktur";
import styles from "@/app/styles/malas.module.css"
import { useRouter } from "next/navigation";

export default function Beranda() {
  const router = useRouter()

  const onKeluar = () => {
    localStorage.removeItem("kynonim")
    setTimeout(() => router.push(RoutesEndpoint.login), 1000);
  }

  const kue = () => {
    const kynonim = localStorage.getItem("kynonim")
    if (kynonim) {
      const email = kynonim.slice(30)
      const userid = kynonim.slice(8, 29)
      alert(`Email: ${email}\nUser ID: ${userid}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginpages}>
        <h1>Beranda</h1>
        <p className={styles.info}>Selamat datang di halaman beranda!</p>
        <button className={styles.klik} onClick={kue}>Cookie</button>
        <button className={styles.tombol} onClick={onKeluar}>LogOut</button>
      </div>
    </div>
  )
}