"use client"

import styles from "./styles/malas.module.css"
import { LoginAkun, RegisterAkun } from "./routes/Login";
import { useState } from "react";

export default function Apps() {
  const [ jikaLogin,  setJikaLogin ] = useState(true)

  return (
    <div className={styles.container}>
      {
        jikaLogin ? (<LoginAkun jikaLogin={() => setJikaLogin(false)}/>) :
        (<RegisterAkun jikaRegister={() => setJikaLogin(true)}/>)
      }
    </div>
  )
}
