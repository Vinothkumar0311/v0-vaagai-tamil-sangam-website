"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/paths"

interface TeamMemberCardProps {
  name: string
  role: string
  image?: string
}

export function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-square bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-gold/10">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 overflow-hidden">
              {!imageError && image ? (
                <Image
                  src={getAssetPath(image)}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-primary font-bold text-lg">
                  {name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="p-3 text-center">
          <h3 className="font-medium text-sm text-foreground truncate">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {role}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
