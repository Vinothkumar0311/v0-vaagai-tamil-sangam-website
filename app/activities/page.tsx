import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { activities, competitionPoem } from "@/data/activities"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/paths"
import { BookOpen, Monitor, CreditCard, Coffee, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "செயல்பாடுகள்",
  description: "வாகை தமிழ்ச்சங்கத்தின் செயல்பாடுகள் மற்றும் நிகழ்வுகள்",
}

const monthlyReviewers = [
  { month: "ஜனவரி", names: ["டேனியல் செல்வராஜ்", "சொக்கன்"] },
  { month: "பிப்ரவரி", names: ["சிரமம்முத்து", "தி.ஜானகிராமன்"] },
  { month: "மார்ச்", names: ["அழகிய பெரியவன்", "இமையம்", "க.வெங்கடேசன்", "விக்கிரமன்", "ராஜேஷ்குமார்", "ஆதவன்", "லட்சுமி"] },
  { month: "ஏப்ரல்", names: ["நம்மாழ்வார்", "இலாஹில் சார்க்கிஜதகாயன்", "எம்.பாலசுப்ரமணியம்", "கி.வா.ஜெகந்நாதன்", "எஸ்.ராமகிருஷ்ணன்", "வான்டுமாமா", "ஜெயமோகன்", "பவச்செல்துரை", "ஜெயகாந்தன்", "புதுமைப்பித்தன்", "பிரபஞ்சன்", "கு.ப.ரா"] },
  { month: "மே", names: ["சுஜாதா", "ராஜேந்திரன்", "ஜோடிகுருஸ்", "எம்.வி.வெங்கட்ராம்", "முதில்", "சுந்தர ராமசாமி"] },
  { month: "ஜூன்", names: ["அரவிந்த் நீலகண்டன்", "வெ.இறையன்பு", "சல்மான் ருஷ்டி", "கண்ணதாசன்", "அகிலன்", "முனியப்பன்"] },
  { month: "ஜூலை", names: ["தாமரை கண்ணணன்", "பாலகுமரன்", "தமிழ் நாடன்", "ரமணி சந்திரன்", "இந்திரா பார்த்தசாரதி", "கரிச்சான் குஞ்சு", "மகுள்", "வைரமுத்து", "மௌனி", "சிற்பி பாலசுப்ரமணியம்", "மா.நண்ணன்"] },
  { month: "ஆகஸ்ட்", names: ["சோ.தர்மன்", "எம்.டி.வாசுதேவன் நாயர்", "அ.வெண்ணிலா", "கண்ணதாசன்", "கவி சிவம்"] },
  { month: "செப்டம்பர்", names: ["ஜி.நாகராஜன்", "மு.மேத்தா", "தி.ஜேவன்", "கி.ரா", "மெளாபாஸு சர்மா", "அசோகமித்திரன்", "அ.பெருமான்", "ஈரோடு தமிழன்பன்"] },
  { month: "அக்டோபர்", names: ["ஜராவதம் மகாதேவன்", "ஆண்டாள் பிரியதர்ஷினி", "ரா.கி.ரங்கராஜன்", "பாரதிதாசன்", "சிவசங்கரி", "பெருமாள் முருகன்", "அமிஜூ திரிபாதி", "கு.ஞானசம்பந்தன்", "தொ.மு.சி", "பாலவண்ணன்", "பா.விஜய்", "ரமேஷ் பிரேதன்", "லா.ச.ராமாமிர்தம்"] },
  { month: "நவம்பர்", names: ["கு.ப.சேது அம்மாள்", "அழ.வள்ளியப்பன்", "அப்துல் ரகுமான்", "தாமரை", "வல்லிக்கண்ணண்", "இந்திரா சௌந்தர்ராஜன்", "அருந்ததி ராய்"] },
  { month: "டிசம்பர்", names: ["நா.வானமாமலை", "ஆயிஷா இரா.நடராஜன்", "வண்ணநிலவன்", "மயிலை சீனி வேங்கடசாமி", "ந.பார்த்தசாரதி", "சாரு நிவேதிதா", "சல்மா", "தமிழ் மகன்", "நாஞ்சில் நாடன்"] },
]

export default function ActivitiesPage() {
  return (
    <PageShell>
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src={getAssetPath("/images/activities/hero-banner.png")}
          alt="Tamil Heritage Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-6">
              "தமிழ் எங்கள் உயர்வுக்கு வான் - இன்பத் தமிழ் எங்கள் அசதிக்குச் சுடர் தந்த தேன்!"
            </p>
            <cite className="block text-gold text-xl md:text-2xl">--பாவேந்தர்</cite>
          </blockquote>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">போட்டிகளும் விருதுகளும்</h2>
          <Card className="max-w-3xl mx-auto bg-muted/30 border-primary/10 mb-16 p-8">
            <div className="space-y-2">
              {competitionPoem.lines.map((line, index) => (
                <p key={index} className="text-xl text-primary font-medium italic">"{line}"</p>
              ))}
              <p className="text-gold text-sm pt-4 tracking-widest uppercase">--{competitionPoem.author}</p>
            </div>
          </Card>

          {/* Monthly Activities Grid */}
          <div id="monthly" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-video">
                  <Image src={getAssetPath(activity.image)} alt={activity.title} fill className="object-cover" />
                </div>
                <CardHeader><CardTitle className="text-2xl font-bold text-primary">{activity.title}</CardTitle></CardHeader>
                <CardContent className="pb-8">
                  {activity.quote && <p className="text-gold italic mb-3">"{activity.quote}"</p>}
                  <p className="text-foreground/70">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="development" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">வளர்ச்சி மற்றும் மேம்பாடு</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl text-foreground/80 leading-relaxed">
                'தமிழ் எங்கள் மூச்சு என்று சங்ககே முழங்கு! இன்பத்தமிழ் எங்கள் உயிர்க்கு நேர்!' என்று தமிழால் நிணைந்த குடும்பம் இது.
              </p>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                 <h4 className="font-bold text-primary mb-6">பணிகளின் விவரங்கள் :-</h4>
                 <ul className="space-y-4">
                  {["மனித வள மேம்பாடு", "குழு மேலாண்மை", "நெறிப்படுத்துதல்", "நேரடி செய்தியறிக்கை", "கண்காணிப்பு", "அரசு ஒப்புதல் பெறுதல்", "பயிற்சிப்பட்டறைகள்"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> {item}
                    </li>
                  ))}
                 </ul>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image src={getAssetPath("/images/activities/awards.png")} alt="Awards" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Children's Forum */}
      <section id="children" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
             <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-primary font-bold text-2xl mb-4">வா</div>
             <h2 className="text-5xl font-bold text-teal">வாகை மழலையர் மன்றம்</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl"><Image src={getAssetPath("/images/activities/children-group.png")} alt="Children" fill className="object-cover" /></div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">நோக்கம்</h3>
              <p className="text-xl text-foreground/70 mb-12">தமிழானது வாக்கிலும் மனத்திலும் இருந்திட வேண்டும் என்ற நோக்கமே எங்களின் முதன்மை நோக்கம்.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: BookOpen, title: "தினம் தினம் திருக்குறன்", desc: "குழந்தைகள் அறிய வேண்டிய நீதிக்கதைகள்." },
                  { icon: Monitor, title: "கதை ஞாயிறு", desc: "கதைகள் மூலம் சிந்தனை வளர்த்தல்." },
                  { icon: CreditCard, title: "மாதாந்திர நிகழ்வு", desc: "கவிதைகள், கட்டுரை, பேச்சுப்போட்டி." },
                  { icon: Coffee, title: "விடுகதை", desc: "மாலை நேர விடுகதைகள் மூலம் ஆர்வம்." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{feature.title}</h4>
                      <p className="text-sm text-foreground/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Forum */}
      <section id="women" className="py-24 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">வா</div>
            <h2 className="text-5xl font-bold text-red-500">வாகை மகளிர் மன்றம்</h2>
          </div>
          <div className="max-w-4xl mb-16">
            <p className="text-xl italic leading-relaxed mb-6">"மங்களையராய் பிறப்பதற்கே நல்ல மாதவம் செய்திடல் வேண்டும்மா"</p>
            <p className="text-lg opacity-80">பெண்களுக்கென தனியாக அவர்களின் தனித்திறனை வெளிக்கொணரும் பொருட்டும், தமிழ்த்திறனை மேம்படுத்தும் வகையிலும் உருவாக்கப்பட்டது.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
               {["நாளுமொரு கோலம் - ஆர்வம் தூண்டும் முகப்பில்", "நாாளும் ஒரு புத்தகம் அறிவோம் - புத்தகங்கள் பகிரப்படும்", "நாட்டு நடப்பு - நாட்டின் செய்திகளைத் தெரிந்து கொள்ளுதல்", "உங்களுக்கு தெரியுமா? - பல பயனுள்ள தகவல்களைப் பகிர்தல்"].map((text, i) => (
                 <p key={i} className="text-xl font-medium border-l-4 border-gold pl-6 py-2">{text}</p>
               ))}
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
               <Image 
                 src={getAssetPath("/images/activities/magalir-masi.png")}
                 alt="Women's Forum Event"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Literary Forum */}
      <section id="literary" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 text-primary">வா</div>
            <h2 className="text-5xl font-bold text-teal-700">வாகை பனுவல் மன்றம்</h2>
          </div>
          <p className="text-xl text-foreground/70 mb-16 max-w-4xl">புத்தகம் வாசிக்கும் பழக்கத்தை ஏற்படுத்தவும், தமிழில் இருக்கும் இலக்கியங்களை எளிய முறையில் அறிமுகப்படுத்தவும் உருவானது.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-muted">
               <Image 
                 src={getAssetPath("/images/activities/awards.png")}
                 alt="Literary Forum Awards"
                 fill
                 className="object-cover"
               />
             </div>
             <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary">புத்தக மதிப்புரை நிகழ்வுகள் :-</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {monthlyReviewers.map((item, i) => (
                     <div key={i} className="space-y-2 p-4 rounded-2xl bg-muted/50">
                        <h4 className="font-bold text-primary">{item.month}</h4>
                        <div className="flex flex-wrap gap-2">
                           {item.names.map((name, ni) => (
                             <span key={ni} className="text-sm bg-white px-2 py-1 rounded-lg text-foreground/70 border">✓ {name}</span>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
