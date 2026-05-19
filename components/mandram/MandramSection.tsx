"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { getAssetPath } from "@/lib/paths"
import { CheckCircle2, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface MandramSectionProps {
  title: string
  objective: string
  features: { title: string; desc: string }[]
  image: string
  themeColor?: string
}

export function MandramSection({
  title,
  objective,
  features,
  image,
  themeColor = "text-primary"
}: MandramSectionProps) {
  return (
    <section className="pt-10 pb-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Title with decorative element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="w-16 h-1 bg-gold mb-6 rounded-full" />
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", themeColor)}>
            {title}
          </h2>
          <div className="w-16 h-1 bg-gold mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Objective column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Star className="text-gold w-6 h-6 fill-gold" />
                நோக்கம்
              </h3>
              <p className="text-xl text-foreground/80 leading-relaxed italic border-l-4 border-gold pl-6">
                {objective}
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-3xl border border-primary/5 shadow-inner">
              <h4 className="font-bold text-primary mb-6 text-xl">முக்கிய செயல்பாடுகள்:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-base leading-tight mb-1">{feature.title}</h5>
                      <p className="text-xs text-foreground/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-slate-900">
              <Image
                src={getAssetPath(image)}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-0" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
