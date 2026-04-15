import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { activities, competitionPoem } from "@/data/activities"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "செயல்பாடுகள்",
  description: "வாகை தமிழ்ச்சங்கத்தின் செயல்பாடுகள் மற்றும் நிகழ்வுகள்",
}

const activityCategories = [
  {
    id: "monthly",
    title: "தமிழ்த்திறன் வளர் மாதாந்திர செயல்பாடுகள்",
    description: "ஒவ்வொரு மாதமும் தமிழ் திறன்களை வளர்க்கும் பல்வேறு நிகழ்வுகள்",
  },
  {
    id: "development",
    title: "வளர்ச்சி மற்றும் மேம்பாடு",
    description: "தமிழ் மொழி மற்றும் கலாச்சார வளர்ச்சிக்கான திட்டங்கள்",
  },
  {
    id: "children",
    title: "வாகை மழலையர் மன்றம்",
    description: "குழந்தைகளுக்கான தமிழ் கற்றல் மற்றும் விளையாட்டு நிகழ்வுகள்",
  },
  {
    id: "women",
    title: "வாகை மகளிர் மன்றம்",
    description: "பெண்களுக்கான சிறப்பு தமிழ் நிகழ்வுகள் மற்றும் போட்டிகள்",
  },
  {
    id: "literary",
    title: "வாகை பனுவல் மன்றம்",
    description: "இலக்கிய நிகழ்வுகள், கவிதை அரங்கம், கதை கூறுதல்",
  },
]

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              போட்டிகளும் விருதுகளும்
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              ஒவ்வொருவருக்குள்ளும் பல திறமைகள் ஒளிந்திருக்கும், அவற்றை வெளிக்கொணருவதில் போட்டிகளுக்கு 
              இன்றியமையாத பங்குள்ளது.
            </p>
          </div>
        </section>

        {/* About Competitions */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-foreground/80 leading-relaxed">
                தமிழார்வலர்களின் தமிழ்க் கல்வியின் ஆழ அகலத்தையும், மொழித்திறன்களையும், 
                கவின்கலை, நுண்கலைத் திறன்களையும் வெளிப்படுத்தும் அவற்றிற்குரிய அங்கீகாரம் 
                பெறுவதற்கும் களமாக வாகை தமிழ்ச்சங்கம் ஆண்டுமுழுவதும் அல்வத்திங்களுக்கந்த 
                தலைப்புகளில் பல்வேறு வகைமைகளில் போட்டிகளை நடத்திப் பரிசுகளையும் விருதுகளையும் வழங்கி வருகிறது.
              </p>
            </div>

            {/* Competition Poem */}
            <Card className="max-w-3xl mx-auto mb-16 bg-muted/50 border-primary/10">
              <CardContent className="p-6 md:p-8">
                <div className="text-center">
                  {competitionPoem.lines.map((line, index) => (
                    <p key={index} className="text-foreground/80 italic mb-1 last:mb-0">
                      {`"${line}`}{index === competitionPoem.lines.length - 1 && '"'}
                    </p>
                  ))}
                  <p className="text-muted-foreground text-sm mt-4">
                    --{competitionPoem.author}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Activities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  className={cn(
                    "overflow-hidden border-0 shadow-lg",
                    activity.theme === "teal" && "bg-teal text-white",
                    activity.theme === "gold" && "bg-gold text-white",
                    activity.theme === "cream" && "bg-cream text-foreground"
                  )}
                >
                  <CardHeader className="pb-2">
                    <CardTitle
                      className={cn(
                        "text-xl font-bold",
                        activity.theme === "cream" ? "text-primary" : "text-current"
                      )}
                    >
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {activity.quote && (
                      <p className={cn(
                        "text-sm italic mb-3",
                        activity.theme === "cream" ? "text-gold" : "text-current/90"
                      )}>
                        {`"${activity.quote}"${activity.quoteAuthor ? ` (${activity.quoteAuthor})` : ""}`}
                      </p>
                    )}
                    <p className={cn(
                      "text-sm leading-relaxed",
                      activity.theme === "cream" ? "text-foreground/80" : "text-current/90"
                    )}>
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activity Categories */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              எங்கள் செயல்பாடுகள்
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityCategories.map((category) => (
                <Card key={category.id} id={category.id} className="border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
