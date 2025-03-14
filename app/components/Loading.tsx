"use client"

import styles from "@/app/styles/malas.module.css"

export default function LoadingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginpages}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}