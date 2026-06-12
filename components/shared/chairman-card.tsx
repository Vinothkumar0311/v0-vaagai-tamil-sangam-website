"use client"

import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { chairman } from "@/data/team"

export function ChairmanCard() {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-[3/2] bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-2xl border-4 border-primary/30 overflow-hidden bg-primary/10 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src={getAssetPath("head.png")}
                  alt={chairman.name}
                  width={400}
                  height={266}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <span className="text-primary font-bold text-6xl">
                  {chairman.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-1">
            {chairman.name}
          </h3>
          <p className="text-gold font-medium mb-2">{chairman.role}</p>
          <p className="text-sm text-muted-foreground">
            {chairman.organization}
          </p>
          <p className="text-sm text-muted-foreground">
            {chairman.location}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
