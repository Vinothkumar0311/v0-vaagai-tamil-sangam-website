import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { createSession } from "@/lib/auth"
import { firestore } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const userDocRef = doc(firestore, "users", email)
    const userDocSnap = await getDoc(userDocRef)

    if (!userDocSnap.exists()) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const user = userDocSnap.data() as any

    const isValid = await bcrypt.compare(password, user.passwordHash)

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create session token
    const token = await createSession(user)

    // Set cookie
    const response = NextResponse.json({ success: true })
    response.cookies.set({
      name: "vaagai-session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
