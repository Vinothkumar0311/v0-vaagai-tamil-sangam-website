"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mandram } from "@/lib/mandramData"
import { getAssetPath } from "@/lib/paths"
import { ArrowRight } from "lucide-react"

interface MandramCardProps {
  mandram: Mandram
}

export function MandramCard({ mandram }: MandramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/mandram/${mandram.slug}`}>
        <Card className="h-full overflow-hidden border-0 shadow-lg group cursor-pointer bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-2xl ring-1 ring-black/5">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={getAssetPath(mandram.banner)}
              alt={mandram.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white leading-tight">
                {mandram.title}
              </h3>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
              {mandram.description}
            </p>
            <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
              மேலும் அறிய <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
