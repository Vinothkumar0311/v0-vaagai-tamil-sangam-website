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

      {/* Additional Info Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">போட்டிகளும் விருதுகளும்</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            ஒவ்வொருவருக்குள்ளும் பல திறமைகள் ஒளிந்திருக்கும், அவற்றை வெளிக்கொணருவதில் போட்டிகளுக்கு இன்றியமையாத பங்குள்ளது. 
            தமிழார்வலர்களின் தமிழ்க் கல்வியின் ஆழ அகலத்தையும், மொழித்திறன்களையும், கவின்கலை, நுண்கலைத் திறன்களையும் 
            வெளிப்படுத்தவும் அவற்றிற்குரிய அங்கீகாரம் பெறுவதற்கும் களமாக வாகை தமிழ்ச்சங்கம் ஆண்டுமுழுவதும் 
            பல்வேறு வகைமைகளில் போட்டிகளை நடத்திப் பரிசுகளையும் விருதுகளையும் வழங்கி வருகிறது.
          </p>
          <div className="inline-flex items-center gap-2 text-gold font-bold text-xl text-center flex-col sm:flex-row">
             <span className="w-12 h-1 bg-gold rounded-full hidden sm:block" />
             வெற்றி பெறுவோம் வாகை சூடுவோம்
             <span className="w-12 h-1 bg-gold rounded-full hidden sm:block" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
