"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recognitions, organizationInfo } from "@/data/recognitions"

export function RecognitionsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            அங்கீகாரங்களும் அனுமதிகளும்
          </h2>
        </div>

        {/* Recognitions Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 py-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recognitions.map((recognition) => (
              <Card
                key={recognition.id}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center border shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-bold text-xs text-center">
                        {recognition.nameEn.slice(0, 4)}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {recognition.name}
                      </h3>
                      {recognition.registrationNo && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {recognition.registrationNo}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 mt-4 leading-relaxed">
                    {recognition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organization Info Banner */}
        <div className="mt-12">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal-light to-primary" />
            
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 p-6 md:p-12 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white font-bold text-lg md:text-xl">வா</span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  வாகை தமிழ்ச்சங்க பொறுப்பாளர்கள்
                </h3>
              </div>
              <p className="text-white/90 max-w-3xl mx-auto mb-6">
                {organizationInfo.registrationNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
