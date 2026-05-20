import { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { MandramCard } from "@/components/mandram/MandramCard"
import { mandramsData } from "@/lib/mandramData"

export const metadata: Metadata = {
  title: "மன்றங்கள் | வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் பல்வேறு மன்றங்கள் மற்றும் அவற்றின் செயல்பாடுகள்",
}

export default function MandramsListingPage() {
  return (
    <PageShell>
      <PageHeader
        title="வாகை மன்றங்கள்"
        description="சமூகத்தின் அனைத்துத் தரப்பினரையும் ஒருங்கிணைத்துத் தமிழ் வளர்க்கும் ஐம்பெரும் மன்றங்கள்"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mandramsData.map((mandram) => (
              <MandramCard key={mandram.slug} mandram={mandram} />
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  )
}
