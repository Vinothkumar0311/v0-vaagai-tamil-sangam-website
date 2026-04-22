import { SignJWT, jwtVerify } from "jose"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "super-secret-jwt-key-vaagai-mandrams-2025"
) // In production, never hardcode this.

export type Role = "admin" | "club"

export type MandramType = "panuval" | "mazhalai" | "magalir" | "kural" | "manavar" | "all"

export interface User {
  id: string
  name: string
  email: string
  passwordHash: string
  role: Role
  mandram: MandramType
}

// Generate an initial hash for testing if you need to:
// console.log(bcrypt.hashSync("admin123", 10))
// console.log(bcrypt.hashSync("club123", 10))

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "System Admin",
    email: "admin@vaagai.com",
    passwordHash: bcrypt.hashSync("admin123", 10),
    role: "admin",
    mandram: "all",
  },
  {
    id: "u2",
    name: "Panuval Admin",
    email: "panuval@vaagai.com",
    passwordHash: bcrypt.hashSync("club123", 10),
    role: "club",
    mandram: "panuval",
  },
  {
    id: "u3",
    name: "Mazhalai Admin",
    email: "mazhalai@vaagai.com",
    passwordHash: bcrypt.hashSync("club123", 10),
    role: "club",
    mandram: "mazhalai",
  },
  {
    id: "u4",
    name: "Magalir Admin",
    email: "magalir@vaagai.com",
    passwordHash: bcrypt.hashSync("club123", 10),
    role: "club",
    mandram: "magalir",
  },
  {
    id: "u5",
    name: "Kural Admin",
    email: "kural@vaagai.com",
    passwordHash: bcrypt.hashSync("club123", 10),
    role: "club",
    mandram: "kural",
  },
  {
    id: "u6",
    name: "Manavar Admin",
    email: "manavar@vaagai.com",
    passwordHash: bcrypt.hashSync("club123", 10),
    role: "club",
    mandram: "manavar",
  },
]

export interface AuthSession {
  id: string
  name: string
  email: string
  role: Role
  mandram: MandramType
}

export async function createSession(user: User): Promise<string> {
  const session: AuthSession = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    mandram: user.mandram,
  }

  const token = await new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(SECRET_KEY)

  return token
}

export async function verifyToken(token: string): Promise<AuthSession | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload as unknown as AuthSession
  } catch (error) {
    return null
  }
}

export async function getSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("vaagai-session")?.value
  if (!token) return null
  return await verifyToken(token)
}
