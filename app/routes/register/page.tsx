"use client"

import { UserDatabases, ApiEndpoint, RoutesEndpoint } from "@/app/api/.rahasia/struktur"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import styles from "@/app/styles/malas.module.css"
import { useState } from "react"
import LoadingPage from "@/app/components/Loading"

export default function RegisterAkun() {
  const [ loading, setLoading ] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<UserDatabases>()
  const router = useRouter()

  const OnRegisterAkun = async (data: UserDatabases) => {
    setLoading(true)
    try {
      const uid = nanoid(21)
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
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const onLogin = (): void => router.push(RoutesEndpoint.login)

  return (
    loading ? <LoadingPage/> :
    <div className={styles.container}>
      <div className={styles.loginpages}>
      <h1>Register</h1>
      <form className={styles.loginpages} onSubmit={handleSubmit(OnRegisterAkun)}>
        <input className={styles.masukan} placeholder="Nama" {...register("name", { required: "Nama harus diisi" })} />
        {errors.name && <span className={styles.inputinfo}>{errors.name.message}</span>}
        <input className={styles.masukan} placeholder="Email" {...register("email", { required: "Email harus diisi" })} />
        {errors.email && <span className={styles.inputinfo}>{errors.email.message}</span>}
        <input className={styles.masukan} placeholder="Password" type="password" {...register("password", { required: "Password harus diisi" })} />
        {errors.password && <span className={styles.inputinfo}>{errors.password.message}</span>}
        <button className={styles.tombol} type="submit">Register</button>
      </form>
      <p>Sudah punya akun ? <button className={styles.klik} onClick={onLogin}>Login</button></p>
    </div>
    </div>
  )
}