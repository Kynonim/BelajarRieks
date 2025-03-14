# 🚀 My Project dengan Next.js

Mini Proyek App yang dibangun dengan Next.js, dan SQLite
Kebutuhan buat Belajar. Fitur-fitur utama:
- Registrasi dan Login dengan verifikasi OTP.
- Manajemen Session dengan batas waktu 3 hari.

## 📦 Instalasi

1. Clone Repositori
```bash
git clone https://github.com/Kynonim/BelajarRieks.git
cd BelajarRieks
```

2. Install Dependencies
  * Menggunakan Node.js (npm):
```bash
npm install
```

  * Menggunakan Bun:
```bash
bun install
```

## 🛠️ Setup Environment

Buat file <strong>.env</strong> di root project dan tambahkan variabel berikut:
```env
# Database
DATABASE_PATH="/your/database/path"
DATABASE_NAME="your-database-name.sqlite"

# Email (untuk verifikasi OTP)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-email-password"
EMAIL_HOST="your-email-host"
EMAIL_PORT=your-email-port

NEXT_PUBLIC_SOCKET_SERVER="http://localhost:3000"
```

## 🚀 Menjalankan Proyek

1. Menjalankan di Node.js
```bash
npm run dev
```

2. Menjalankan di Bun
```bash
bun run dev
```

* Setelah itu, buka browser dan akses:
- http://localhost:3000

## 🛠️ Struktur Proyek
```bash
BelajarRieks/
├── app/
│   ├── api/                  # API Routes
│   ├── routes/               # Halaman Aplikasi
│   ├── components/           # Komponen UI
│   ├── lib/                  # Utility functions
│   ├── styles/               # Styling CSS
│   ├── pages.tsx             # Halaman Utama
│   └── layout.tsx            # Layout utama
├── public/                   # File statis (gambar, video, dll.)
├── .env                      # File environment
├── package.json              # Dependencies
└── README.md                 # Dokumentasi proyek
```

## 🔧 Teknologi yang Digunakan

- Next.js: Framework React untuk SSR dan routing.
- SQLite: Mini database lokal untuk menyimpan data pengguna.
- Nodemailer: Untuk mengirim email verifikasi OTP.
- Bcrypt: Untuk enkripsi password pengguna.
- Nano ID: Untuk menghasilkan ID unik.
- Dontenv: Untuk mengelola variabel lingkungan.

## 📝 Cara Menjalankan di Produksi

1. Build Proyek
  * Menggunakan Node.js (npm):
```bash
npm run build
```

  * Menggunakan Bun:
```bash
bun run build
```

2. Jalankan Server Produksi
  * Menggunakan Node.js (npm):
```bash
npm start
```

  * Menggunakan Bun:
```bash
bun run start
```

## 📄 Lisensi

Binggung mau ngasih lisensi apa ?

## 🙏 Kontribusi

Kontribusi sangat diterima! Silakan buka issue atau pull request untuk berkontribusi.

## 📧 Kontak

Jika ada pertanyaan atau masalah, hubungi:

- Facebook: [Riky Ripaldo](https://www.facebook.com/rikyxdz)
- Email: [rikyripaldo@icloud.com]()
- GitHub: [Kynonim](https://github.com/Kynonim)