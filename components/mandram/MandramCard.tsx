"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mandram } from "@/lib/mandramData"
import { getAssetPath } from "@/lib/paths"

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
      <Card className="h-full overflow-hidden border-0 shadow-lg group bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-2xl ring-1 ring-black/5 flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800">
          <Image
            src={getAssetPath(mandram.banner)}
            alt={mandram.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex-grow flex flex-col gap-3">
          <h3 className="text-xl font-bold text-primary dark:text-white leading-tight">
            {mandram.title}
          </h3>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
            {mandram.objective}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

