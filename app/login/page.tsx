"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Lock, Mail } from "lucide-react"
import { firestore } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import bcrypt from "bcryptjs"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Direct Firebase Auth via Client for GitHub Pages Static Build

      const userDocRef = doc(firestore, "users", email)
      const userDocSnap = await getDoc(userDocRef)

      if (!userDocSnap.exists()) {
        setError("Invalid credentials")
        setLoading(false)
        return
      }

      const user = userDocSnap.data() as any
      const isValid = await bcrypt.compare(password, user.passwordHash)

      if (!isValid) {
        setError("Invalid credentials")
        setLoading(false)
        return
      }

      const sessionData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        mandram: user.mandram,
        expiresAt: Date.now() + 86400 * 1000 // 1 day expiration
      }
      localStorage.setItem("vaagai-session", JSON.stringify(sessionData))

      router.push("/admin/dashboard")
      router.refresh()
    } catch (err: any) {
      console.error(err)
      alert("Login Error: " + (err.message || String(err)))
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-primary/10">
        <CardHeader className="space-y-4 pb-6 items-center text-center">
          <div className="w-20 h-20 relative bg-white rounded-full flex items-center justify-center shadow-sm border border-primary/5 p-3">
             <Image src={getAssetPath("/icon.svg")} alt="Vaagai Logo" fill className="object-contain p-2" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold text-primary">நிர்வாகம் நுழைவு</CardTitle>
            <CardDescription className="text-foreground/70">
              வாகை தமிழ்ச்சங்கம் மன்ற நிர்வாகம்
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg font-medium border border-red-100 flex items-center">
                <span className="mr-2">⚠️</span> {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">மின்னஞ்சல் (Email)</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@vaagai.com"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">கடவுச்சொல் (Password)</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  className="pl-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold" 
              disabled={loading}
            >
              {loading ? "உள்நுழைகிறது..." : "உள்நுழைக (Login)"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
