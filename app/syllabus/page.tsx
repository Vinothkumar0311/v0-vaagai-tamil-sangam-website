import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Award, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "பாடத்திட்டம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் தமிழ் கற்றல் பாடத்திட்டங்கள்",
}

const syllabusLevels = [
  {
    level: "தொடக்க நிலை",
    levelEn: "Beginner Level",
    icon: BookOpen,
    courses: [
      "தமிழ் எழுத்துக்கள் அறிமுகம்",
      "எளிய சொற்கள் மற்றும் வாக்கியங்கள்",
      "அன்றாட உரையாடல்",
      "எளிய பாடல்கள் மற்றும் கதைகள்",
    ],
  },
  {
    level: "இடைநிலை",
    levelEn: "Intermediate Level",
    icon: GraduationCap,
    courses: [
      "இலக்கணம் - பெயர்ச்சொல், வினைச்சொல்",
      "கட்டுரை எழுதுதல்",
      "இலக்கிய அறிமுகம்",
      "உரைநடை மற்றும் கவிதை",
    ],
  },
  {
    level: "உயர்நிலை",
    levelEn: "Advanced Level",
    icon: Award,
    courses: [
      "செய்யுள் இலக்கணம்",
      "சங்க இலக்கியம்",
      "காப்பியங்கள்",
      "ஆய்வுக் கட்டுரை எழுதுதல்",
    ],
  },
  {
    level: "சிறப்பு படிப்புகள்",
    levelEn: "Special Courses",
    icon: FileText,
    courses: [
      "தமிழ் மொழிபெயர்ப்பு",
      "தமிழ் கணினி மொழி",
      "தமிழ் பத்திரிகை",
      "தமிழ் நாடகம் மற்றும் கலை",
    ],
  },
]

export default function SyllabusPage() {
  return (
    <PageShell>
      <PageHeader
        title="பாடத்திட்டம்"
        description="வாகை தமிழ்ச்சங்கத்தின் தமிழ் கற்றல் பாடத்திட்டங்கள் அனைத்து வயதினருக்கும் பொருத்தமானவை"
      />

      {/* Syllabus Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusLevels.map((level) => {
              const Icon = level.icon
              return (
                <Card key={level.level} className="border shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{level.level}</CardTitle>
                        <p className="text-sm text-muted-foreground">{level.levelEn}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {level.courses.map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                          <span className="text-foreground/80">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

        {/* Enrollment CTA */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">இன்றே சேருங்கள்</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            தமிழ் கற்றலில் ஆர்வமுள்ளவர்கள் எங்கள் பாடத்திட்டங்களில் சேர விண்ணப்பிக்கலாம். அனைத்து வயதினருக்கும் ஏற்ற
            பாடத்திட்டங்கள் உள்ளன.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              விண்ணப்பிக்க
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              தொடர்புகொள்ள
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
