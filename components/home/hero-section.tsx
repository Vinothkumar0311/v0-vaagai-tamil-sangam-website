
import { getAssetPath } from "@/lib/paths"

export function HeroSection() {
  return (
    <div className="w-full">
      <section className="relative min-h-[98vh] md:min-h-[98vh] flex items-end justify-start overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src={getAssetPath("/video/header.mp4")}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-24 md:pb-32 text-left">
          <div className="max-w-3xl">
            <blockquote className="mb-4 md:mb-6">
              <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed text-balance">
                {'"தேமதுரத் தமிழோசை உலகமெல்லாம் பரவும் வகை செய்தல் வேண்டும்"'}
              </p>
            </blockquote>
            <cite className="block text-gold-light text-base md:text-lg font-medium">
              --பாரதியார்
            </cite>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}
