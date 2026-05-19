
import { getAssetPath } from "@/lib/paths"

export function HeroSection() {
  return (
    <div className="w-full">
      <section className="relative min-h-[75dvh] sm:min-h-[85dvh] md:min-h-[100dvh] flex items-end justify-start overflow-hidden bg-zinc-950">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={getAssetPath("/video/header.mp4")}
            poster={getAssetPath("/images/hero/temple-prayer.jpg")}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full"
          />
          {/* Gradient Overlay for high text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 pb-20 sm:pb-24 md:pb-32 text-left w-full">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
            <blockquote className="mb-4 md:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white leading-relaxed md:text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {'"தேமதுரத் தமிழோசை உலகமெல்லாம் பரவும் வகை செய்தல் வேண்டும்"'}
              </p>
            </blockquote>
            <cite className="block text-gold-light text-sm sm:text-base md:text-lg lg:text-xl font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              --பாரதியார்
            </cite>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1 backdrop-blur-[1px]">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}



