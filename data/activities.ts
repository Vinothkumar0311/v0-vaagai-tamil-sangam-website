export interface Activity {
  id: string
  title: string
  titleEn: string
  description: string
  quote?: string
  quoteAuthor?: string
  theme: 'teal' | 'gold' | 'cream'
}

export const activities: Activity[] = [
  {
    id: "margazhi-masi",
    title: "மகளிர் மாசி",
    titleEn: "Margazhi Masi",
    description: "மங்களையராய் பிறப்பதற்கே நல்ல மாதவம் செய்திடல் வேண்டும்மா என்று கவிமணியின் கூற்றுக்கேற்ப மாதவத்தைச் செய்ய மாதத்திங்கள் நிகழ்வுகள் கொண்டாப்படுகின்றன.",
    quote: "மங்களையராய் பிறப்பதற்கே நல்ல மாதவம் செய்திடல் வேண்டும்மா",
    theme: "teal"
  },
  {
    id: "seermigu-chithirai",
    title: "சீர்மிகு சித்திரை",
    titleEn: "Seermigu Chithirai",
    description: "இருந்தமிழே உன்னால் இருந்தேன் – இளமையோர் விருந்தமிழ்தம் என்றாலும் வேண்டேன்... (தமிழ்விடு தூது) என்று புலவர்முதல் புன்சிரார்வரை ஒவ்வொரு தமிழரும் வியந்து போற்றும் அன்னைத் தமிழைக் கொண்டாடும் அழகிய திங்கள் சித்திரை.",
    quote: "இருந்தமிழே உன்னால் இருந்தேன் – இளமையோர் விருந்தமிழ்தம் என்றாலும் வேண்டேன்",
    quoteAuthor: "தமிழ்விடு தூது",
    theme: "gold"
  },
  {
    id: "agamagizh-aani",
    title: "அகமகிழ் ஆனி",
    titleEn: "Agamagizh Aani",
    description: "மழலையில் கல் என்றார் இன்றைப் ஞுதாடி, பசுமைத்து ஆனி போல் என்பது பழமொழி. சிறுவத்திலேயே சேதமிழின் களைகளாமும் கவின்களையும் மொழித்திறன்களையும் விற்றும் வளர்ச்சிக்கு வாகை சங்க, தமிழ் பேச, ஓரினிய முகலிய போட்டிகளை நடத்தி பழையவெறி மகிழார்.",
    theme: "cream"
  }
]

export const competitionPoem = {
  lines: [
    "கூட்டிக் களைக்களனி கொள்ள முழுதனும் கொண்புடனே",
    "நீட்டம் முகத்துவன் நேரும் ஒருதனிப் போட்டியையிப்போல்",
    "நாட்டம் களைத்தமிழ் நன்கு தெரிநற நாட்டிலும்பால்",
    "போட்டி விருதுகள் புல்லும் பரிசுடன் வாகையிலே!"
  ],
  author: "கட்டளைக் கலித்துறை"
}

export const eventSlides = [
  {
    id: 1,
    title: "வாகை தமிழ்ச்சங்கம் பட்டமளிப்பு விழா",
    titleEn: "Vaagai Tamilsangam Graduation Ceremony",
    image: "/images/events/graduation.jpg"
  },
  {
    id: 2,
    title: "தமிழ் விழா",
    titleEn: "Tamil Festival",
    image: "/images/events/festival.jpg"
  },
  {
    id: 3,
    title: "கலை நிகழ்ச்சிகள்",
    titleEn: "Cultural Events",
    image: "/images/events/cultural.jpg"
  }
]
