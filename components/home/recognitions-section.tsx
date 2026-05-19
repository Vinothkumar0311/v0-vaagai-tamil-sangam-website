import { Card, CardContent } from "@/components/ui/card"

export function RecognitionsSection() {
  const recognitions = [
    {
      name: "தமிழ்நாடு அரசு",
      role: "Government Recognition",
      year: "Registered Organization",
    },
    {
      name: "MSME",
      role: "Ministry of Small and Medium Enterprises",
      year: "Registration No: TN/2022/001",
    },
    {
      name: "AICTE",
      role: "All India Council for Technical Education",
      year: "Internship Provider",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">அங்கீகாரங்கள் மற்றும் அணைமதிக்கள்</h2>
        <p className="section-subheading">
          வாகை தமிழ்ச்சங்கம் பல அரசு மற்றும் சர்வதேச அமைப்புக்களால் 
          அங்கீகாரம் பெற்றுள்ளது.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {recognitions.map((rec, idx) => (
            <Card key={idx} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {rec.name}
                </h3>
                <p className="text-text-secondary mb-2">{rec.role}</p>
                <p className="text-sm text-primary font-medium">{rec.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-l-secondary">
          <h3 className="text-2xl font-bold text-primary mb-4">ஒற்றுமைக்கான உறுப்பினர்</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <p className="text-text-secondary">உறுப்பினர்கள்</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <p className="text-text-secondary">நிகழ்ச்சிகள்</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100+</div>
              <p className="text-text-secondary">வெளியீடுகள்</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">25+</div>
              <p className="text-text-secondary">வருடங்கள்</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
