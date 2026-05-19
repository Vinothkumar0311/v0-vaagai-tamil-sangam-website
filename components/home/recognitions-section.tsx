"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recognitions, organizationInfo } from "@/data/recognitions"
import { getAssetPath } from "@/lib/paths"

export function RecognitionsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FDFCF6] relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl -mr-24 sm:-mr-48 -mt-24 sm:-mt-48" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl -ml-24 sm:-ml-48 -mb-24 sm:-mb-48" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#004D40] mb-3 sm:mb-4 md:mb-6 leading-tight">
            அங்கீகாரங்களும் <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007084] to-primary">
              அனுமதிகளும்
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            வாகை தமிழ்ச்சங்கம் பெற்றுள்ள அதிகாரப்பூர்வ அங்கீகாரங்கள் மற்றும் அரசு அனுமதிகள்
          </p>
        </div>

        {/* Recognitions Carousel Container */}
        <div className="relative group max-w-full mb-10 sm:mb-12 md:mb-16">
          {/* Left Navigation Button */}
          <div className="absolute -left-2 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:scale-110"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Right Navigation Button */}
          <div className="absolute -right-2 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:scale-110"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-6 sm:py-8 md:py-10 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recognitions.map((recognition, index) => (
              <div 
                key={recognition.id}
                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] snap-center perspective-1000"
              >
                <Card className="group/card relative h-full overflow-hidden border-none bg-white shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl sm:rounded-3xl">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                  <div className="absolute top-2 right-3 sm:top-4 sm:right-6 opacity-5 group-hover/card:opacity-10 transition-opacity">
                    <ShieldCheck className="w-16 sm:w-24 h-16 sm:h-24 text-primary" />
                  </div>

                  <CardContent className="p-0 flex h-full flex-col sm:flex-row">
                    {/* Logo Section */}
                    <div className="w-full sm:w-[38%] bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                      <div className="relative w-full aspect-square bg-white rounded-2xl sm:rounded-3xl shadow-inner-lg p-3 sm:p-4 flex items-center justify-center transform group-hover/card:scale-110 transition-transform duration-500 max-w-32 sm:max-w-none">
                        {recognition.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={recognition.logo}
                              alt={recognition.nameEn}
                              fill
                              className="object-contain"
                              sizes="100px"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                            <span className="text-primary font-black text-xl sm:text-2xl">
                              {recognition.nameEn.slice(0, 1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full sm:w-[62%] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#004D40] mb-2 sm:mb-3 md:mb-4 leading-tight group-hover/card:text-primary transition-colors">
                          {recognition.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium line-clamp-4 sm:line-clamp-6 group-hover/card:text-gray-700 transition-colors">
                          {recognition.description}
                        </p>
                      </div>
                      
                      <div className="mt-4 sm:mt-6 flex items-center justify-between">
                        <div className="h-1 w-10 sm:w-12 bg-primary/20 rounded-full" />
                        <span className="text-[9px] sm:text-[10px] font-bold text-gray-300">#00{index + 1}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Info Banner - Redesigned as a 'Seal of Excellence' */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 max-w-5xl mx-auto">
          <div className="relative p-1 bg-gradient-to-r from-primary/30 via-[#007084]/20 to-primary/30 rounded-2xl sm:rounded-3xl shadow-lg md:shadow-xl">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
              {/* Background watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                <h4 className="text-5xl sm:text-7xl md:text-[10rem] font-black whitespace-nowrap">VAAGAI TRUST</h4>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-[#007084] p-1 flex items-center justify-center shadow-lg md:shadow-2xl transform hover:rotate-6 transition-transform">
                  <div className="w-full h-full rounded-full border-2 sm:border-4 border-white/20 flex items-center justify-center bg-white overflow-hidden relative">
                    <Image
                      src={getAssetPath("/icon.svg")}
                      alt="Logo"
                      fill
                      className="object-contain p-2 sm:p-4"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-[#004D40] mb-2 sm:mb-3 md:mb-4">
                    நிர்வாகப் பொறுப்பாளர்கள் & <span className="text-primary">அங்கீகாரங்கள்</span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                    &quot;{organizationInfo.registrationNote}&quot;
                  </p>
                  
                  <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    {["SRG NAMAKKAL 143", "NGO DARPAN REG", "MSME REGISTERED", "AICTE PARTNER"].map((tag) => (
                      <span key={tag} className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-50 border border-gray-100 rounded text-[8px] sm:text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .shadow-inner-lg {
          box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  )
}
