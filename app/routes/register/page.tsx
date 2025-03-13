"use client"

import { UserDatabases, ApiEndpoint, RoutesEndpoint } from "@/app/api/.rahasia/struktur"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import styles from "@/app/styles/malas.module.css"

export default function RegisterAkun() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserDatabases>()
  const router = useRouter()

  const OnRegisterAkun = async (data: UserDatabases) => {
    const uid = nanoid()
    const content = { ...data, uid: uid }
    const res = await fetch(ApiEndpoint.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    })
    const response = await res.json()
    if (response.status) {
      alert(response.message)
      localStorage.setItem("email", data.email)
      router.push(RoutesEndpoint.verify)
    } else {
      alert(response.message)
    }
  }

  const onLogin = (): void => router.push(RoutesEndpoint.login)

  return (
    <div className={styles.container}>
      <div className={styles.loginpages}>
      <h1>Register</h1>
      <form className={styles.loginpages} onSubmit={handleSubmit(OnRegisterAkun)}>
        <input className={styles.masukan} placeholder="Nama" {...register("name", { required: "Nama harus diisi" })} />
        {errors.name && <span>{errors.name.message}</span>}
        <input className={styles.masukan} placeholder="Email" {...register("email", { required: "Email harus diisi" })} />
        {errors.email && <span>{errors.email.message}</span>}
        <input className={styles.masukan} placeholder="Password" type="password" {...register("password", { required: "Password harus diisi" })} />
        {errors.password && <span>{errors.password.message}</span>}
        <button className={styles.tombol} type="submit">Register</button>
      </form>
      <p>Sudah punya akun ? <button className={styles.klik} onClick={onLogin}>Login</button></p>
    </div>
    </div>
  )
}