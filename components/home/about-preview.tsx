import { Card, CardContent } from "@/components/ui/card"

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-heading text-left">
              வாகை தமிழ்ச்சங்கம் - அறிமுகம்
            </h2>
            <p className="text-text-secondary mb-6">
              தமிழன்னை பெருமையை உலகறிய வளர்க்கும் நோக்குடன் உருவாக்கப்பட்ட
              வாகை தமிழ்ச்சங்கம், தமிழ் மொழி, இலக்கியம், கலை, அறிவியல்,
              பண்பாட்டை விருத்தி செய்து உயர்ந்த நிலையை தேடி செல்கிறது.
            </p>
            <p className="text-text-secondary mb-6">
              நம் ஐயர்வளையான தமிழை உலக மொழிகளுக்கு சம உயர்ந்த நிலையில்
              வைக்கவும், தமிழ் ஞான பாரம்பரியத்தை அடுத்த தலைமுறைக்கு
              கொடுத்தளிக்கவும் இவ்வinstitution செயல்பட்டு வருகிறது.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors font-medium"
            >
              மேலும் தெரிந்து கொள்ளவும்
            </a>
          </div>

          {/* Chairman Card */}
          <div>
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-6xl font-bold text-primary/20">வ</div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Dr. Chairman Name
                </h3>
                <p className="text-secondary font-semibold mb-2">
                  Chairman & Founder
                </p>
                <p className="text-text-secondary">
                  Organization: Vaagai Tamilsangam
                </p>
                <p className="text-text-secondary text-sm">Chennai, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
