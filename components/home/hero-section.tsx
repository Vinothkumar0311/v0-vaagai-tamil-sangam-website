import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/temple-prayer.jpg"
        alt="Tamil cultural celebration"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            வாகை தமிழ்ச்சங்கம்
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 italic text-balance">
            "தேமொழிந்த தமிழ்மொழியே உலகமெல்லாம் பாடிப் பரவச் செய்தல் வேண்டும்"
          </p>
          <p className="text-lg text-white/90">— பாரதியார்</p>
        </div>
      </div>
    </section>
  )
}
