import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Users, ScrollText, Archive, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "வெளியீடுகள்",
  description: "வாகை தமிழ்ச்சங்கத்தின் ஆய்வு வெளியீடுகள் மற்றும் ஆவணங்கள்",
}

const publicationCategories = [
  {
    id: "aim",
    title: "AIM",
    titleEn: "Aim",
    description: "வாகை தமிழ்ச்சங்கத்தின் நோக்கங்கள் மற்றும் குறிக்கோள்கள்",
    icon: Target,
  },
  {
    id: "about",
    title: "About - Vaagai Tamilsangam",
    titleEn: "About",
    description: "வாகை தமிழ்ச்சங்கம் பற்றிய விரிவான தகவல்கள்",
    icon: BookOpen,
  },
  {
    id: "research",
    title: "Research Themes",
    titleEn: "Research Themes",
    description: "ஆய்வு கருத்துக்கள் மற்றும் ஆராய்ச்சி விஷயங்கள்",
    icon: FileText,
  },
  {
    id: "guidelines",
    title: "Guidelines",
    titleEn: "Guidelines",
    description: "வழிகாட்டுதல்கள் மற்றும் நெறிமுறைகள்",
    icon: ScrollText,
  },
  {
    id: "editorial",
    title: "Editorial Board",
    titleEn: "Editorial Board",
    description: "ஆசிரியர் குழு உறுப்பினர்கள்",
    icon: Users,
  },
  {
    id: "archives",
    title: "Archives",
    titleEn: "Archives",
    description: "பழைய வெளியீடுகள் மற்றும் ஆவணங்கள்",
    icon: Archive,
  },
]

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              வெளியீடுகள்
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              வாகை தமிழ்ச்சங்கத்தின் ஆய்வு வெளியீடுகள், ஆவணங்கள் மற்றும் வழிகாட்டுதல்கள்
            </p>
          </div>
        </section>

        {/* Publication Categories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicationCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.id}
                    id={category.id}
                    className="border shadow-md hover:shadow-lg transition-all hover:border-primary/30 group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-primary mb-1">
                            {category.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ஆய்வுக் கட்டுரைகளை சமர்ப்பிக்க
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              தமிழ் மொழி, இலக்கியம், பண்பாடு சார்ந்த உங்கள் ஆய்வுக் கட்டுரைகளை 
              வாகை தமிழ்ச்சங்கத்தின் வெளியீடுகளில் பிரசுரிக்க விரும்பினால் எங்களை தொடர்புகொள்ளுங்கள்.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:publications@vaagaitamilsangam.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                கட்டுரை சமர்ப்பிக்க
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                தொடர்புக்கு
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
