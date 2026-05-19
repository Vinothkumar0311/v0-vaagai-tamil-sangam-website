import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "வெளியீடுகள் - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் வெளியீடுகள் மற்றும் ஆய்வுக் கட்டுரைகள்",
}

export default function PublicationsPage() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">வெளியீடுகள்</h1>
          <div className="prose max-w-none text-center">
            <p className="text-text-secondary mb-8">
              வாகை தமிழ்ச்சங்கம் வெளியிடும் தமிழ் அறிவியல் பத்திரிகைகள் மற்றும் 
              ஆய்வுக் கட்டுரைகள்.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
