"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { getAssetPath } from "@/lib/paths"

export function RoadmapDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="relative w-full aspect-[6/6] md:aspect-video rounded-2xl overflow-hidden border border-primary/10 shadow-sm bg-slate-50/50 cursor-pointer hover:shadow-md transition-all group"
        >
          <Image
            src={getAssetPath("/images/activities/d_page-0001.jpg")}
            alt="வருடாந்திர நிகழ்வுகள் மற்றும் விருதுகள்"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain transition-transform group-hover:scale-[1.01] duration-300"
            priority
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-7xl h-[90vh] p-2 md:p-6 bg-white/95 backdrop-blur-sm border-0">
        <DialogTitle className="sr-only">வருடாந்திர நிகழ்வுகள் மற்றும் விருதுகள்</DialogTitle>
        <div className="relative w-full h-full">
          <Image
            src={getAssetPath("/images/activities/d_page-0001.jpg")}
            alt="வருடாந்திர நிகழ்வுகள் மற்றும் விருதுகள்"
            fill
            sizes="95vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
