"use client"

import { useForm } from "react-hook-form"
import { ApiEndpoint, LoginDatabase, RoutesEndpoint } from "../../api/.rahasia/struktur"
import { useRouter } from "next/navigation"
import styles from "../../styles/malas.module.css"
import { useEffect, useState } from "react"
import LoadingPage from "@/app/components/Loading"
import { getExpiresTimes, isSession } from "../beranda/session"

export default function LoginAkun() {
  const [ loading, setLoading ] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginDatabase>()
  const router = useRouter()
  
  const OnLoginAkun = async (data: LoginDatabase) => {
    setLoading(true)
    try {
      const res = await fetch(ApiEndpoint.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const response = await res.json()
      if (response.status) {
        localStorage.setItem("kynonim", `kynonim-${response.uid}-${getExpiresTimes()}`)
        router.push(RoutesEndpoint.beranda)
      } else {
        alert(response.message)
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const onRegister = (): void => router.push(RoutesEndpoint.register)

  useEffect(() => {
    const kynonim = localStorage.getItem("kynonim") ?? ""
    if (kynonim) {
      if (!isSession(parseInt(kynonim.slice(30)))) {
        router.push(RoutesEndpoint.beranda)
      } else {
        localStorage.removeItem("kynonim")
        router.push(RoutesEndpoint.login)
      }
    }
  }, [router])

  return (
    loading ? <LoadingPage/> :
    <div className={styles.container}>
      <div className={styles.loginpages}>
      <h1>Login</h1>
      <form className={styles.loginpages} onSubmit={handleSubmit(OnLoginAkun)}>
        <input className={styles.masukan} placeholder="Email" {...register("email", { required: "Email harus diisi" })} />
        {errors.email && <span className={styles.inputinfo}>{errors.email.message}</span>}
        <input className={styles.masukan} placeholder="Password" {...register("password", { required: "Password harus diisi" })} />
        {errors.password && <span className={styles.inputinfo}>{errors.password.message}</span>}
        <button className={styles.tombol}>Login</button>
      </form>
      <p>Belum punya akun? <button className={styles.klik} onClick={onRegister}>Register</button></p>
    </div>
    </div>
  )
}