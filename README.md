# 🚀 My Project dengan Next.js

Auth real-time yang dibangun dengan Next.js, dan SQLite. Fitur-fitur utama:
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

Buat file .env di root project dan tambahkan variabel berikut:
```env
# Database
DATABASE_PATH="sqlite:./chat.db"
DATABASE_NAME

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
aplikasi-chat-nextjs/
├── app/
│   ├── api/                  # API Routes
│   ├── chat/                 # Halaman Chat
│   ├── login/                # Halaman Login
│   ├── register/             # Halaman Registrasi
│   └── layout.tsx            # Layout utama
├── components/               # Komponen UI
├── lib/                      # Utility functions
├── public/                   # File statis (gambar, font, dll.)
├── styles/                   # File CSS
├── .env                      # File environment
├── package.json              # Dependencies
└── README.md                 # Dokumentasi proyek
```

## 🔧 Teknologi yang Digunakan

- Next.js: Framework React untuk SSR dan routing.
- Socket.IO: Untuk komunikasi real-time.
- Tailwind CSS: Untuk styling komponen.
- SQLite: Database lokal untuk menyimpan data pengguna dan chat.
- Nodemailer: Untuk mengirim email verifikasi OTP.
- JWT: Untuk autentikasi dan manajemen session.

## 📝 Cara Menjalankan di Produksi

1. Build Proyek
   npm run build

2. Jalankan Server Produksi
   npm start

## 📄 Lisensi

Binggung mau ngasih lisensi apa ?

## 🙏 Kontribusi

Kontribusi sangat diterima! Silakan buka issue atau pull request untuk berkontribusi.

## 📧 Kontak

Jika ada pertanyaan atau masalah, hubungi:

- Nama: [Riky Ripaldo]
- Email: [rikyripaldo@icloud.com]
- GitHub: [Kynonim](https://github.com/Kynonim)