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
        <div className="relative aspect-square bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 overflow-hidden bg-primary/10 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src={getAssetPath("/images/team/chairman.jpg")}
                  alt={chairman.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className="text-primary font-bold text-4xl">
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
