"use client"

import { RoutesEndpoint } from "@/app/api/.rahasia/struktur";
import styles from "@/app/styles/malas.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isSession } from "./session";

export default function Beranda() {
  const router = useRouter()

  const onKeluar = () => {
    localStorage.removeItem("kynonim")
    setTimeout(() => router.push(RoutesEndpoint.login), 1000);
  }

  useEffect(() => {
    const kynonim = localStorage.getItem("kynonim") ?? ""
    if (!kynonim) {
      setTimeout(() => router.push(RoutesEndpoint.login), 1000);
    }
    const times = kynonim.slice(30)
    //const userid = kynonim.slice(8, 29)
    if (isSession(parseInt(times))) {
      localStorage.removeItem("kynonim")
      setTimeout(() => router.push(RoutesEndpoint.login), 1000);
    }
  }, [router])
  return (
    <div className={styles.container}>
      <div className={styles.loginpages}>
        <h1>Beranda</h1>
        <p className={styles.info}>Selamat datang di halaman beranda!</p>
        <button className={styles.tombol} onClick={onKeluar}>LogOut</button>
      </div>
    </div>
  )
}