import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "பற்றி - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கம் பற்றிய விவரம் மற்றும் சரித்திரம்",
}

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading">பற்றி</h1>
          <div className="prose max-w-none text-center">
            <p className="text-text-secondary mb-8">
              வாகை தமிழ்ச்சங்கம் பற்றிய விस्తாரமான தகவல் மற்றும் குழுவினர் விவரங்கள்.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
