import Database from "better-sqlite3"

const dbPath = process.env?.DATABASE_PATH
const dbName = process.env?.DATABASE_NAME
const db = new Database(`${dbPath}${dbName ?? "abcdefghijklmnopqrstuvwxyz.db"}`)

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS chats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender TEXT NOT NULL,
    receiver TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    otp INTEGER NOT NULL,
    email TEXT NOT NULL,
    times INTEGER NOT NULL
  );
`)

export default db