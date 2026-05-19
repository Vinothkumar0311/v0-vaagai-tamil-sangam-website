import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "பாடக்குறிப்பு - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் தமிழ் மொழி பாடக்குறிப்பு",
}

export default function SyllabusPage() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">பாடக்குறிப்பு</h1>
          <div className="prose max-w-none text-center">
            <p className="text-text-secondary mb-8">
              வாகை தமிழ்ச்சங்கம் வழங்கும் தமிழ் மொழி பாடக்குறிப்பு மற்றும் 
              கற்றல் பொருட்கள்.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
