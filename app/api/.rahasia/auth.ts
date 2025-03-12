import { existsSync, readFileSync, writeFileSync } from "fs"
import { ApiEndpoint, UserDatabases } from "./struktur"

const dbs = ApiEndpoint.database + "users.json"
let users: UserDatabases[] = []
let array: [] = []

if (!existsSync(dbs)) {
  writeFileSync(dbs, JSON.stringify(users))
} else {
  array = JSON.parse(readFileSync(dbs, "utf-8"))
  users = array
}

if (!Array.isArray(users)) {
  users = []
}

async function buatAkun(data: UserDatabases[]) {
  writeFileSync(dbs, JSON.stringify(users))
}

export { users, buatAkun }