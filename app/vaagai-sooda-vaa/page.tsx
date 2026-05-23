import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageShell } from "@/components/layout/page-shell"
import { getAssetPath } from "@/lib/paths"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Award, Banknote, Download, Users, Phone, Mail, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "வாகை சூட வா - மாபெரும் தமிழ் ஒலிம்பியாட்",
  description: "வாகை சூட வா - மாபெரும் தமிழ் ஒலிம்பியாட் பற்றிய தகவல்கள் மற்றும் விதிமுறைகள்",
}

export default function VaagaiSoodaVaaPage() {
  return (
    <PageShell>
      {/* Custom Header with Logos */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-slate-50 border-b border-border/50">
        <div className="absolute inset-0 bg-primary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* Left Logo - Olympiad Logo */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 transition-transform duration-300 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={getAssetPath("/images/logo23.png")}
                  alt="Olympiad Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary tracking-tight">
                வாகை சூட வா
              </h1>
              <p className="text-xl md:text-3xl text-foreground/80 font-semibold text-gold-dark">
                மாபெரும் தமிழ் ஒலிம்பியாட்
              </p>
            </div>

            {/* Right Logo - Main Vaagai Logo */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 transition-transform duration-300 flex items-center justify-center overflow-hidden">
              <div className="relative w-[85%] h-[85%]">
                <Image
                  src={getAssetPath("/logo2.svg")}
                  alt="Vaagai Tamilsangam Logo"
                  fill
                  className="object-contain scale-[1.3]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-4 md:py-0">
              <div className="text-4xl md:text-5xl font-bold mb-2">3000+</div>
              <div className="text-white/80 font-medium">பள்ளிகள்</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-4xl md:text-5xl font-bold mb-2">52</div>
              <div className="text-white/80 font-medium">ஒருங்கிணைப்பாளர்கள்</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-4xl md:text-5xl font-bold mb-2">100000+</div>
              <div className="text-white/80 font-medium">மாணாக்கர்கள்</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-6">
            <p className="text-xl md:text-2xl text-primary font-medium italic leading-relaxed">
              "தொண்டு செய்வாய் தமிழுக்கே துறைதோறும் துடித்தெழுந்தே"
            </p>
            <p className="text-foreground/80 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
              என்ற பாவேந்தரின் பெரும் கனவை நனவாக்கும் உன்னதப் பயணத்தைத் தொடங்குகிறது வாகை தமிழ்ச்சங்கம். வெறும் தேர்வாக மட்டுமின்றி, தமிழின் ஆணிவேரான 'எண்ணும் எழுத்தும்' எனும் விழுமியத்தை மாணவர் மனதில் விதைக்கும் ஒரு வாழ்வியல் மாற்றமாக 'வாகை சூட வா' தமிழ் ஒலிம்பியாட் மலர்கிறது.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-foreground/80 leading-relaxed text-justify">
              <p>
                மொழிப்புலமை என்பது பாட அறிவைத் தாண்டியது; அது நம் பண்பாட்டின் அடையாளம். அதனை உலகத்தரம் வாய்ந்த ஒரு தளத்தில் நிலைநிறுத்தி, நம் மாணாக்கர்களின் அறிவாற்றலை அகிலம் போற்றச் செய்வதே இம்மாபெரும் திட்டத்தின் அடிப்படை நோக்கம்.
              </p>
              <p>
                அறிவியல் மற்றும் கணிதத்திற்கு இணையாக, தமிழின் மேன்மையை சர்வதேசப் பார்வைக்குக் கொண்டு செல்ல வாகை தமிழ்ச்சங்கம் முன்னெடுக்கும் இந்த மகத்தான தமிழ் யாகத்தில், இளைய தலைமுறை வாகை சூடத் துடித்தெழட்டும்!
              </p>
              <p>
                "கேடில் விழுச்செல்வம் கல்வி" எனும் வள்ளுவர் வாக்கிற்கேற்ப, அழிவில்லாத செல்வமான தமிழை ஆழமாகக் கற்க இது ஒரு அரிய வாய்ப்பு. மேலும் இத்தேர்வில் பங்கேற்பதன் மூலம் வழக்கமான பாடப்புத்தகத் தமிழைத் தாண்டி, சவாலான வினாக்கள் மூலம் மாணவர்களின் சிந்திக்கும் திறனை மேம்படுத்துதும்.
              </p>
            </div>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-justify">
              <p>
                சர்வதேசத் தரத்திலான இப்போட்டியில் பங்கேற்பதன் மூலம், மாணவர்கள் தங்களின் தர்க்க ரீதியான சிந்தனை மற்றும் மொழிப் பயன்பாட்டுத் திறனை உலக அரங்கில் ஒப்பிட்டுப் பார்க்க முடியும். இது அவர்களுக்கு ஒரு புதிய தன்னம்பிக்கையையும், தனித்துவமான அடையாளத்தையும் அள்ளித் தரும்.
              </p>
              <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl mt-4">
                <p className="font-medium text-primary">
                  இப்பெருமைமிகு செயல்பாட்டில் அனைத்துநிலை பள்ளி மாணாக்கர்களும் அவர்களின் தூண்டுகோலாய் திகழும் ஆசிரியப்பெருமக்கள், தலைமையாசிரியர்கள், பள்ளி நிர்வாகக் குழுவினர் மற்றும் முதல்நிலை ஆசிரியர்களாகிய பெற்றோர்களையும் அகமகிழ அன்போடு அழைக்கிறோம்.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-primary">விதிமுறைகள்</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "வகுப்பு வாரியாக தேர்வு தனித்தனியாக நடைபெறும்.",
              "முதல் நிலைத் தேர்வானது இணையவழியில், சரியான விடையைத் தேர்ந்தெடுக்கும் தெரிவுசெய் முறைப்படி நடக்கும். மொத்த மதிப்பெண்களில் 40% க்கும் மேல் மதிப்பெண் பெறும் மாணாக்கர்கள் அடுத்த நிலைக்கு நகர்வர்.",
              "இரண்டாம் நிலைத் தேர்வானது அந்தந்தப் பகுதிகளில் ஒருங்கிணைந்த மையங்களிலோ அல்லது அதிக பங்கேற்பாளர்களின் எண்ணிக்கையைக் கொண்ட பள்ளிகளில் நேரடியாக நடைபெறும்.",
              "பங்கேற்கும் அனைத்து மாணாக்கர்களுக்கும் சான்றிதழ் வழங்கப்படும். ஒவ்வொரு பிரிவிலும் முதல் 05 இடங்களைப்பெறும் தமிழ்ச்செல்வங்களுக்கு 'சிறந்த தமிழ் மாணவர்' விருதும், நிலைக்கேற்ப சிறப்புப் பரிசுகளும், சான்றிதழ்களும் வழங்கப்படும்.",
              "அதிகப்படியான பங்கேற்பாளர்களைப் பங்குபெறச்செய்யும் கல்வி நிறுவனம், அதிகப்படியான தேர்ச்சி மாணாக்கர்களைக் கொண்ட கல்வி நிறுவனங்களின் பள்ளித் தலைமையாசிரியர் மற்றும் ஒருங்கிணைப்பாளர்களுக்கு சிறப்பு முன்னெடுப்பிற்கான பாராட்டு மற்றும் விருதுச் சான்றிதழ் வழங்கப்படும்.",
              "ஒவ்வொரு நிலையிலும் போட்டிகளில் கலந்துகொள்வதற்கான விரிவான நெறிமுறைகள் மற்றும் மாதிரி வினாத்தாள்கள் அவ்வப்போது வழங்கப்படும்.",
              "ஒரு வகுப்பிலிருந்து எத்தனை மாணாக்கர்கள் வேண்டுமெனினும் உரிய கட்டணத்தைச் செலுத்தி பங்கேற்றுக்கொள்ளலாம். மாணாக்கர்களின் பட்டியலை விரிதாளில் பூர்த்திசெய்து info@vaagaitamilsangam.com மின்னஞ்சலுக்கு அனுப்பவேண்டும்."
            ].map((rule, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-primary/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-foreground/80 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus and Schedule */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Syllabus */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-teal-700">பாடத்திட்டம்</h2>
              </div>
              <p className="text-foreground/70">
                மூன்றாம் வகுப்புவரை மாணாக்கர்கள் தங்களின் பள்ளிப் பாடப் புத்தகத்தைப் பயின்றால் போதுமானது. நான்காம் வகுப்பு முதல் மாணக்கர்கள், பின்வரும் பாடத்திட்டதை தேர்விற்குப் பயன்படுத்த வேண்டும்.
              </p>

              <div className="space-y-4">
                {[
                  { title: "கற்கண்டு ( 4 & 5 )", link: getAssetPath("/PDF/4 & 5_merged.pdf") },
                  { title: "கனியமுது ( 6 & 7 )", link: getAssetPath("/PDF/6 - 7_merged (1).pdf") },
                  { title: "தேன்தமிழ் ( 8 & 9 )", link: getAssetPath("/PDF/8 - 9_merged.pdf") },
                  { title: "தெள்ளமுது ( 10, 11 & 12 )", link: getAssetPath("/PDF/10 - 12_merged.pdf") }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors group border border-transparent hover:border-teal-200">
                    <span className="font-semibold">{item.title}</span>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-teal-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-orange-700">தேர்வு அட்டவணை</h2>
              </div>
              <p className="text-foreground/70">
                வாகை சூட வா - மாபெரும் தமிழ் ஒலிம்பியாட் இந்நிகழ்வு மொத்தம் இரண்டுநிலைகளாக பின்வரும் அட்டவணைப்படி, ஒவ்வொரு வருடமும் தேர்வுகள் நடைபெறும்.
              </p>

              <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left">
                    <thead className="bg-muted/50 text-foreground">
                      <tr>
                        <th className="p-4 font-semibold border-b whitespace-nowrap">நிகழ்வு</th>
                        <th className="p-4 font-semibold border-b whitespace-nowrap">மாதம்</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-medium whitespace-nowrap">பதிவு செய்ய</td>
                        <td className="p-4 text-foreground/70 whitespace-nowrap">சூன்</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium whitespace-nowrap">முதல் நிலை</td>
                        <td className="p-4 text-foreground/70 whitespace-nowrap">செப்டம்பர்</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium whitespace-nowrap">இரண்டாம் நிலை</td>
                        <td className="p-4 text-foreground/70 whitespace-nowrap">நவம்பர் / திசம்பர்</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <a href="https://drive.google.com/file/d/1gB3_7z2PWfz5oKOjnLwHJRWFY4PprHkg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors font-medium border border-orange-200">
                <Award className="w-5 h-5" />
                முந்தைய ஆண்டு வெற்றியாளர்கள்
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Payment & Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Payment Info */}
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Banknote className="w-6 h-6 text-gold-light" />
                  கட்டண விவரங்கள்
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">ஒரு மாணாக்கருக்கான கட்டணம் <span className="font-bold text-gold-light text-2xl ml-2">₹150</span></p>
                <div className="space-y-3 bg-black/20 p-6 rounded-xl">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-white/70">Account Name</span>
                    <span className="col-span-2 font-medium">VAAGAI TAMILSANGAM</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-white/70">Account No</span>
                    <span className="col-span-2 font-medium">110089948814</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-white/70">IFSC Code</span>
                    <span className="col-span-2 font-medium">CNRB0016310</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-white/70">Bank & Branch</span>
                    <span className="col-span-2 font-medium">Canara Bank, Mallur Branch</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gold-light">வாகை சூடிட அனைவரையும் தமிழால் அழைக்கிறோம்.</h2>
                <p className="text-white/80 text-lg">மேலும் தகவல்களுக்கு / பதிவு செய்ய தொடர்பு கொள்ளவும்:</p>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@vaagaitamilsangam.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">மின்னஞ்சல்</div>
                    <div className="text-xl font-medium">info@vaagaitamilsangam.com</div>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+918248272880" className="flex-1 flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">அழைக்க</div>
                      <div className="text-xl font-medium">+91 8248272880</div>
                    </div>
                  </a>
                  <a href="tel:+919994105585" className="flex-1 flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">அழைக்க</div>
                      <div className="text-xl font-medium">+91 9994105585</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  )
}
