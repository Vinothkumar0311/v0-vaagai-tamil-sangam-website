
import { getAssetPath } from "@/lib/paths"

export function HeroSection() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen flex items-end justify-start overflow-hidden bg-zinc-950">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src={getAssetPath("/video/header.mp4")}
            poster={getAssetPath("/images/hero/temple-prayer.jpg")}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - optimized for better text legibility at all breakpoints */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-end">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
              <blockquote className="mb-3 sm:mb-4 md:mb-6">
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-snug sm:leading-relaxed md:leading-relaxed text-balance drop-shadow-lg">
                  {'"தேமதுரத் தமிழோசை உலகமெல்லாம் பரவும் வகை செய்தல் வேண்டும்"'}
                </p>
              </blockquote>
              <cite className="block text-amber-300 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide drop-shadow-md">
                --பாரதியார்
              </cite>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1 backdrop-blur-sm">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}



