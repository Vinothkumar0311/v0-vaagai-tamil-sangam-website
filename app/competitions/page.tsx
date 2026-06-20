import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { getAssetPath } from "@/lib/paths"
import { RoadmapDialog } from "@/components/shared/roadmap-dialog"

export const metadata: Metadata = {
  title: "போட்டிகளும் விருதுகளும் - Competitions & Awards",
  description: "வாகை தமிழ்ச்சங்கம் நடத்தும் போட்டிகள் மற்றும் விருதுகள்",
}

const competitions = [
  {
    title: "சீர்முகு சித்திரை",
    quote: "'இருந்தமிழே உன்னால் இருந்தேன் - இமையோர் விருந்தமிழ்தம் என்றாலும் வேண்டேன்...' (தமிழ்விடு தூது)",
    content: "-என்று புலவர்முதல் புன்சிறார்வரை ஒவ்வொரு தமிழரும் வியந்து நயந்து போற்றும் அன்னைத் தமிழைக் கொண்டாடும் அழகிய திங்கள் சித்திரை. 'பொருப்பிலே பிறந்து தென்னன் புகழிலே வளர்ந்து சங்கத்து இருப்பிலே இருந்து...' கல்வெட்டு முதல் கணினிச் சில்வெட்டுவரை இளமை குன்றாது கோலோச்சும் கன்னித்தமிழின் புத்தாண்டைக் கொண்டாடி, தமிழ்த்திறன்களில் தழைத்தோங்கி விளங்கும் சிறந்த வெற்றியாளர்களுக்குச் 'செந்தமிழ்ச் செல்வர்' விருதுகள் வழங்கப்படும். கவிதை, பேச்சு, ஓவியம் என்று முப்பெரும் பிரிவுகளில் முத்தமிழின் முத்தான புதல்வர்களுக்கு இவ்விருதுகள் வழங்கப்படுகின்றன.",
    image: "/images/activities/chithirai.png"
  },
  {
    title: "அகமகிழ் ஆனி",
    quote: "'இளமையில் கல்' என்றார் இன்றமிழ் மூதாட்டி, பசுமரத்து ஆணி போல' என்பது பழுதில்லாப் பழமொழி'",
    content: "சிறுவத்திலேயே செந்தமிழின் சுவையுணர்த்தி, விதையாய் உறங்கும் மொழித்திறன்களையும் கவின்கலைத் திறன்களையும் விருட்சமாக்க வாய்ப்பென்னும் நீரூற்றி வளர்க்கிறது வாகை சங்கம். ஆனித் திங்களில் அன்பிற்குரிய மழலைகளுக்குத் தமிழ்ப் பேச்சு, ஓவியம் முதலிய போட்டிகளை நடத்தி 'மழலைமொழி மதியரசன்' / 'மழலைமொழி மதியரசி' என்ற விருதுகள் வழங்கப்படுகின்றன.",
    image: "/images/activities/aani.png"
  },
  // {
  //   title: "அருந்தமிழ் ஆடி",
  //   quote: "'மாந்தர்தம் உள்ளத்துனைய உயர்வு'",
  //   content: "-என்ற பொதுமறை போதனைக்கேற்ப நமது திறமைகள் நாம் கொள்ளும் ஊக்கத்தின் அளவே ஆகும். ஒவ்வொருவருக்குள்ளும் பல திறமைகள் உறங்கிக்கொண்டிருக்கின்றன, வாயுமைந்தனுக்கு வலிமையுணர்த்திய சாம்பவானைப் போல நம் திறமைகளை அடையாளங்காட்டி ஊக்கப்படுத்திக் களமமைத்துக்கொடுத்து வழிநடத்தி ஏற்படுத்தி வெற்றி வாகை சூட்டி மகிழ்கிறது தமிழ்ச்சங்க வாகை! ஆடித்திங்களில் அருந்தமிழ்ப் போட்டிகள் வைத்து வெற்றி பெறுவோருக்குக் 'கவின்றமிழ்' விருதுகள் வழங்கப்படுகின்றன.",
  //   image: "/images/activities/aadi.png"
  // },
  {
    title: "ஆண்டுவிழா ஆவணி",
    quote: "'தோகை விரித்தாடும் தொல்தமிழாம் மாமயிலின் மோகச் சிறகுகளில் முத்தான ஓரிறகாம் வாகை தமிழ்ச்சங்கம் வந்துதித்த பொன்னாளாம் ஆகத்துத் திங்களென்று ஆர்! [இன்னிசை வெண்பா]**'",
    content: "வாகை தமிழ்ச்சங்கத்தின் ஆண்டுவிழா கொண்டாட்டங்களின் முக்கிய அங்கமாக 'வாகை விருதுகள்' வழங்கப்படுகின்றன. பல்வேறு மொழித்திறன் பிரிவுகளில் போட்டிகள் நடத்தப்பட்டு வெற்றி பெறும் தமிழன்னையின் தவப்புதல்வர்களுக்கு இவ்விருதுகள் ஆண்டுதோறும் வழங்கிச் சிறப்பிக்கப்படுகின்றன.",
    image: "/images/activities/aavani.png"
  },
  {
    title: "புதுமைப் புரட்டாசி",
    quote: "'அடியார்கள் வாழ அவுணரினந் தேய*' கொலுவிருந்து நோற்றாள் பராசக்தி அன்னை அன்று, 'இனமானம் வாழ, இழிதகைமை தேய*' கொலுவிருக்கிறாள் தமிழன்னை இன்று! 'நவதமிழ் நவராத்திரி': ஒன்பது இரவுகள், ஒன்பது தமிழ்வகை, ஒரே உணர்வு - தாய்மொழி!",
    content: "அன்னைத் தமிழை அலங்கார கொலுவிருத்தி எண்ணத்தில் எழில்கூட்டி ஏற்றந்தரும் செயல்புரிந்து ஒன்பது நாளும் ஒவ்வொரு தமிழ்வகையை நண்ணும் அறிஞர் நாவுரைக்க உளங்குவித்துக் கேட்டும் பார்த்தும் கேளிக்கை போட்டியென நாட்டும் நவவிழா - நவதமிழ் நவராத்திரி!*",
    image: "/images/activities/purattasi.png"
  },
  {
    title: "அப்துல் கலாம் ஐப்பசி",
    quote: "'உறக்கத்தில் காண்பதல்ல கனவு, உன்னை உறங்கவிடாமல் இயக்குவதே கனவு' என்று உயர்ந்த கனவுகளை நம் உள்ளத்தில் விதைத்து, அக்கினிச் சிறகுகளால் விசிறிவிட்ட ஆசான், தேசத்தின் தென்கோடி மூலையிலே பிறந்து தேயாது உழைத்து ஏவுகணை ஏணியேறி பில்லியன் உள்ளங்களைப் பேதமின்றிப் பிணைத்த நல்லியல்பு நாயகன்...*",
    content: "ஐயா அப்துல் கலாம் அவதரித்த (அக்டோபர் 15ஆம்) நாளைக் கொண்டாடும் வகையில் ஐப்பசியில் அவர்பேரால் ஆசிரியர்க்கும் மாணவர்க்கும் 'கலாம் கனவு ஆசிரியர் விருது'/'கலாம் கனவு மாணவர் விருது'கள் வழங்கப்படுகின்றன.",
    image: "/images/activities/aippasi.png"
  },
  {
    title: "கவித்திங்கள் கார்த்திகை",
    quote: "'சொல்லில் தீவளர்த்துச் சுதந்திர யாகம் அல்லும் பகலும் ஆற்றிய வீரன், அன்னைத் தமிழின் அடிமுதல் முடிவரை இன்னும் பலப்புது இலக்கிய அணிகளைச் சார்த்தி மகிழ்ந்த சரித்திர நாயகன், பழமைக்கும் புதுமைக்கும் பாலமாய் நின்றோன், குழையாத சிங்கம், கொள்கை மேலோன், சகாவெனக் கண்ணனைக் காளியைச் சார்ந்த மகாகவி யோகி, மரணத்தை வென்றோன்...' [நிலைமண்டில ஆசிரியப்பா]*",
    content: "அந்த முண்டாசு கவியின் பிறந்த நாளைக் (திசம்பர் 11) கொண்டாடும் வகையில் மரபு, புதுக்கவிதை போட்டிகள் நடத்தப்பட்டு, வெற்றியாளர்களுக்குக் 'கவிச்செம்மல்' விருதுகள் வழங்கப்படும்.",
    image: "/images/activities/karthigai.png"
  },
  {
    title: "மங்கள மார்கழி",
    quote: "'ஆண்டாள் அருளால் அமரும் திருப்பாவை, மாணிக்கவாசகர் மலரும் திருவெம்பாவை - இரு திருவாய்மொழிகளும் ஒலிக்கும் புனிதமான மார்கழி மாதம்!'",
    content: "ஆண்டாள் அருளிய திருப்பாவையும், மாணிக்கவாசகர் அருளிய திருவெம்பாவையும் தினமும் பக்தியுடன் பாராயணம் செய்து, இறையருள், நல்லிணக்கம், செழிப்பு மற்றும் மன அமைதி பெறும் நிகழ்விது. மார்கழி மாதம் முழுவதும் நடைபெறும் திருப்பாவை – திருவெம்பாவை பாராயண நிகழ்வுகள் மூலம், தமிழ் மொழியின் இனிமையையும், பக்தி இலக்கியங்களின் மகத்துவத்தையும், நம் பாரம்பரிய பண்பாட்டு விழுமியங்களையும் அடுத்த தலைமுறைக்கு எடுத்துச் செல்வோம். அனைவரும் இணைந்து தமிழின் பெருமையை உலகறியச் செய்வோம்.",
    image: "/images/activities/margazhi.png"
  },
  {
    title: "தித்திக்கும் தை",
    quote: "'வள்ளுவன் தன்னை உலகினுக்கே தந்து வான்புகழ் கொண்ட தமிழ்நாடு'",
    content: "-என்று தமிழுக்கும் உலகிற்கும் பொய்யா மொழியாய்ப் பொதுமறையாய் விளங்கும் திருக்குறளின் பெருமையைப் பறைசாற்றும் வகையிலான கட்டுரை, கவிதை, பேச்சு, ஓவியப்போட்டிகள் ஆகியவை தைத்திங்களில் நடத்தப்படும். போட்டிகளில் வெல்பவர்களுக்குத் 'வள்ளுவ மாமணி' விருதுகள் வழங்கப்படும்.",
    image: "/images/activities/thai.png"
  },
  {
    title: "மகளிர் மாசி",
    quote: "'மங்கையராய்ப் பிறப்பதற்கே நல்ல மாதவம் செய்திடல் வேண்டுமம்மா'",
    content: "-என்ற கவிமணியின் கூற்றுக்கேற்ப மாதவஞ் செய்த மாதர் சிகாமணிகளைப் போற்றும் வகையில் மாசித்திங்கள் நிகழ்வுகள் கொண்டாடப்படுகின்றன. 'மனைத்தக்க மாண்புடையாள்' ஆகி இல்லத்தரசிகளாய்க் கோலோச்சி வீட்டையும் நாட்டையும் கட்டமைக்கும் பெண்களையும், 'பட்டங்கள் ஆள்வதும் சட்டங்கள் செய்வதும் பாரினில் பெண்கள் நடத்த வந்தோம்' என்ற முண்டாசு கவியின் முழக்கத்திற்கு ஏற்ப பல்வேறு துறைகளில் கால்பதித்துச் சாதிக்கும் பெண்களையும் கண்டறிந்து அவர்களுக்கு 'மாண்புமிகு மகளிர்' விருது கொடுத்து கௌரவிக்கிறது வாகை தமிழ்ச்சங்கம்.",
    image: "/images/activities/magalir-masi.png"
  }
]

export default function CompetitionsPage() {
  return (
    <PageShell>
      <PageHeader
        title="போட்டிகளும் விருதுகளும்"
        description="திறமைகளை வெளிக்கொணரவும் அங்கீகரிக்கவும் வாகை தமிழ்ச்சங்கம் நடத்தும் போட்டிகள்"
      />

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-justify mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                ஒவ்வொருவருக்குள்ளும் பல திறமைகள் ஒளிந்திருக்கும், அவற்றை வெளிக்கொணருவதில் போட்டிகளுக்கு இன்றியமையாத பங்குள்ளது. தமிழார்வலர்களின் தமிழ்க் கல்வியின் ஆழ அகலத்தையும், மொழித்திறன்களையும், கவின்கலை, நுண்கலைத் திறன்களையும் வெளிப்படுத்தவும் அவற்றிற்குரிய அங்கீகாரம் பெறுவதற்கும் களமாக வாகை தமிழ்ச்சங்கம் ஆண்டுமுழுவதும் அவ்வத்திங்களுக்குகந்த தலைப்புகளில் பல்வேறு வகைமைகளில் போட்டிகளை நடத்திப் பரிசுகளையும் விருதுகளையும் வழங்கி வருகிறது.
              </p>

              <div className="relative p-8 md:p-10 bg-primary/5 rounded-2xl border border-primary/10 mb-10">
                <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">&ldquo;</div>
                <div className="text-center font-medium text-lg md:text-xl text-primary leading-loose italic">
                  <p>கூட்டுஞ் சுவைக்கனி கொள்ள முருகனும் கொம்புடனே</p>
                  <p>நீட்டும் முகத்தவன் நேரும் ஒருதனிப் போட்டியைப்போல்</p>
                  <p>நாட்டும் சுவைத்தமிழ் நன்கு தெரிவுற நாட்டிடும்பல்</p>
                  <p>போட்டி விருதுகள் புல்லும் பரிசுடன் வாகையிலே!</p>
                </div>
                <div className="absolute -bottom-8 -right-2 text-6xl text-primary/20 font-serif">&rdquo;</div>
                <p className="text-right mt-6 text-foreground/70 font-semibold text-sm md:text-base">-- கட்டளைக் கலித்துறை</p>
              </div>

              {/* Yearly Roadmap Image - client component to avoid SSR hydration mismatch */}
              <RoadmapDialog />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-slate-50/80">
        <div className="container mx-auto px-4 max-w-[1800px]">
          <div className="relative">
            {/* The vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1.5 bg-primary/10 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-20 md:space-y-0 relative">
              {competitions.map((comp, index) => {
                const isEven = index % 2 === 0
                return (
                  <div key={index} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full md:mb-32 last:mb-0`}>

                    {/* Center Node / Dot for Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full border-4 border-primary/20 z-20 items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <div className="w-5 h-5 bg-primary rounded-full shadow-inner"></div>
                    </div>

                    {/* Content Section (Text) */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-10 md:items-end text-left md:text-right' : 'md:pl-10 md:items-start text-left'}`}>
                      <div className="max-w-3xl space-y-4 bg-white p-6 md:px-10 md:py-8 rounded-3xl shadow-xl border border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all z-10 relative w-full">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-sm">
                          போட்டி &amp; விருது
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                          {comp.title}
                        </h2>
                        <div className={`p-3 md:p-4 bg-gold/5 border-gold italic text-foreground/80 font-medium ${isEven ? 'md:border-r-4 border-l-4 md:border-l-0 rounded-l-xl md:rounded-l-none md:rounded-r-xl text-left md:text-right' : 'border-l-4 rounded-r-xl text-left'}`}>
                          {comp.quote}
                        </div>
                        <p className={`text-slate-600 leading-relaxed text-base md:text-lg ${isEven ? 'text-justify md:text-right' : 'text-justify md:text-left'}`}>
                          {comp.content}
                        </p>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className={`w-full md:w-1/2 mt-8 md:mt-0 flex ${isEven ? 'md:pl-10 md:justify-start' : 'md:pr-10 md:justify-end'}`}>
                      <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group z-10 bg-slate-100">
                        <Image
                          src={getAssetPath(comp.image)}
                          alt={comp.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
