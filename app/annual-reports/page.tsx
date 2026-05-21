import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/layout/page-shell"
import { ReportCard } from "@/components/annual-reports/report-card"
import { PageHeader } from "@/components/shared/page-header"
import { BookOpen, Users, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Annual Reports",
  description: "வாகை தமிழ்ச்சங்கத்தின் வருடாந்திர அறிக்கைகள்",
}

const reports = [
  { year: "2023", file: "/AR report/AR_2023.pdf" },
  { year: "2024", file: "/AR report/AR_2024.pdf" },
  { year: "2025", file: "/AR report/AR_2025.pdf" },
  { year: "2026", file: "/AR report/AR_2026.pdf" },
]

const highlights = [
  {
    icon: Target,
    title: "குறிக்கோள்கள் (Goals)",
    desc: "சங்கத்தின் ஆண்டு இலக்குகள் மற்றும் அடைந்த வெற்றிகள்."
  },
  {
    icon: Users,
    title: "உறுப்பினர்கள் (Members)",
    desc: "புதிய உறுப்பினர்கள் மற்றும் நிர்வாகக் குழுவின் செயல்பாடுகள்."
  },
  {
    icon: BookOpen,
    title: "கல்வி (Education)",
    desc: "தமிழ் கல்வி, பயிற்சி வகுப்புகள் மற்றும் கருத்தரங்குகள்."
  },
  {
    icon: Award,
    title: "விருதுகள் (Awards)",
    desc: "சங்கத்தால் வழங்கப்பட்ட விருதுகள் மற்றும் அங்கீகாரங்கள்."
  }
]

export default function AnnualReportsPage() {
  return (
    <PageShell>
      <PageHeader
        title="வருடாந்திர அறிக்கை"
        description="வாகை தமிழ்ச்சங்கத்தின் கடந்த கால வருடாந்திர அறிக்கைகளை இங்கே காணலாம்."
      />

      {/* About Reports Section */}
      <section className="pt-16 pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
            <div className="p-6 md:p-8 bg-primary/5 border-b lg:border-b-0 lg:border-r border-primary/10">
              <div className="flex items-center gap-2 mb-4">
                {/* <div className="w-1.5 h-6 bg-primary rounded-full"></div> */}
                {/* <h3 className="font-bold text-primary uppercase tracking-wider text-xs">Tamil Version</h3> */}
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
                வாகை தமிழ்ச்சங்கத்தின் கடந்த கால மற்றும் தற்போதைய செயல்பாடுகள், சாதனைகள், மற்றும் எதிர்கால திட்டங்களை உள்ளடக்கிய வருடாந்திர அறிக்கைகளை இங்கு காணலாம். இந்த அறிக்கைகள் நமது சங்கத்தின் தொடர்ச்சியான முன்னேற்றத்தையும், தமிழ் மொழி மற்றும் பண்பாட்டின் வளர்ச்சிக்காக நாம் மேற்கொண்ட முயற்சிகளையும் ஆவணப்படுத்துகின்றன.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white">
              <div className="flex items-center gap-2 mb-4">
                {/* <div className="w-1.5 h-6 bg-gold rounded-full"></div>
                <h3 className="font-bold text-gold uppercase tracking-wider text-xs">English Version</h3> */}
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic text-pretty">
                Here you can find the annual reports covering the past and present activities, achievements, and future plans of Vaagai Tamilsangam. These reports document the continuous progress of our organization and our efforts towards the development of the Tamil language and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">அறிக்கையின் சிறப்பம்சங்கள்</h2>
            <p className="text-muted-foreground">Key Highlights of our Annual Reports</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-center group">
                  <div className="w-14 h-14 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">ஆண்டுகள் வாரியாக அறிக்கைகள்</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reports.map((report) => (
              <ReportCard key={report.year} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            மேலும் தகவல்களுக்கு
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            எங்கள் செயல்பாடுகள் குறித்து மேலும் அறிய அல்லது சங்கத்தின் பல்வேறு திட்டங்களில் இணைய எங்களை தொடர்பு கொள்ளவும்.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-colors"
            >
              தொடர்புக்கு (Contact Us)
            </Link>
          </div>
        </div>
      </section> */}
    </PageShell>
  )
}
