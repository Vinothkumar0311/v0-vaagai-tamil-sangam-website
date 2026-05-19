import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "செயல்பாடுகள் - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் செயல்பாடுகள், போட்டிகள் மற்றும் நிகழ்ச்சிகள்",
}

export default function ActivitiesPage() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">செயல்பாடுகள்</h1>
          <div className="prose max-w-none text-center">
            <p className="text-text-secondary mb-8">
              வாகை தமிழ்ச்சங்கம் நடத்தும் சभी செயல்पाडु, போட்டிகள் మరియు నిఘ్చlogism.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
