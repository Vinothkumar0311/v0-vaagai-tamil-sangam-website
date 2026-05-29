import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/paths"
import { 
  UserPlus, 
  BookOpen, 
  GraduationCap, 
  ClipboardList, 
  Award,
  CalendarDays,
  Calendar,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "பாடத்திட்டம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் பாடத்திட்டம் மற்றும் கல்வி முறைகள்",
}

const advisoryBoard = [
  { name: "முனைவர். சி.வசந்தி", role: "கண்காணிப்பாளர் மற்றும் / ஆணையாளர் (பொ) & (பநி.)", org: "தொல்லியல்துறை, தமிழ்நாடு அரசு, சென்னை." },
  { name: "முனைவர். சி.த்தியாகராஜன்", role: "பதிவாளர் (பொ)", org: "தமிழப் பல்கலைக்கழகம், தஞ்சாவூர்." },
  { name: "திரு. மா.மனோஜ்குமார்", role: "நிறுவனர் & தலைவர்", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "தமிழ்திரு. விஜயசாமுண்டீஸ் வரி", role: "தமிழ் ஆர்வலர் & மாணவி", org: "உலகத் தமிழாராய்ச்சி நிறுவனம், சென்னை." },
  { name: "முனைவர். சு.சத்தியா", role: "தமிழ்த்துறைத் தலைவர்,", org: "பான் செக்கர்ஸ் மகளிர் கல்லூரி, தஞ்சாவூர்." },
  { name: "முனைவர். ம.கவிதா", role: "தமிழ்த்துறைத்தலைவர்,", org: "விவேகானந்தா கலை & அறிவியல் மகளிர் கல்லூரி, திருச்செங்கோடு." },
  { name: "முனைவர். பெ.முருகன்", role: "உதவிப் பேராசிரியர் / தொல்லியல் துறை", org: "மனோன்மணியம் சுந்தரனார் பல்கலைக்கழகம், திருநெல்வேலி." },
  { name: "தமிழ்திரு. மூ.இராமலெட்சுமி", role: "இடைநிலை ஆசிரியர்,", org: "ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, செல்லனக்கவுண்டன்பட்டி, மதுரை மாவட்டம்." },
  { name: "முனைவர். ஜெ.புவனேஸ்வரி", role: "உதவிப்பேராசிரியர், தமிழாய்வுத்துறை,", org: "தேசியக்கல்லூரி (தன்னாட்சி), திருச்சி." },
  { name: "திரு. நா.கனகராஜ்", role: "முதுநிலைப் பள்ளி தமிழாசிரியர்", org: "பசும்பொன் தேவர் மேல்நிலைப்பள்ளி மம்சாபுரம், விருதுநகர் மாவட்டம்." },
  { name: "தமிழ்திரு. கா.விஜயநரசிம்மன்", role: "துணைப்பேராசிரியர் / இயற்பியல், மாந்தவியல் & அறிவியல் துறை", org: "ராஜலட்சுமி பொறியியல் கல்லூரி (தன்னாட்சி), தண்டலம், சென்னை." },
  { name: "திரு. அ.கார்த்திகேயன்", role: "பொறுப்பாளர், ஆராய்ச்சி மற்றும் மேம்பாட்டுத் துறை", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "திரு. நா.புவனசங்கர்", role: "பொறுப்பாளர், பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
]

const academicCalendar = [
  { 
    event: "சேர்க்கை தொடங்கும் நாள்", 
    period: "அக்டோபர் மூன்றாம் வாரம்", 
    icon: UserPlus,
    bg: "bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-400"
  },
  { 
    event: "சேர்க்கை நிறைவடையும் நாள்", 
    period: "சனவரி இரண்டாம் வாரம்", 
    icon: CalendarDays,
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400"
  },
  { 
    event: "வகுப்புகள் தொடங்கும் நாள்", 
    period: "பிப்ரவரி மூன்றாம் வாரம்", 
    icon: BookOpen,
    bg: "bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400"
  },
  { 
    event: "வகுப்புகள் நிறைவுறும் நாள்", 
    period: "செப்டம்பர் முதல் வாரம்", 
    icon: GraduationCap,
    bg: "bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-400"
  },
  { 
    event: "களப்பணி/செய்முறை", 
    period: "அக்டோபர் முதல் வாரம்", 
    icon: ClipboardList,
    bg: "bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-400"
  },
  { 
    event: "இறுதித்தேர்வு", 
    period: "நவம்பர் முதல் வாரம்", 
    icon: Award,
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400"
  },
]

export default function SyllabusPage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-stretch overflow-hidden pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* Left Content */}
          <div className="bg-blue-700 text-white p-12 md:p-20 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வியாலோசனைக்குழு
            </h1>
            <div className="space-y-6 text-lg opacity-90 leading-loose">
              <p>
                தமிழன்னையின் மணிமகுடத்தில் மற்றுமொரு மாணிக்கமாய் மிளிர்கிறது நமது வாகை தமிழ்ச்சங்கம். 
                தமிழக அரசு அனுமதி பெற்று, தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவற்றின் மீதான அறிவை இக்கால அறிவியல் சிந்தனை மற்றும் திறன்களுடன் அனைத்துத் தரப்பினரிடமும் ஊக்குவித்தல், வளர்த்தல் மற்றும் மேம்படுத்துதலை நோக்கமாகக்கொண்டு வாகை தமிழ்ச்சங்கம் இயங்கி வருகிறது.
              </p>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative min-h-[400px]">
            <Image
              src={getAssetPath("/images/activities/awards.png")}
              alt="Inauguration Ceremony"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">கல்வியாலோசனைக்குழு</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((member, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] relative bg-muted grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                      <span className="text-6xl font-bold opacity-10">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center bg-white min-h-[220px] flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{member.name}</h3>
                    <p className="text-sm font-semibold text-gold mb-3">{member.role}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed italic">{member.org}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/20 dark:from-slate-950 dark:to-slate-900 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold fill-gold" />
              <span>கல்வித் திட்டம்</span>
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-4 leading-normal tracking-tight">உத்தேச கல்வி கால அட்டவணை</h2>
            <div className="w-24 h-1 bg-gold rounded-full" />
            <p className="text-foreground/70 mt-4 max-w-lg leading-relaxed text-sm">
              மாணவர்களின் சீரான கல்விப் பயணத்திற்காக வகுக்கப்பட்ட தற்காலிகக் கல்வி அட்டவணை.
            </p>
          </div>
          
          <div className="relative border-l-2 border-primary/10 ml-4 md:ml-32 pl-8 md:pl-16 space-y-8 py-4">
            {academicCalendar.map((row, i) => {
              const IconComponent = row.icon
              return (
                <div key={i} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[57px] md:-left-[89px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary/20 shadow-md group-hover:border-primary group-hover:shadow-lg transition-all duration-300 flex items-center justify-center z-10">
                    <div className={`w-8 h-8 rounded-xl ${row.bg} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Row Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-primary/5 shadow-md hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                    {/* Left vertical brand line */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-gold opacity-80" />

                    <div className="space-y-1 pl-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/50">நிகழ்வு {i + 1}</span>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 leading-normal">{row.event}</h3>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <span className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl ${row.bg} ${row.text} font-bold border border-primary/5 text-base shadow-sm`}>
                        <Calendar className="w-5 h-5" />
                        {row.period}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
