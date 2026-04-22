export interface MandramEvent {
  title: string
  date: string
  image: string
  description: string
  type: "upcoming" | "past"
}

export interface Mandram {
  slug: string
  title: string
  logo: string
  description: string
  objective: string
  features: { title: string; desc: string }[]
  banner: string
  events: MandramEvent[]
  themeColor: string
}

export const mandramsData: Mandram[] = [
  {
    slug: "panuval",
    title: "வாகை பனுவல் மன்றம்",
    logo: "/images/clubs/1.png",
    description: "இலக்கிய வாசிப்பு மற்றும் கலந்துரையாடல்",
    objective: "தமிழில் இருக்கும் எண்ணிலடங்கா புதையல்களான இலக்கியங்களை எளிய முறையில் மக்களிடம் கொண்டு சேர்த்தல் மற்றும் இலக்கியங்கள், புத்தகங்கள் வாசிக்கும் பழக்கம் மூலமாக தன்னம்பிக்கையை அதிகப்படுத்துதல்.",
    features: [
      { title: "புத்தகப் பகிர்வு", desc: "ஒவ்வொரு மாதமும் புத்தகங்கள் பகிரப்பட்டு, அதன் மீதான எண்ண ஓட்டங்களைப் பங்கேற்பாளர்கள் வெளிப்படுத்துதல்." },
      { title: "கலந்துரையாடல்", desc: "பனுவல் மன்ற கலந்துரையாடல் கூட்டங்கள் மூலம் இலக்கியச் சிந்தனை வளர்த்தல்." },
      { title: "சான்றிதழ்கள்", desc: "பங்கேற்பாளர்களுக்குச் சான்றிதழ்கள் வழங்கி ஊக்குவித்தல்." }
    ],
    banner: "/images/activities/awards.png",
    events: [
      { title: "புத்தக வாசிப்பு", date: "2025-01-10", description: "மாதாந்திர புத்தக வாசிப்பு நிகழ்வு", image: "/images/placeholder.jpg", type: "past" },
      { title: "கலந்துரையாடல்", date: "2025-02-15", description: "இலக்கிய கலந்துரையாடல்", image: "/images/placeholder.jpg", type: "upcoming" }
    ],
    themeColor: "text-teal-700"
  },
  {
    slug: "mazhalai",
    title: "வாகை மழலையர் மன்றம்",
    logo: "/images/clubs/2.png",
    description: "குழந்தைகளின் தமிழ்திறன் வளர்ச்சி",
    objective: "குழந்தைகளின் (03 வயது முதல் 13 வயது வரை) தமிழ்த்திறன் செயல்பாடுகள் மற்றும் தமிழ்ப் பேச்சாற்றல் மற்றும் படைப்பாற்றலை ஊக்குவிக்க உருவாக்கப்பட்ட அமைப்பே வாகை மழலையர் மன்றம்.",
    features: [
      { title: "தினம் தினம் திருக்குறள்", desc: "குழந்தைகள் அறிய வேண்டிய நீதிக்கதைகள் மற்றும் திருக்குறள் ஒப்புவித்தல்." },
      { title: "கதை ஞாயிறு", desc: "கதைகள் மூலம் குழந்தைகளின் சிந்தனைத் திறனை வளர்த்தல்." },
      { title: "மாதாந்திர நிகழ்வு", desc: "கவிதைகள், கட்டுரை, மற்றும் பேச்சுப்போட்டிகள் மூலம் திறன்களை வெளிக்கொணர்தல்." }
    ],
    banner: "/images/activities/children-group.png",
    events: [],
    themeColor: "text-teal-500"
  },
  {
    slug: "magalir",
    title: "வாகை மகளிர் மன்றம்",
    logo: "/images/clubs/3.png",
    description: "பெண்களின் திறன் மேம்பாடு",
    objective: "பெண்களுக்கென தனியாக அவர்களின் தனித்திறனை வெளிக்கொணரும் பொருட்டும், தமிழ்த்திறனை மேம்படுத்தும் வகையிலும் உருவாக்கப்பட்டது.",
    features: [
      { title: "நாளுமொரு கோலம்", desc: "பெண்களின் ஆர்வத்தைத் தூண்டும் கலை ஆர்வ நிகழ்வுகள்." },
      { title: "நாளும் ஒரு புத்தகம்", desc: "நல்ல புத்தகங்களைப் பகிர்ந்து வாசிப்புப் பழக்கத்தை வளர்த்தல்." },
      { title: "நாட்டு நடப்பு", desc: "நாட்டின் முக்கியச் செய்திகளை அறிந்து கொள்ள வழிவகுத்தல்." }
    ],
    banner: "/images/activities/magalir-masi.png",
    events: [],
    themeColor: "text-pink-600"
  },
  {
    slug: "kural",
    title: "வாகை குறள் மன்றம்",
    logo: "/images/clubs/4.png",
    description: "திருக்குறள் வழி வாழ்க்கை விழுமியம்",
    objective: "'வாகை குறள் மன்றம்' என்பது திருக்குறளின் அறிவையும், அது உணர்த்தும் வாழ்வியல் விழுமியங்களையும் மாணவர்களிடையே கொண்டுசேர்ப்பதை நோக்கமாகக் கொண்டதாகும்.",
    features: [
      { title: "வாழ்வியல் விழுமியங்கள்", desc: "திருக்குறள் உணர்த்தும் வாழ்வியல் நெறிகளைப் பயிற்றுவித்தல்." },
      { title: "வெற்றிக்கு வழி", desc: "திருக்குறளின் வழியில் நின்று வாழ்வில் வெற்றிபெற உதவுதல்." },
      { title: "மாணவர் பங்களிப்பு", desc: "மாணவர்களிடையே திருக்குறள் சிந்தனைகளை ஆழமாகப் பதிய வைத்தல்." }
    ],
    banner: "/images/activities/chithirai.png",
    events: [],
    themeColor: "text-orange-600"
  },
  {
    slug: "manavar",
    title: "வாகை மாணாக்கர் மன்றம்",
    logo: "/images/clubs/5.jpg",
    description: "மாணவர்களின் தலைமை மற்றும் திறன் வளர்ச்சி",
    objective: "கல்லூரி மாணாக்கர்களிடமுள்ள தனித்துவமான திறமைகளையும், ஆர்வங்களையும் கண்டறிந்து, அவற்றை ஊக்குவித்தல் மற்றும் பேச்சுத்திறன், தலைமைப் பண்பு, படைப்பாற்றல், சமூகத் தொடர்பு போன்ற மாணவர்களின் பல்வேறு ஆற்றல்களை வளர்ப்பதற்கான பயிற்சிகளை வழங்குதல்.",
    features: [
      { title: "தலைமைப் பண்பு", desc: "மாணவர்களின் தலைமைத்துவ ஆற்றலை வளர்த்தெடுக்கும் பயிற்சிகள்." },
      { title: "படைப்பாற்றல்", desc: "புதிய சிந்தனைகள் மற்றும் படைப்புகளை உருவாக்குவதை ஊக்குவித்தல்." },
      { title: "சமூகத் தொடர்பு", desc: "திறம்பட சமூகத்துடன் தொடர்பு கொள்ளும் திறனை மேம்படுத்துதல்." }
    ],
    banner: "/images/activities/aani.png",
    events: [],
    themeColor: "text-blue-600"
  }
]

export const mandrams = Object.fromEntries(
  mandramsData.map((m) => [m.slug, m])
)
