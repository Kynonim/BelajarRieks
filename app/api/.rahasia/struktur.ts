// Users Database
export type UserDatabases = {
  id: number,
  uid: string,
  name: string,
  email: string,
  password: string,
  timestamp: string,
}

// Login Database
export type LoginDatabase = {
  email: string,
  password: string,
}

// Routes Endpoint
export const RoutesEndpoint = {
  login: "/routes/login",
  register: "/routes/register",
  verify: "/routes/verify",
  beranda: "/routes/beranda",
}

// Api Endpoint
export const ApiEndpoint = {
  login: "/api/login",
  register: "/api/register",
  verify: "/api/verify",
}

// Session Database
export type SessionDatabase = {
  otp: number,
  email: string,
  times: number,
}

// Callback Api
export type MalasNgoding = {
  status: boolean,
  statusCode: number,
  message: string,
}