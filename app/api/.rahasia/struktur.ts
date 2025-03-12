// Users Database
export type UserDatabases = {
  id: string,
  name: string,
  email: string,
  password: string,
}

// Login Database
export type LoginDatabase = {
  email: string,
  password: string,
}

// Api Endpoint
export const ApiEndpoint = {
  login: "/api/login",
  register: "/api/register",
  database: "./app/api/.rahasia/database/",
}

// Routes Endpoint
export const RoutesEndpoint = {
  login: "/routes/login",
  register: "/routes/register",
}

// Callback Api
export type MalasNgoding = {
  status: boolean,
  statusCode: number,
  message: string,
}