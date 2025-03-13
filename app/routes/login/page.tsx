"use client"

import { useForm } from "react-hook-form"
import { ApiEndpoint, LoginDatabase, RoutesEndpoint } from "../../api/.rahasia/struktur"
import styles from "@/app/styles/malas.module.css"
import { useRouter } from "next/navigation"

export default function LoginAkun() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginDatabase>()
  const router = useRouter()
  
  const OnLoginAkun = async (data: LoginDatabase) => {
    const res = await fetch(ApiEndpoint.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const response = await res.json()
    if (response.status) {
      localStorage.setItem("kynonim", `kynonim-${response.uid}-${data.email}`)
      router.push(RoutesEndpoint.beranda)
    } else {
      alert(response.message)
    }
  }

  const onRegister = (): void => router.push(RoutesEndpoint.register)

  return (
    <div className={styles.container}>
      <div className={styles.loginpages}>
      <h1>Login</h1>
      <form className={styles.loginpages} onSubmit={handleSubmit(OnLoginAkun)}>
        <input className={styles.masukan} placeholder="Email" {...register("email", { required: "Email harus diisi" })} />
        {errors.email && <span>{errors.email.message}</span>}
        <input className={styles.masukan} placeholder="Password" {...register("password", { required: "Password harus diisi" })} />
        {errors.password && <span>{errors.password.message}</span>}
        <button className={styles.tombol}>Login</button>
      </form>
      <p>Belum punya akun? <button className={styles.klik} onClick={onRegister}>Register</button></p>
    </div>
    </div>
  )
}