"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { getAssetPath } from "@/lib/paths"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { activities, competitionPoem } from "@/data/activities"
import { cn } from "@/lib/utils"

export function ActivitiesSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            போட்டிகளும் விருதுகளும்
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            ஒவ்வொருவருக்குள்ளும் பல திறமைகள் ஒளிந்திருக்கும், அவற்றை வெளிக்கொணருவதில் போட்டிகளுக்கு 
            இன்றியமையாத பங்குள்ளது. தமிழார்வலர்களின் தமிழ்க் கல்வியின் ஆழ அகலத்தையும், 
            மொழித்திறன்களையும், கவின்கலை, நுண்கலைத் திறன்களையும் வெளிப்படுத்தும் அவற்றிற்குரிய 
            அங்கீகாரம் பெறுவதற்கும் களமாக வாகை தமிழ்ச்சங்கம் ஆண்டுமுழுவதும் அல்வத்திங்களுக்கந்த 
            தலைப்புகளில் பல்வேறு வகைமைகளில் போட்டிகளை நடத்திப் பரிசுகளையும் விருதுகளையும் வழங்கி வருகிறது.
          </p>
        </div>

        {/* Competition Poem Card */}
        <Card className="mb-12 bg-muted/50 border-primary/10">
          <CardContent className="p-6 md:p-8">
            <div className="text-center">
              {competitionPoem.lines.map((line, index) => (
                <p key={index} className="text-foreground/80 italic mb-1 last:mb-0">
                  {`"${line}`}{index === competitionPoem.lines.length - 1 && '"'}
                </p>
              ))}
              <p className="text-muted-foreground text-sm mt-4">
                --{competitionPoem.author}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className={cn(
                "overflow-hidden border-0 shadow-lg transition-transform hover:-translate-y-1",
                activity.theme === "teal" && "bg-teal text-white",
                activity.theme === "gold" && "bg-gold text-white",
                activity.theme === "cream" && "bg-cream text-foreground"
              )}
            >
              <div className="relative aspect-video">
                <Image
                  src={getAssetPath(activity.image)}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle
                  className={cn(
                    "text-xl font-bold",
                    activity.theme === "cream" ? "text-primary" : "text-current"
                  )}
                >
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activity.quote && (
                  <p className={cn(
                    "text-sm italic mb-3",
                    activity.theme === "cream" ? "text-gold" : "text-current/90"
                  )}>
                    {`"${activity.quote}"${activity.quoteAuthor ? ` (${activity.quoteAuthor})` : ""}`}
                  </p>
                )}
                <p className={cn(
                  "text-sm leading-relaxed line-clamp-3",
                  activity.theme === "cream" ? "text-foreground/80" : "text-current/90"
                )}>
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Slider */}
        <div className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-2xl overflow-hidden p-6 md:p-12">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((slide) => (
                  <CarouselItem key={slide}>
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                      {/* Text */}
                      <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                        <h3 className="text-xl md:text-3xl font-bold mb-1">
                          வாகை தமிழ்ச்சங்கம்
                        </h3>
                        <p className="text-2xl md:text-4xl font-bold text-gold-light">
                          பட்டமளிப்பு விழா
                        </p>
                      </div>
                      {/* Image Placeholder */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm border-2 md:border-4 border-white/30 shadow-xl">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white/60 text-xs md:text-sm text-center p-4">
                              நிகழ்வு புகைப்படம் {slide}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={() => api?.scrollPrev()}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <div className="flex gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-8 h-1 rounded-full transition-all",
                        current === index ? "bg-white" : "bg-white/30"
                      )}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={() => api?.scrollNext()}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </Carousel>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="group">
            <Link href="/activities">
              அனைத்து செயல்பாடுகளையும் காண
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
