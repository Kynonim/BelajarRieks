"use client"

import { useForm } from "react-hook-form"
import { ApiEndpoint, LoginDatabase, UserDatabases } from "../api/.rahasia/struktur"
import styles from "../styles/malas.module.css"
import { nanoid } from "nanoid"

export function RegisterAkun({ jikaRegister } : { jikaRegister?: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<UserDatabases>()

  const OnRegisterAkun = async (data: UserDatabases) => {
    const uid = nanoid()
    const content = { ...data, id: uid }
    const res = await fetch(ApiEndpoint.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    })
    const json = await res.json()
    if (json.status) {
      alert(json.message)
    } else {
      alert(json.message)
    }
  }

  return (
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
        <p>Sudah punya akun? <button className={styles.klik} onClick={jikaRegister} type="button">Login</button></p>
      </form>
    </div>
  )
}
export function LoginAkun({ jikaLogin } : { jikaLogin?: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginDatabase>()
  const OnLoginAkun = async (data: LoginDatabase) => {
    const res = await fetch(ApiEndpoint.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    if (json.status) {
      alert(json.message)
    } else {
      alert(json.message)
    }
  }
  
  return (
    <div className={styles.loginpages}>
      <h1>Login</h1>
      <form className={styles.loginpages} onSubmit={handleSubmit(OnLoginAkun)}>
        <input className={styles.masukan} placeholder="Email" {...register("email", { required: "Email harus diisi" })} />
        {errors.email && <span>{errors.email.message}</span>}
        <input className={styles.masukan} placeholder="Password" {...register("password", { required: "Password harus diisi" })} />
        {errors.password && <span>{errors.password.message}</span>}
        <button className={styles.tombol}>Login</button>
        <p>Belum punya akun? <button className={styles.klik} onClick={jikaLogin}>Register</button></p>
      </form>
    </div>
  )
}