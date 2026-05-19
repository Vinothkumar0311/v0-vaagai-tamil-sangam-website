import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "தொடர்பு - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்துடன் தொடர்பு கொள்ளவும்",
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">தொடர்பு</h1>
          <div className="prose max-w-none text-center">
            <p className="text-text-secondary mb-8">
              வாகை தமிழ்ச்சங்கத்துடன் தொடர்பு கொள்ள இந்த பிரிவைப் பயன்படுத்தவும்.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
