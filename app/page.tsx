"use client"

import "dotenv/config"
import { useRouter } from "next/navigation"
import { RoutesEndpoint } from "./api/.rahasia/struktur"
import { useEffect } from "react"

export default function Apps() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("kynonim")
    if (token?.startsWith("kynonim")) {
      router.push(RoutesEndpoint.beranda)
    } else {
      router.push(RoutesEndpoint.login)
    }
  }, [ router])
}
