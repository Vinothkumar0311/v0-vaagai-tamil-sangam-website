import { NextResponse } from "next/server"
import { firestore } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"
import { MOCK_USERS } from "@/lib/auth"

export async function GET() {
  try {
    const promises = MOCK_USERS.map(async (user) => {
      // Use email as document ID for easier lookup, or user.id
      const userRef = doc(firestore, "users", user.email)
      await setDoc(userRef, {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        mandram: user.mandram,
      })
    })

    await Promise.all(promises)

    return NextResponse.json({ success: true, message: "Firebase DB Seeded with Users" })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
