"use client"

import Image from "next/image"
import Link from "next/link"
import { getAssetPath } from "@/lib/paths"
import { motion } from "framer-motion"

interface MandramHeaderProps {
  mandramTitle: string
  mandramLogo: string
}

export function MandramHeader({ mandramTitle, mandramLogo }: MandramHeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-border/40 py-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Top-left: VAAGAI logo */}
          <Link href="/" className="flex items-center gap-3 group order-1 md:order-none shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-md transition-transform group-hover:scale-105">
              <Image
                src={getAssetPath("/icon.svg")}
                alt="Vaagai Tamilsangam Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </Link>

          {/* Top-center: Organization name & Affiliation */}
          <div className="text-center order-3 md:order-none flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-2">
              வாகை தமிழ்ச்சங்கம்
            </h1>
            <div className="flex flex-col items-center justify-center">
               <span className="h-0.5 w-24 bg-gold mb-2 rounded-full" />
               <p className="text-sm md:text-base text-gold font-bold uppercase tracking-widest leading-tight">
                  மதுரை உலக தமிழ்ச்சங்கத்தின் அங்கீகரிக்கப்பட்ட அமைப்பு
               </p>
               <span className="h-0.5 w-24 bg-gold mt-2 rounded-full" />
            </div>
          </div>

          {/* Top-right: Mandram-specific logo */}
          <div className="flex flex-col items-center gap-2 order-2 md:order-none shrink-0">
             <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/10 shadow-md">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={getAssetPath(mandramLogo)} 
                    alt={mandramTitle} 
                    fill 
                    className="object-contain p-1"
                  />
                </motion.div>
             </div>
             <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                {mandramTitle}
             </span>
          </div>
        </div>
      </div>
    </header>
  )
}
