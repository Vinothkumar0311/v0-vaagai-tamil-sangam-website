import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAssetPath } from "@/lib/paths"
import { 
  UserPlus, 
  BookOpen, 
  GraduationCap, 
  ClipboardList, 
  Award,
  CalendarDays,
  Calendar,
  Sparkles,
  Target,
  ScrollText,
  Users,
  FileText,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Clock,
  Layers,
  FileSpreadsheet,
  Info,
  Globe
} from "lucide-react"

export const metadata: Metadata = {
  title: "பாடத்திட்டம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் பாடத்திட்டம் மற்றும் கல்வி முறைகள்",
}

const advisoryBoard = [
  { name: "முனைவர். சீ. வசந்தி", role: "கண்காணிப்பாளர் / ஆணையாளர் (பொ) & (ப.நி.)", org: "தொல்லியல்துறை, தமிழ்நாடு அரசு, சென்னை." },
  { name: "முனைவர். சி. தியாகராஜன்", role: "பதிவாளர் (பொ) (மு)", org: "தமிழ்ப் பல்கலைக்கழகம், தஞ்சாவூர்." },
  { name: "திரு. மா. மனோஜ்குமார்", role: "நிறுவனர் & தலைவர்", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "முனைவர். வெ. பாலசரசுவதி", role: "கௌரவ விரிவுரையாளர் / தமிழ்த்துறை", org: "அரசு கலைக்கல்லூரி, கோவை." },
  { name: "தமிழ்மிகு. விஜயசாமுண்டீஸ்வரி", role: "தமிழ் ஆர்வலர் & மாணவி", org: "உலகத் தமிழாராய்ச்சி நிறுவனம், சென்னை." },
  { name: "முனைவர். சு. சத்தியா", role: "தமிழ்துறைத் தலைவர்", org: "பான் செக்கர்ஸ் மகளிர் கல்லூரி, தஞ்சாவூர்." },
  { name: "முனைவர். ம.கவிதா", role: "தமிழ்த்துறைத்தலைவர்", org: "விவேகானந்தா கலை & அறிவியல் மகளிர் கல்லூரி, திருச்செங்கோடு." },
  { name: "முனைவர். பெ. முருகன்", role: "உதவிப் பேராசிரியர் / தொல்லியல் துறை", org: "மனோன்மணியம் சுந்தரனார் பல்கலைக்கழகம், திருநெல்வேலி." },
  { name: "தமிழ்மிகு. மூ. இராமலெட்சுமி", role: "இடைநிலை ஆசிரியர்", org: "ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, மதுரை." },
  { name: "முனைவர். ஜெ. புவனேஸ்வரி", role: "உதவிப்பேராசிரியர், தமிழாய்வுத்துறை", org: "தேசியக்கல்லூரி (தன்னாட்சி), திருச்சி." },
  { name: "முனைவர். சு. கனிமொழி சுகுணா", role: "உதவி பேராசிரியர், கணினி அறிவியல் துறை", org: "எஸ்.ஆர்.எம். அறிவியல் மற்றும் தொழில்நுட்ப நிறுவனம், ராமாபுரம்." },
  { name: "திரு. நா. கனகராஜ்", role: "முதுநிலைப் பள்ளித் தமிழாசிரியர்", org: "பசும்பொன் தேவர் மேல்நிலைப் பள்ளி மம்சாபுரம், விருதுநகர் மாவட்டம்." },
  { name: "தமிழ்மிகு. கா. விசயநரசிம்மன்", role: "துணைப்பேராசிரியர் / இயற்பியல், மாந்தவியல் & அறிவியல் துறை", org: "ராஜலட்சுமி பொறியியல் கல்லூரி (தன்னாட்சி), தண்டலம், சென்னை." },
  { name: "திரு. அ. கார்த்திகேயன்", role: "பொறுப்பாளர், ஆராய்ச்சி மற்றும் மேம்பாட்டுத் துறை", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "செல்வி. செ.ச.நிவேதா", role: "பொறுப்பாளர், பாடத்திட்டம் மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "செல்வி. கா. நாவரசி", role: "பொறுப்பாளர், பாடத்திட்டம் மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "செல்வி. சே. ஸ்ரீ லோஷினி", role: "பொறுப்பாளர், பாடத்திட்டம் மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
  { name: "செல்வி. பா. தி. சிந்துஜா", role: "பொறுப்பாளர், தரவு மற்றும் நிகழ்வு மேலாண்மை", org: "வாகை தமிழ்ச்சங்கம், நாமக்கல்" },
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

const syllabusLinks = [
  { id: "credit", title: "தரநிலை விளக்கம்", icon: Layers },
  { id: "framework", title: "4-Quadrant முறை", icon: Target },
  { id: "sdg", title: "UN SDG 4 குறிக்கோள்", icon: Globe },
  { id: "rules", title: "விதிமுறைகள் & சேர்க்கை", icon: ScrollText },
  { id: "assessment", title: "மதிப்பீடு & தேர்வுகள்", icon: Award },
  { id: "blooms", title: "புளூமின் வகைப்பாடு", icon: BookOpen },
]

export default function SyllabusPage() {
  return (
    <PageShell>
      {/* Premium Header Banner Section */}
      <section className="pt-28 md:pt-36 pb-6 md:pb-10 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* SEO and Accessibility Page Title */}
          <h1 className="sr-only">பாடத்திட்டம் | Syllabus & Course</h1>
          
          {/* Banner Container - Ultra Clean & Borderless to blend with the page background */}
          <div className="flex justify-center w-full">
            <Image
              src={getAssetPath("/images/course.png")}
              alt="Vaagai Tamilsangam Course Syllabus Banner"
              width={1024}
              height={621}
              priority
              unoptimized
              className="w-full max-w-4xl h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-16 bg-[#E8EFE9] border-b border-[#346023]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.02] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#346023]/10 text-[#346023] text-sm font-semibold mb-6 border border-[#346023]/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600 fill-amber-600 animate-pulse" />
            <span>வாகை தமிழ்ச்சங்கம் கல்வித் திட்டம்</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#346023] mb-6 leading-normal md:leading-tight">
            பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 text-pretty">
            தமிழக அரசு அனுமதி பெற்று, பாரம்பரிய தமிழ் இலக்கிய அறிவையும் நவீன தொழில்நுட்ப வழிக் கல்வி நெறிமுறைகளையும் 
            ஒருங்கிணைத்து உலகெங்கிலும் உள்ள தமிழ் ஆர்வலர்களுக்காக வடிவமைக்கப்பட்ட மாபெரும் கல்வி முன்னெடுப்பு.
          </p>

          {/* Navigation Hub */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {syllabusLinks.map((link) => {
              const LinkIcon = link.icon
              return (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="flex items-center gap-2 justify-center p-3 rounded-xl bg-white/80 hover:bg-white border border-[#346023]/10 hover:border-[#346023]/30 shadow-sm hover:shadow-md transition-all text-[#346023] text-sm font-bold text-center"
                >
                  <LinkIcon className="w-4 h-4 shrink-0" />
                  <span>{link.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-16 space-y-24 max-w-5xl">

        {/* 1. Credit Calculation System */}
        <section id="credit" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">பாடத்தின் தரநிலை விளக்கம் (Credit Calculation System)</h2>
          </div>

          <Card className="border border-[#346023]/10 bg-[#F4F8F5] shadow-md rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-8 space-y-6">
              <p className="text-base md:text-lg text-slate-800 leading-relaxed text-justify">
                வாகை தமிழ்ச்சங்கத்தின் மூலம் நிகழ்த்தப்படும் பாடத்திட்டமானது, பல்கலைக்கழக மானியக் குழுவின் 
                (<span className="font-semibold">University Grant Commission</span>) தொழில்நுட்பம் சாரா முதுகலை பட்டப்படிப்புகளுக்கான 
                (<span className="font-semibold">Non - Technology PG Courses</span>), மிகப்பெரிய திறந்தநிலை இணையப் படிப்புகளின் 
                (<span className="font-semibold">MOOC</span>) பாட மேம்பாடு மற்றும் வழங்கல் குறித்த வழிகாட்டுதல் கையேட்டின் 
                (<span className="font-semibold">Instruction Manual</span>) அடிப்படைக் கோட்பாடுகளின்படி உருவாக்கப்பட்டுள்ளது. 
                இதன்படி, உயர்தரமான கல்வி உள்ளடக்கங்கள், முறையான மதிப்பீட்டு முறைகள் மற்றும் கற்பித்தல் நெறிமுறைகளை 
                முழுமையாகப் பின்பற்றி, மாணவர்களுக்கு ஒரு தரமான மின்கற்றல் அனுபவத்தை வழங்குவதை இந்தத் திட்டம் நோக்கமாகக் கொண்டுள்ளது.
              </p>

              <div className="pt-6 border-t border-[#346023]/10 space-y-4">
                <p className="text-sm font-bold text-[#346023] uppercase tracking-wider">கூடுதல் விவரங்கள் மற்றும் அரசாங்க வழிகாட்டுதல்கள்:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://www.education.gov.in/en/ugc-credit-framework-online-learning-courses-through-study-webs-active-learning-young-aspiring-minds" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#346023]/10 hover:border-[#346023]/30 hover:shadow-md transition-all text-[#346023] group"
                  >
                    <span className="text-sm font-semibold truncate pr-4">UGC Online Learning Credit Framework</span>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href="https://www.ugc.gov.in/pdfnews/8449573_Intruction-Manual.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#346023]/10 hover:border-[#346023]/30 hover:shadow-md transition-all text-[#346023] group"
                  >
                    <span className="text-sm font-semibold truncate pr-4">UGC MOOC Instruction Manual</span>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 4-Quadrant Framework */}
        <section id="framework" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">நான்கு முனை அணுகுமுறை (4-Quadrant Framework) - அறிமுகம்</h2>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg text-slate-800 leading-relaxed">
              13-ஆம் நூற்றாண்டில் பவணந்தி முனிவரால் இயற்றப்பட்ட நன்னூல், தொல்காப்பியத்திற்கு அடுத்தபடியாகத் தமிழின் சிறந்த இலக்கண நூலாகத் திகழ்கிறது. 
              மாணவர்கள் பாடங்களை எவ்வாறு ஆழமாகக் கற்க வேண்டும் மற்றும் சக மாணவர்களுடன் கலந்துரையாடி முழுமையான அறிவைப் பெறுவது எப்படி என்பதை இந்தப் பாடல் விளக்குகிறது.
            </p>

            {/* Traditional Nannool Poem Frame */}
            <div className="max-w-xl mx-auto bg-[#E8EFE9] border-2 border-double border-[#346023]/40 p-6 rounded-3xl relative shadow-md">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#346023]/40"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#346023]/40"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#346023]/40"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#346023]/40"></div>
              
              <p className="text-base md:text-lg font-bold text-[#346023] text-center leading-loose whitespace-pre-line font-serif">
                {`"ஒருகுறி கேட்போன் இருகாற் கேட்பின்
                பெருக நூலில் பிழைபா டிலனே.
                முக்காற் கேட்பின் முறையறிந் துரைக்கும்.
                ஆசான் உரைத்தது அமைவரக் கொளினும்
                கால் கூறல்லது பற்றல னாகும்.
                அவ்வினை யாளரொடு பயில்வகை யொருகால்,
                செவ்விதின் உரைப்ப அவ்விரு காலும்
                மையறு புலமை மாண்புடைத் தாகும்."`}
              </p>
              <div className="mt-4 text-center text-xs font-bold text-[#346023]/70 uppercase tracking-widest">
                — நன்னூல், பாயிரம், பாடங்கேட்டலின் வரலாறு
              </div>
            </div>

            <Card className="border border-[#346023]/10 bg-[#F4F8F5] shadow-md rounded-3xl">
              <CardContent className="p-6 md:p-8 space-y-6">
                <p className="text-base md:text-lg text-slate-800 leading-relaxed text-justify">
                  மேலே உள்ள நன்னூல் பாடல் தரமான கற்றல் மற்றும் கற்பித்தல் முறையை மிக அழகாக விளக்குகின்றன.
                  ஒரு பாடத்தை ஒருமுறை கேட்ட மாணவன், அதனை மீண்டும் ஒருமுறை (இரண்டாம் முறை) கேட்டால் பாடத்தில் பிழை இல்லாமல் தெளிவு பெறுவான். 
                  மூன்றாம் முறை கேட்டால் அந்தப் பாடத்தை மற்றவர்களுக்கு முறையாக விளக்கும் திறனைப் பெறுவான். ஆசிரியர் சொல்லிக்கொடுக்கும் போது 
                  ஒரு மாணவன் முழுமையாகக் கவனித்தாலும், அவனால் கால் பங்கு (25%) அறிவை மட்டுமே முதன்முறையில் பெற முடியும். மீதமுள்ள அறிவை 
                  சக மாணவர்களுடன் கலந்துரையாடுவதன் மூலமும், மீண்டும் மீண்டும் கற்பதன் மூலமும் மட்டுமே பெற முடியும் என்கிறது நன்னூல்.
                </p>
                <p className="text-base md:text-lg text-slate-800 leading-relaxed text-justify border-l-4 border-[#346023] pl-4 bg-[#346023]/5 py-3 rounded-r-xl">
                  இந்திய அரசின் கல்வி அமைச்சகம், பல்கலைக்கழக மானியக் குழு (University Grant Commission) ஆகியவற்றால் உருவாக்கப்பட்ட இந்த 
                  <span className="font-bold text-[#346023]"> 'நான்கு முனை அணுகுமுறை'</span> என்பது இணையவழிக் கல்வியை வெறும் காணொளிகளாக மட்டும் 
                  சுருக்கிவிடாமல், ஒரு முழுமையான வகுப்பறை அனுபவத்தை இணையவழியில் வழங்குவதற்காக வடிவமைக்கப்பட்ட ஒரு தரப்படுத்தப்பட்ட கட்டமைப்பாகும். 
                  இதன் முக்கிய நோக்கம், கற்றலை ஆசிரியர் கற்பித்தல் (Quadrant I), சுய வாசிப்பு (Quadrant II), கலந்துரையாடல் (Quadrant III) மற்றும் 
                  மதிப்பீடு (Quadrant IV) என நான்கு நிலைகளில் சமமாகப் பிரிப்பதன் மூலம் மாணவர்களுக்கு ஒரு விரிவான கல்விச் சூழலை உருவாக்குவதாகும்.
                </p>
                <p className="text-base md:text-lg text-slate-800 leading-relaxed text-justify">
                  இது கல்வியின் தரத்தை உறுதிப்படுத்துவதோடு மட்டுமல்லாமல், ஒரு மாணவர் ஆன்லைனில் செலவிடும் நேரத்தை அதிகாரப்பூர்வமான 
                  ‘கல்வி வரவுகளாக' (Academic Credits) மாற்ற வழிவகை செய்கிறது. இம்முறை மாணவர்களின் கவனிக்கும் திறன், வாசிக்கும் பழக்கம், 
                  சமூகக் கலந்துரையாடல் மற்றும் சுய-மதிப்பீடு ஆகிய நான்கு முக்கியக் கற்றல் திறன்களையும் ஒருங்கிணைத்து, இணையவழிக் கல்வியை ஒரு 
                  முறையான பட்டயப் படிப்பிற்கு இணையான அங்கீகாரத்தைப் பெறச் செய்கிறது.
                </p>
              </CardContent>
            </Card>

            {/* படம் 02. Interactive Diagram Comparison */}
            <div className="space-y-6 pt-6">
              <div className="text-center">
                <span className="inline-block bg-[#346023] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-2">
                  படம் 02. நன்னூல் மற்றும் UGC நான்கு முனை கற்றல் ஒப்பீடு
                </span>
                <p className="text-sm text-slate-600">பாரம்பரியக் கற்றல் நுட்பங்களும் நவீன மின்-கற்றல் தொழில்நுட்பத்தின் இணைப்பும்</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Quadrant 1 */}
                <div className="bg-[#D6E4D9] border border-[#346023]/25 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <span className="bg-[#346023] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Quadrant I
                    </span>
                    <h4 className="text-lg font-bold text-[#346023]">ஆசான் உரைத்தல்</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">ஆசிரியர் வகுப்பில் நேடியாகக் கற்பிக்கும் பாரம்பரிய முறை.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#346023]/15 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#346023] uppercase">மின்னணு வடிவம்</span>
                    <span className="bg-white/80 text-[#346023] text-xs font-bold px-2 py-1 rounded border border-[#346023]/10">காணொளி உரை (e-Tutorial)</span>
                  </div>
                </div>

                {/* Quadrant 2 */}
                <div className="bg-[#F4F8F5] border border-[#346023]/20 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <span className="bg-[#346023]/80 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Quadrant II
                    </span>
                    <h4 className="text-lg font-bold text-[#346023]">பிழைபாடிலா கற்றல்</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">சுய வாசிப்பு மற்றும் மீண்டும் மீண்டும் படித்து பிழை இல்லாமல் தெளிவு பெறுதல்.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#346023]/15 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#346023] uppercase">மின்னணு வடிவம்</span>
                    <span className="bg-white/80 text-[#346023] text-xs font-bold px-2 py-1 rounded border border-[#346023]/10">மின்னணு பாடக்குறிப்பு (e-Content)</span>
                  </div>
                </div>

                {/* Quadrant 3 */}
                <div className="bg-[#D6E4D9] border border-[#346023]/25 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <span className="bg-[#346023] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Quadrant III
                    </span>
                    <h4 className="text-lg font-bold text-[#346023]">சக மாணவர்கள் விவாதம்</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">கற்றதை ஒத்த பண்புடைய மாணவர்களுடன் கலந்துரையாடி அறிவை முழுமையாக்குதல்.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#346023]/15 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#346023] uppercase">மின்னணு வடிவம்</span>
                    <span className="bg-white/80 text-[#346023] text-xs font-bold px-2 py-1 rounded border border-[#346023]/10">கலந்துரையாடல் களம் (Forum)</span>
                  </div>
                </div>

                {/* Quadrant 4 */}
                <div className="bg-[#F4F8F5] border border-[#346023]/20 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <span className="bg-[#346023]/80 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Quadrant IV
                    </span>
                    <h4 className="text-lg font-bold text-[#346023]">தேர்வு மற்றும் மதிப்பீடு</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">மாணவன் பெற்ற அறிவை சோதித்து, பிறருக்கு விளக்கும் திறனை மதிப்பீடு செய்தல்.</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#346023]/15 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#346023] uppercase">மின்னணு வடிவம்</span>
                    <span className="bg-white/80 text-[#346023] text-xs font-bold px-2 py-1 rounded border border-[#346023]/10">அக/புற மதிப்பீடு (Self-Assessment)</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F8F5] p-5 rounded-2xl border border-[#346023]/10 text-sm text-slate-700 leading-relaxed">
                ஆசான் உரைத்தல் (காணொளி), பிழைபாடிலா கற்றல் (மின்-பாடக்குறிப்புகள்), சக மாணவர்கள் விவாதம், மற்றும் தேர்வு (மதிப்பீடு) ஆகிய நான்கு நிலைகளும் நன்னூலின் கோட்பாடுகளை மின்னனு வடிவில் பின்பற்றுவதை எடுத்துக்காட்டுகிறது. இவ்வாறு வாகை தமிழ்ச்சங்கம், பாரம்பரியக் கற்றல் நுட்பங்களையும் நவீன தொழில்நுட்பத்தையும் இணைத்து, தரமான திறன் வாய்ந்த கல்வியை உலகெங்கும் உள்ள தமிழர்களுக்குக் கொண்டு சேர்க்கிறது.
              </div>
            </div>
          </div>
        </section>

        {/* 3. United Nations SDG 4 */}
        <section id="sdg" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">ஐக்கிய நாடுகள் சபையின் வளங்குன்றா வளர்ச்சிக் குறிக்கோள்கள்</h2>
          </div>

          <div className="space-y-8">
            {/* SDG 4 Crimson Red Header Banner */}
            <div className="bg-[#C5192D] rounded-3xl p-6 md:p-8 text-white relative shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-6">
              <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.03] pointer-events-none"></div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
                {/* Custom SVG SDG 4 representation */}
                <div className="text-center text-[#C5192D] flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-extrabold leading-none">4</span>
                  <span className="text-[7px] md:text-[8px] font-extrabold uppercase tracking-widest mt-1">QUALITY EDUCATION</span>
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 mt-1 stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-2 text-center md:text-left">
                <span className="text-white/85 text-xs font-bold uppercase tracking-widest">UNITED NATIONS - SDG 4</span>
                <h3 className="text-2xl md:text-3xl font-extrabold">இலக்கு 4: தரமான கல்வி (Quality Education)</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  அனைவருக்கும் உள்ளடக்கிய, சமமான மற்றும் தரமான கல்வியை உறுதி செய்வதோடு, வாழ்நாள் முழுவதற்குமான கற்றல் வாய்ப்புகளை உருவாக்குவது.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="space-y-6 flex flex-col justify-center">
                <p className="text-base text-slate-800 leading-relaxed text-justify">
                  இந்திய அரசின் பல்கலைக்கழக மானியக்குழு (<span className="font-semibold">University Grants Commission</span>) பரிந்துரைக்கும் நான்கு நிலைகள் (<span className="font-semibold">4 – Quadrant</span>) கொண்ட நவீன கற்றல் முறையைத் தமிழ் மொழி வழிக் கல்வியில் மிகச் சிறப்பாகச் செயல்படுத்தி வருகிறது வாகை தமிழ்ச்சங்கம். தற்காலக் கல்விச்சூழலில் மற்ற தரம் வாய்ந்த இணையவழிக் கற்றல் தளங்கள் பல இருந்தாலும், அவை பெரும்பாலும் ஆங்கிலம் அல்லது பிற மொழிகளிலேயே பாடங்களை வழங்குகின்றன. பிற தளங்களில் தமிழ் மொழி மற்றும் பண்பாடு குறித்த ஆழமான பாடத்திட்டங்கள் மிகக் குறைவாகவே உள்ளன.
                </p>
                <p className="text-base text-slate-800 leading-relaxed text-justify">
                  இந்த மிகப்பெரிய இடைவெளியை நிரப்பும் நோக்குடன், வாகை தமிழ்ச்சங்கம் காணொலி விரிவுரைகள் (<span className="font-semibold">e Tutorial</span>), மின்னணு பாடக்குறிப்புகள் (<span className="font-semibold">e Content</span>), கலந்துரையாடல் களங்கள் (<span className="font-semibold">Discussion Forum</span>), அக மற்றும் புற மதிப்பீட்டுத் தேர்வுகள் (<span className="font-semibold">Self-Assessment</span>) ஆகிய நான்கு நிலைகளையும் உள்ளடக்கி, மாணவர்களுக்கு ஒரு முழுமையான கற்றல் அனுபவத்தை வழங்குகிறது. இது வெறும் தகவல் பரிமாற்றமாக மட்டும் இல்லாமல், தொழில்நுட்ப உதவியுடன் தமிழை அடுத்த தலைமுறைக்குக் கொண்டு செல்லும் முயற்சியாகத் திகழ்கிறது.
                </p>
              </div>

              {/* Thirukkural Quote Frame */}
              <div className="flex flex-col justify-center items-center bg-[#F4F8F5] border border-[#346023]/10 p-6 md:p-8 rounded-3xl shadow-sm text-center relative">
                {/* Traditional Border Design */}
                <div className="absolute inset-4 border border-[#346023]/10 pointer-events-none rounded-2xl"></div>
                <div className="absolute inset-5 border-2 border-dashed border-[#346023]/5 pointer-events-none rounded-2xl"></div>
                
                <span className="text-[#346023] font-bold text-xs uppercase tracking-widest mb-4 z-10 block">வள்ளுவன் வாக்கு</span>
                <p className="text-xl md:text-2xl font-extrabold text-[#346023] leading-loose z-10 px-4 font-serif">
                  {`"கேடில் விழுச்செல்வம் கல்வி ஒருவற்கு 
                  மாடல்ல மற்றைய வை"`}
                </p>
                <p className="text-sm text-[#346023]/70 font-semibold mt-4 z-10">— திருக்குறள் 400</p>
                
                <p className="text-xs text-slate-600 mt-6 leading-relaxed max-w-sm z-10 px-4">
                  அழியாத செல்வமான கல்வியை எளிய முறையில் அனைவருக்கும் கொண்டு சேர்ப்பதே இந்த இலக்கின் மையக்கருத்தாகும். 
                  வாகை தமிழ்ச்சங்கம் நவீனக் கற்றல் மேலாண்மை அமைப்பின் உதவியுடன், சங்க இலக்கியங்கள் முதல் இன்றைய காலத்திற்குத் தேவையான 
                  நவீனத் தொழில்நுட்ப பாடங்கள் வரை வழங்குகிறது.
                </p>
              </div>
            </div>

            <div className="bg-[#E8EFE9] p-6 rounded-2xl border border-[#346023]/10 text-base text-slate-800 leading-relaxed text-justify">
              இத்தகைய தமிழ் இலக்கியம், இலக்கணம், பண்பாட்டு விழுமியங்கள், தற்காலத் திறன்கள் மற்றும் தொழில்நுட்பம் சார்ந்த வகுப்புகளை நவீனத் தொழில் நுட்பம் இணைந்த கற்றல் மற்றும் கற்பித்தல் முறையானது, இக்காலத் தேவைக்கேற்ப கல்வியின் தரத்தை மேம்படுத்துவதோடு நிலையான வளர்ச்சிக்கான ஒரு வலுவான அடித்தளத்தையும் உருவாக்குகிறது. ஒரு மனிதன் கற்கக் கற்க அவனது அறிவு ஊற்றெடுக்கும் என்பதை உணர்ந்து, வாழ்நாள் முழுவதுமான கற்றல் வாய்ப்புகளை இச்சங்கம் உருவாக்குகிறது.
            </div>
          </div>
        </section>

        {/* 4. Rules & Guidelines, Medium of Instruction & Admission */}
        <section id="rules" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <ScrollText className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">விதிமுறைகள் மற்றும் நிபந்தனைகள்</h2>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg text-slate-800 leading-relaxed text-justify">
              உலகெங்கும் பரவி வாழும் தமிழர்களுக்கும், தமிழ் ஆர்வலர்களுக்கும் நமது பாரம்பரிய பண்பாடு மற்றும் நவீன அறிவியலை தடையின்றி கொண்டு சேர்ப்பதே வாகை தமிழசங்கம் இணையவழி வகுப்புகளை நடத்துவதன் முக்கிய நோக்கமாகும். இதன் மூலம் வயது, காலம், நேரம் மற்றும் பிற கட்டுப்பாடுகள் இன்றி, அனைவரும் தங்கள் இருப்பிடத்திலிருந்தே உலகத்தரம் வாய்ந்த கல்வி மற்றும் திறன்களைப் பெற முடிகிறது; மேலும், வயது வரம்பின்றி அனைவரும் தங்கள் திறமைகளை வளர்த்துக்கொள்ளவும், அக்கல்விக்கான சான்றிதழ்களை வேலைவாய்ப்பு அலுவலகங்களில் பதிவு செய்து தங்களின் திறன் மற்றும் வாழ்வாதாரத்தை மேம்படுத்திக் கொள்ளவும் இது ஒரு சிறந்த பாலமாக அமைகிறது.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Rules List */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#346023] mb-4 border-l-4 border-[#346023] pl-3">முக்கிய விதிமுறைகள் (Rules & Regulations)</h3>
                
                <div className="bg-[#F4F8F5] p-5 rounded-2xl border border-[#346023]/10 shadow-sm space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      அனைத்து வகுப்புகளும் இணையவழியில் நடைபெறும். பாடங்கள் பதிவு செய்யப்பட்ட காணொளிகளாக வாராந்திர அல்லது குறிப்பிட்ட கால இடைவெளியில் கற்றல் மேலாண்மை தளத்தில் வெளியிடப்படும்.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      மாணாக்கர்கள், காணொளிகளைப் பார்த்தபின்னர் செயலியில் பகிரப்படும் அகமதிப்பீட்டுத் தேர்வுகளையும் குறிப்பிட்ட கால இடைவெளிக்குள் நிறைவுசெய்திருக்க வேண்டும்.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      வகுப்புகள் யாவும் இணையவழியில் சிறந்த பயிற்றுநர்களைக் கொண்டு நடைபெறுகிறது. வகுப்புகளில் இணைவதற்கு வயதுவரம்பு இல்லை.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      தேர்ச்சி பெறுபவர்களுக்கு மட்டுமே சான்றிதழ்கள் வழங்கப்படும். அரசின் வேலைவாய்ப்பு அலுவலகத்தில் (<span className="font-semibold text-[#346023]">NCS Portal</span>) திறன் சான்றிதழாகப் பதிவுசெய்து கொள்ளலாம்.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      கருத்தியல் வகுப்புகள் மற்றும் தேர்வுகள் யாவும் இணையவழியில் நடைபெறும். தேர்ச்சிபெற்ற பின்னர் பங்கேற்பாளர்களுக்குச் சான்றிதழ்கள் நேரடி நிகழ்வின்போது வழங்கப்படும்.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#346023] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      ஒரே கல்விநிறுவனம் / அமைப்பு / பகுதியிலிருந்து அதிகப்படியான பங்கேற்பாளர்கள் இணையும் பட்சத்தில் அவர்களுக்குக் கட்டணச் சலுகையும் வழங்கப்படும்.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Medium & Admission Requirement Cards */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#346023] mb-4 border-l-4 border-[#346023] pl-3">பயிற்றுமொழி மற்றும் சேர்க்கை விவரங்கள்</h3>
                </div>

                {/* Medium Card */}
                <div className="bg-[#E8EFE9] border border-[#346023]/15 rounded-3xl p-6 shadow-sm flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.01] pointer-events-none"></div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Globe className="w-6 h-6 text-[#346023]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase tracking-widest">Instruction Medium</span>
                    <h4 className="text-lg font-extrabold text-[#346023]">பயிற்றுமொழி</h4>
                    <p className="text-sm text-slate-700 font-semibold">தமிழ், ஆங்கிலம் (வகுப்புகளுக்கேற்ப)</p>
                  </div>
                </div>

                {/* Admission requirements card */}
                <div className="bg-white border border-[#346023]/10 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#346023]/10 flex items-center justify-center shrink-0">
                      <UserPlus className="w-6 h-6 text-[#346023]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Entry Condition</span>
                      <h4 className="text-lg font-bold text-[#346023]">சேர்க்கைக்கான நிபந்தனை</h4>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-[#346023] rounded-full shrink-0"></div>
                      <p>ஆர்வமுள்ள அனைவரும் இணையலாம். வயதுவரம்பு இல்லை.</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-[#346023] rounded-full shrink-0"></div>
                      <p>அடிப்படைத் தமிழ் படிக்க மற்றும் எழுதத் தெரிந்திருத்தல் வேண்டும்.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Evaluation, Grades & Exams */}
        <section id="assessment" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">தேர்ச்சி நிலை மற்றும் மதிப்பீட்டு விவரங்கள்</h2>
          </div>

          <div className="space-y-12">
            
            {/* 5.1 Grading Scale - படம் 04 */}
            <div className="space-y-6">
              <div className="text-center">
                <span className="inline-block bg-[#346023] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-2">
                  படம் 04. மதிப்பீடு மற்றும் தேர்ச்சி விவரங்கள்
                </span>
                <h3 className="text-lg font-bold text-[#346023]">மதிப்பெண் மற்றும் தகுதிக்கான தேர்ச்சிநிலை விவரங்கள்</h3>
              </div>

              {/* Visual Rating Gauge / Scale */}
              <div className="bg-[#F4F8F5] p-6 rounded-3xl border border-[#346023]/10 shadow-sm max-w-2xl mx-auto space-y-8">
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold text-[#346023]/80 uppercase tracking-wider">
                  <div>0 - 39</div>
                  <div>40 - 74</div>
                  <div>75 - 89</div>
                  <div>90 - 100</div>
                </div>

                {/* Horizontal Progress Gauge representation */}
                <div className="relative h-4 rounded-full bg-slate-200 overflow-hidden flex">
                  <div className="w-[39%] bg-rose-500 h-full"></div>
                  <div className="w-[35%] bg-emerald-500 h-full border-l border-white"></div>
                  <div className="w-[15%] bg-sky-500 h-full border-l border-white"></div>
                  <div className="w-[11%] bg-amber-500 h-full border-l border-white"></div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-rose-600 uppercase">தேர்ச்சி இல்லை</span>
                    <p className="text-xs text-slate-500 font-semibold">-</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase">நன்று</span>
                    <p className="text-xs text-slate-600 font-bold">Good</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-sky-600 uppercase">மிகநன்று</span>
                    <p className="text-xs text-slate-600 font-bold">Very Good</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-600 uppercase">நனிநன்று</span>
                    <p className="text-xs text-slate-600 font-bold">Excellent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5.2 Internal Exam Section - 10 (i) & படம் 05 */}
            <div className="space-y-6 pt-6 border-t border-[#346023]/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#346023] text-white flex items-center justify-center font-bold text-sm">
                  10(i)
                </span>
                <h3 className="text-xl font-bold text-[#346023]">அகமதிப்பீட்டுத் தேர்வு (Internal Exam)</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
                  <p>
                    அகமதிப்பீட்டுத் தேர்வு, இணையவழியில் தெரிவு செய் முறைப்படி (<span className="font-semibold text-[#346023]">Multiple Choice based Google Form test</span>) நடைபெறும். மூன்று அகமதிப்பீட்டுத்தேர்வுகள் நடத்தப்படும். பங்கேற்பாளர்களின் சிறந்த இரண்டு தேர்வுகளின் மதிப்பெண்களானது, அகமதிப்பீட்டுப் பணிகளுக்காக கணக்கிற்கொள்ளப்படும்.
                  </p>
                  <p>
                    வினாவானது, பலவுள் சிறந்த அல்லது மிகப் பொருத்தமான விடையைத் தேர்ந்தெடுக்க வேண்டும் எனும் பொருண்மையில், சரியானதைத் தேர்ந்தெடுக்க / கூற்று, காரணம் / சரியா, தவறா / கோடிட்ட இடங்களை நிரப்புக / படத்தைப் பார்த்து தேர்ந்தெடுக்க என ஏதேனும் ஒரு வடிவில் அமைந்திருக்கலாம்.
                  </p>
                </div>

                {/* படம் 05. Visual Mockup of Questions */}
                <div className="bg-white border border-[#346023]/15 rounded-3xl p-5 shadow-sm space-y-4">
                  <div className="text-center border-b border-slate-100 pb-3">
                    <span className="bg-[#346023]/10 text-[#346023] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      படம் 05. வினா விளக்கம்
                    </span>
                    <h4 className="text-sm font-bold text-[#346023] mt-1.5">வினாத்தாள் வடிவங்கள் (Question Patterns)</h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#346023]/10 font-bold text-[#346023] shadow-sm">
                      சரியானதைத் தேர்வு செய்க
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#346023]/10 font-bold text-[#346023] shadow-sm">
                      கூற்று & காரணம்
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#346023]/10 font-bold text-[#346023] shadow-sm">
                      சரியா? தவறா?
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#346023]/10 font-bold text-[#346023] shadow-sm col-span-2 sm:col-span-1">
                      கோடிட்ட இடம்
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#346023]/10 font-bold text-[#346023] shadow-sm col-span-2">
                      படத்தைப் பார்த்துத் தேர்ந்தெடுக்கவும்
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5.3 Practical Exam Section - 10 (ii) & படம் 06 */}
            <div className="space-y-6 pt-6 border-t border-[#346023]/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#346023] text-white flex items-center justify-center font-bold text-sm">
                  10(ii)
                </span>
                <h3 className="text-xl font-bold text-[#346023]">செய்முறைத்தேர்வு (Practical Exam)</h3>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
                  மாணாக்கர்கள் பாடத்திட்டத்தில் ஏதேனும் ஒரு தலைப்பினையோ அல்லது பாடம் சார்ந்த ஆய்வு தொடர்பான ஏதேனும் ஒரு தலைப்பினையோ தேர்ந்தெடுத்து 15 நிமிடங்களுக்குள் விளக்கவுரையாற்ற வேண்டும். செய்முறைத்தேர்விற்கெனத் தனியாக அட்டவணை கிடையாது. அந்தந்த வகுப்புகளுக்குப் பயிற்றுநர் மற்றும் ஒருங்கிணைப்பாளர் வழிகாட்டுதலின் படி தேர்வு நடைபெறும் பங்கேற்பாளர் வகுப்பு நேரத்தில் இணைப்பில் இணைந்து உரையாற்றலாம். அப்பணி, பயிற்றுநரால் பின்வருமாறு மதிப்பிடப்படும்.
                </p>

                {/* படம் 06: Rubrics Grid Layout */}
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="text-center">
                    <span className="inline-block bg-[#346023]/10 text-[#346023] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      படம் 06. செய்முறைத்தேர்வு மதிப்பெண் விளக்கம்
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Rubric 1 */}
                    <div className="bg-[#F4F8F5] border border-[#346023]/15 p-5 rounded-2xl shadow-sm text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-[#346023]/10 text-[#346023] flex items-center justify-center font-bold mx-auto">
                        1
                      </div>
                      <h4 className="text-base font-bold text-[#346023]">ஆய்வுத் தலைப்பின் தெளிவு</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">தேர்ந்தெடுத்த ஆய்வுப் பொருள் மற்றும் தலைப்பு சார்ந்த அடிப்படைத் தெளிவும் அறிவும்.</p>
                    </div>

                    {/* Rubric 2 */}
                    <div className="bg-[#F4F8F5] border border-[#346023]/15 p-5 rounded-2xl shadow-sm text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-[#346023]/10 text-[#346023] flex items-center justify-center font-bold mx-auto">
                        2
                      </div>
                      <h4 className="text-base font-bold text-[#346023]">விளக்கவுரைத் திறன்</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">15 நிமிட கால வரம்பிற்குள் கருத்துக்களை மிகச் தெளிவாக எடுத்துரைக்கும் பேச்சுத் திறன்.</p>
                    </div>

                    {/* Rubric 3 */}
                    <div className="bg-[#F4F8F5] border border-[#346023]/15 p-5 rounded-2xl shadow-sm text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-[#346023]/10 text-[#346023] flex items-center justify-center font-bold mx-auto">
                        3
                      </div>
                      <h4 className="text-base font-bold text-[#346023]">உரையாடல் & விடை தருதல்</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">வகுப்பில் எழும்பும் கேள்விகளுக்கு உரிய விளக்கங்களுடன் விடையளித்து உரையாடுதல்.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5.4 Final Exam Section - 10 (iii) & படம் 07 */}
            <div className="space-y-6 pt-6 border-t border-[#346023]/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#346023] text-white flex items-center justify-center font-bold text-sm">
                  10(iii)
                </span>
                <h3 className="text-xl font-bold text-[#346023]">இறுதித்தேர்வு (Final Exam)</h3>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
                  தேர்வு அட்டவணையின்படி, அந்தந்த நாளுக்கான வினாத்தாள் பங்கேற்பாளர்களுக்கு குழுவில் பகிரப்படும். பங்கேற்பாளர் A4 வடிவிலான தாளில் எழுதி அதனை கொடுக்கப்படும் படிவங்களுடன் அஞ்சல் அனுப்பவேண்டும். படிவங்கள் மற்றும் அஞ்சல் அனுப்பவேண்டிய விவரங்கள் தேர்வின்போது பகிரப்படும். கொடுக்கப்படும் கால அளவிற்குள் அஞ்சல் கிடைக்கப்பெறவேண்டும். இல்லையென்றாலும், வகுப்புகளுக்கான கட்டணம் செலுத்தாதவர்கள் மற்றும் களப்பணி மேற்கொள்ளாதவர்களின் விடைத்தாள் மதிப்பீடு செய்யப்படாது.
                </p>

                {/* Final Exam Instructions Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">தாள் & பக்க அளவு</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      தேர்விற்கு <span className="font-bold">A4 அளவிலான தாள்களை</span> மட்டுமே பயன்படுத்த வேண்டும். தாள்களின் இருபுறமும் விடைகளை எழுதலாம். விடைத்தாள் பக்கங்களின் எண்ணிக்கை <span className="font-bold text-[#346023]">அதிகபட்சமாக 30 பக்கங்களுக்குள்</span> இருக்க வேண்டும்.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">விடைகளின் கால அளவு</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      பகுதி ஆ குறுவினாக்களுக்கான ஒவ்வொரு வினாவிற்கும் அதிகபட்சம் அரைப்பக்கத்திற்குள்ளும், பகுதி இ ஆய்வு அடிப்படையிலான விடைகள் ஒவ்வொன்றிற்கும் அதிகபட்சம் மூன்று அல்லது நான்கு பக்கத்திற்குள்ளும் அமைதல் வேண்டும்.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">பிணைப்பு & தையல் நெறிமுறை</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      விடைத்தாள்களை ஒட்டுமொத்தமாகப் பிணைப்பு வைத்து இணைக்கும் போது, <span className="font-bold text-[#346023]">மேல், நடு மற்றும் கீழ் என மூன்று இடங்களில்</span> சரியாகத் தைக்க/இணைக்க வேண்டும். படிவங்களை விடைத்தாள்களுடன் சேர்த்துத் தைக்கக் கூடாது.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">படிவங்கள் & அடையாளச் சான்று</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      அஞ்சல் உறையில், விடைத்தாளுடன் படிவம் 1, 2 மற்றும் 3 பூர்த்திசெய்து சேர்க்க வேண்டும். அத்துடன் தேர்வரின் அடையாளச் சான்று (ஆதார் / கல்லூரி ஐடி) நகலையும் சுய கையொப்பமிட்டு இணைக்க வேண்டும். படிவங்களை பிணைக்காமல் உறையினுள் அப்படியே வைக்கவும்.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">அஞ்சல் உறை (Postal Envelope)</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      விடைத்தாள்களை மடிக்காமல் அனுப்ப A4 அல்லது Legal அளவுள்ள தபால் உறையை மட்டுமே பயன்படுத்தவும். தபால் உறையின் மேல் <span className="font-bold">படிவம் 4-ஐ</span> பூர்த்திசெய்து ஒட்டி அனுப்ப வேண்டும். படிவம் 1 மற்றும் 2-இல் கட்டாயம் புகைப்படம் ஒட்டியிருக்க வேண்டும்.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F4F8F5] border border-[#346023]/10 shadow-sm space-y-2">
                    <span className="text-xs font-bold text-[#346023]/60 uppercase">பல வகுப்பில் இணைந்திருப்பின்</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      தேர்வர் ஒன்றுக்கும் மேற்பட்ட வகுப்புகளில் இணைந்திருந்தால், அவ்வனைத்து விடைத்தாள்களையும் ஒரே உறையில் வைத்து அஞ்சல் அனுப்பலாம். எனினும், படிவங்கள் தனித்தனியே பூர்த்திசெய்திருத்தல் கட்டாயமாகும்.
                    </p>
                  </div>
                </div>

                {/* படம் 07. Visual Marks scheme breakdown */}
                <div className="space-y-4 max-w-2xl mx-auto pt-6">
                  <div className="text-center">
                    <span className="inline-block bg-[#346023]/10 text-[#346023] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      படம் 07. இறுதித்தேர்வு மதிப்பெண் விளக்கம்
                    </span>
                    <h4 className="text-base font-bold text-[#346023]">ஒட்டுமொத்த மதிப்பெண்கள் (Total Marks: 120)</h4>
                  </div>

                  <div className="bg-[#E8EFE9] border border-[#346023]/15 rounded-3xl p-6 shadow-sm flex justify-around text-center gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold text-[#346023]/60 uppercase tracking-wider">Part A</span>
                      <h5 className="text-2xl font-black text-[#346023]">30</h5>
                      <p className="text-xs text-slate-600 font-semibold">மதிப்பெண்கள்</p>
                    </div>
                    <div className="w-px bg-[#346023]/10"></div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold text-[#346023]/60 uppercase tracking-wider">Part B</span>
                      <h5 className="text-2xl font-black text-[#346023]">40</h5>
                      <p className="text-xs text-slate-600 font-semibold">மதிப்பெண்கள்</p>
                    </div>
                    <div className="w-px bg-[#346023]/10"></div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold text-[#346023]/60 uppercase tracking-wider">Part C</span>
                      <h5 className="text-2xl font-black text-[#346023]">50</h5>
                      <p className="text-xs text-slate-600 font-semibold">மதிப்பெண்கள்</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bloom's Taxonomy & Nannool Comparison */}
        <section id="blooms" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">புளூமின் வகைப்பாடு மற்றும் நன்னூல் கற்றல் நிலைகள்</h2>
          </div>

          <div className="space-y-8">
            <p className="text-base text-slate-800 leading-relaxed text-justify">
              பவணந்தி முனிவரால் கி.பி. 13-ஆம் நூற்றாண்டில் இயற்றப்பட்ட நன்னூல், தமிழ் மொழியின் மிகச்சிறந்த இலக்கண நூல்களில் ஒன்றாகும். 
              மொழியின் விதிகளைத் தாண்டி, ஒரு நல்லாசிரியர் மற்றும் நல்ல மாணாக்கருக்கான இலக்கணங்களையும், கற்கும் முறைகளையும் இந்நூல் 
              ‘பாயிரம்’ என்னும் பகுதியில் மிக விரிவாக எடுத்துரைக்கிறது.
            </p>
            <p className="text-base text-slate-800 leading-relaxed text-justify border-l-4 border-[#346023] pl-4 bg-[#346023]/5 py-3 rounded-r-xl">
              பெஞ்சமின் புளூம் என்பவரால் 1956-இல் உருவாக்கப்பட்ட இந்த வகைப்பாட்டியல், கற்றல் செயல்முறையை ஆறு நிலைகளாகப் பிரிக்கிறது. 
              நினைவில் இருத்துதல், புரிதல், பயன்பாடு, பகுப்பாய்வு, மதிப்பீடு மற்றும் உருவாக்கம் ஆகிய நிலைகளின் மூலம் ஒரு மாணவனின் சிந்திக்கும் 
              திறனை மேம்படுத்துவதே இதன் நோக்கமாகும். நவீன கல்வி முறையில் வினாத்தாள்கள் தயாரிக்க இது ஒரு முக்கிய அடிப்படையாகப் பயன்படுத்தப்படுகிறது.
            </p>

            {/* Second Nannool Poem Frame */}
            <div className="max-w-xl mx-auto bg-[#E8EFE9] border-2 border-double border-[#346023]/40 p-6 rounded-3xl relative shadow-md">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#346023]/40"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#346023]/40"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#346023]/40"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#346023]/40"></div>
              
              <p className="text-base md:text-lg font-bold text-[#346023] text-center leading-loose whitespace-pre-line font-serif">
                {`"நூல்பயில் இயல்பே நுவலின் வழக்கறிதல்
                பாடம் போற்றல் கேட்டவை நினைத்தல்
                ஆசாற் சார்ந்தவை அமைவரக் கேட்டல்
                அம்மாண் புடையோர் தம்மொடு பயிறல்
                வினாதல் வினாயவை விடுத்தல் என்றிவை
                கடனாக் கொளினே மடம்நனி இகக்கும்"`}
              </p>
              <div className="mt-4 text-center text-xs font-bold text-[#346023]/70 uppercase tracking-widest">
                — நன்னூல், பாயிரம், பாடங்கேட்டலின் வரலாறு
              </div>
            </div>

            <p className="text-base text-slate-800 leading-relaxed text-justify">
              வாகை தமிழ்சங்கம் வினாத்தாள்களைத் தயாரிக்கும்போது, நன்னூல் காட்டும் கற்கும் நெறிகளையும் புளூமின் அறிவுசார் நிலைகளையும் மிகச்சரியாகப் பொருத்துகிறது.
            </p>

            {/* படம் 08. Interactive Pyramidal / Stepped Diagram */}
            <div className="space-y-6 pt-6">
              <div className="text-center">
                <span className="inline-block bg-[#346023] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-2">
                  படம் 08. புளூமின் மதிப்பீட்டு நிலை விளக்க வரைபடம் & நன்னூல் ஒப்பீடு
                </span>
                <p className="text-sm text-slate-600">Bloom's Cognitive Taxonomy vs Nannool's Learning Stages</p>
              </div>

              {/* Stacked Stepped Hierarchy representing Bloom's Pyramid */}
              <div className="max-w-3xl mx-auto space-y-3">
                
                {/* Level 6 - Create */}
                <div className="bg-[#244417] text-white p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm">6</span>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">உருவாக்கம் (Create)</h4>
                      <p className="text-xs text-white/80">புதிய சூழலுக்குத் தக்கவாறு கற்ற திறன்களைப் பயன்படுத்திப் புதிய படைப்புகளை உருவாக்குதல்.</p>
                    </div>
                  </div>
                  <span className="bg-[#346023] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shrink-0">
                    மடம்நனி இகக்கும்
                  </span>
                </div>

                {/* Level 5 - Evaluate */}
                <div className="bg-[#346023] text-white p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm">5</span>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">மதிப்பீடு (Evaluate)</h4>
                      <p className="text-xs text-white/85">நெடுவினாக்கள் மூலம் மாணவர்கள் தங்களுக்குள் கருத்துக்களைப் பகிர்ந்து மதிப்பிடுதல்.</p>
                    </div>
                  </div>
                  <span className="bg-[#244417] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shrink-0">
                    தம்மொடு பயிறல்
                  </span>
                </div>

                {/* Level 4 - Analyze */}
                <div className="bg-[#D6E4D9] text-[#346023] p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-[#346023]/20">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#346023]/10 text-[#346023] flex items-center justify-center font-black text-sm">4</span>
                    <div>
                      <h4 className="font-bold text-[#346023] text-base md:text-lg">பகுப்பாய்வு (Analyze)</h4>
                      <p className="text-xs text-[#346023]/80">விவாதப் பூர்வமான வினாக்கள் மூலம் பகுப்பாய்வுத் திறனைத் தூண்டுதல்.</p>
                    </div>
                  </div>
                  <span className="bg-white text-[#346023] text-xs font-bold px-3 py-1.5 rounded-full border border-[#346023]/20 shrink-0">
                    வினாதல் & வினாயவை விடுத்தல்
                  </span>
                </div>

                {/* Level 3 - Apply */}
                <div className="bg-[#F4F8F5] text-slate-800 p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-[#346023]/15">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#346023]/10 text-[#346023] flex items-center justify-center font-black text-sm">3</span>
                    <div>
                      <h4 className="font-bold text-[#346023] text-base md:text-lg">பயன்பாடு (Apply)</h4>
                      <p className="text-xs text-slate-500">கண்டறியச் சொல்லும் வினாக்கள் மூலம் இலக்கண மற்றும் கருத்துப் பயன்பாட்டைச் சோதித்தல்.</p>
                    </div>
                  </div>
                  <span className="bg-[#E8EFE9] text-[#346023] text-xs font-bold px-3 py-1.5 rounded-full border border-[#346023]/15 shrink-0">
                    வழக்கறிதல் & பயன்பாடு
                  </span>
                </div>

                {/* Level 2 - Understand */}
                <div className="bg-[#F4F8F5] text-slate-800 p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-[#346023]/10">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#346023]/5 text-[#346023]/80 flex items-center justify-center font-black text-sm">2</span>
                    <div>
                      <h4 className="font-bold text-[#346023]/90 text-base md:text-lg">புரிதல் (Understand)</h4>
                      <p className="text-xs text-slate-500">பாடலின் பொருளை விளக்கும் வினாக்கள் மூலம் மாணவர்களின் புரிதலை உறுதி செய்தல்.</p>
                    </div>
                  </div>
                  <span className="bg-[#E8EFE9]/50 text-[#346023]/80 text-xs font-bold px-3 py-1.5 rounded-full border border-[#346023]/10 shrink-0">
                    கேட்டவை நினைத்தல்
                  </span>
                </div>

                {/* Level 1 - Remember */}
                <div className="bg-white text-slate-800 p-4 rounded-2xl shadow-sm hover:scale-[1.01] transition-transform flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-sm">1</span>
                    <div>
                      <h4 className="font-bold text-slate-700 text-base md:text-lg">நினைவில் இருத்துதல் (Remember)</h4>
                      <p className="text-xs text-slate-500">ஒரு மதிப்பெண் வினாக்கள் மூலம் மாணவர்களின் நினைவுத் திறனைச் சோதித்தல்.</p>
                    </div>
                  </div>
                  <span className="bg-slate-50 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 shrink-0">
                    பாடம் போற்றல்
                  </span>
                </div>

              </div>

              <div className="bg-[#F4F8F5] p-5 rounded-2xl border border-[#346023]/10 text-sm text-slate-700 leading-relaxed text-justify">
                இவ்வாறாக, வாகை தமிழசங்கம் ஒரு முழுமையான மற்றும் அறிவியல் ரீதியான வினாத்தாள் தொகுப்பை உருவாக்கித் தேர்வர்களின் திறன்களைச் சோதிக்க மரபு சார்ந்த மற்றும் அறிவியல் ரீதியான கற்றல் மற்றும் கற்றப்பித்தல் பணிகளை மேற்கொண்டு வருகிறது.
              </div>
            </div>

            {/* Certifications criteria details box */}
            <div className="bg-[#E8EFE9] border border-[#346023]/15 rounded-3xl p-6 md:p-8 space-y-4">
              <h4 className="text-lg font-bold text-[#346023] flex items-center gap-2">
                <Info className="w-5 h-5 shrink-0" />
                <span>மாணாக்கர்கள் சான்றிதழ் பெற வேண்டிய தகுதிகள்:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-2xl border border-[#346023]/10 shadow-sm">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">நிபந்தனை 1</p>
                  <p className="text-sm font-semibold text-slate-700">மூன்று அகமதிப்பீட்டுத் தேர்வுகளில் ஏதேனும் ஒன்றிலாவது பங்கேற்றிருக்க வேண்டும்.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#346023]/10 shadow-sm">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">நிபந்தனை 2</p>
                  <p className="text-sm font-semibold text-slate-700">இறுதித்தேர்வினை கட்டாயம் எழுதி, வெற்றிகரமாக சமர்ப்பித்திருக்க வேண்டும்.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#346023]/10 shadow-sm">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">நிபந்தனை 3</p>
                  <p className="text-sm font-bold text-[#346023]">ஒருங்கிணைந்த மதிப்பெண்களில் குறைந்தபட்சம் 40 மதிப்பெண் பெற்றிருக்க வேண்டும்.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Advisory Board Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#346023]/10 text-[#346023] text-sm font-semibold mb-4 border border-[#346023]/20 shadow-sm">
              <Users className="w-4 h-4 text-amber-600 fill-amber-600" />
              <span>பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு (Course Committee)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#346023] mb-4">பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advisoryBoard.map((member, i) => (
              <Card key={i} className="overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all group rounded-2xl">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] relative bg-[#E8EFE9] flex items-center justify-center overflow-hidden transition-all duration-500">
                    <Image
                      src={getAssetPath(`/images/Course/${i + 1}.png`)}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-6 text-center bg-white min-h-[220px] flex flex-col justify-center border-t border-slate-50 relative z-10">

                    <h3 className="text-lg font-bold text-[#346023] mb-2 leading-snug">{member.name}</h3>
                    <p className="text-xs font-bold text-amber-600 mb-3">{member.role}</p>
                    <p className="text-xs text-foreground/75 leading-relaxed italic">{member.org}</p>
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
