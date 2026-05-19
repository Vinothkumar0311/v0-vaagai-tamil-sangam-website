export interface Recognition {
  id: string
  name: string
  nameEn: string
  description: string
  registrationNo?: string
  logo?: string
}

export const recognitions: Recognition[] = [
  {
    id: "tn-govt",
    name: "தமிழ்நாடு அரசு",
    nameEn: "Tamil Nadu Government",
    description: "தமிழ்நாட்டு அரசின் - 1975 ஆம் ஆண்டு தமிழ்நாடு சங்கங்கள் பதிவுச்சட்டத்தின் கீழ் (தமிழ்நாடு சட்டம் 27/1975) பதிவு செய்யப்பட்டது. (பதிவு எண்: SRG/நாமக்கல்/143/2022).",
    logo: "/images/tamilnadu.webp"
  },
  {
    id: "msme",
    name: "MSME",
    nameEn: "MSME",
    description: "மத்திய அரசின் நுண்ணிய, சிறு மற்றும் நடுத்தர நிறுவன அமைச்சக தேசிய தொழில் வகைப்பாட்டு புத்தகங்கள் வெளியிடுதல், பிரசுரங்கள், துண்டு பிரசுரங்கள் மற்றும் ஒத்த வெளியீடுகள், கலைக்களஞ்சியங்கள் (CD ROM உட்பட), கல்வி ஆதரவு சேவைகள் மற்றும் பிற படைப்பு கலைகள் மற்றும் பொழுதுபோக்கு நடவடிக்கைகள் திட்டத்தின் கீழ் பதிவு செய்யப்பட்டது (பதிவு எண்: UDYAM-TN-14-0037173).",
    logo: "/images/msme.webp"
  },
  {
    id: "aicte",
    name: "AICTE",
    nameEn: "AICTE",
    description: "அகில இந்திய தொழில்நுட்பக் கல்வி சபையின் (AICTE) பயிற்சி வழங்குநர் (Internship Provider). (பதிவு எண்: CORPORATE63C3E52AAD72D16737827570).",
    logo: "/images/aicte.webp"
  },
  {
    id: "wts",
    name: "உலக தமிழ்ச் சங்கம்",
    nameEn: "World Tamil Sangam",
    description: "மதுரை உலக தமிழ்ச் சங்க அதிகாரப்பூர்வ உறுப்பினர்; கடித நகல் எண் 299 / 2017, நாள் 19.09.2022 (பதிவு எண்: UTS / TN 126).",
    logo: "/images/wto.webp"
  },
  {
    id: "ncs",
    name: "National Career Service",
    nameEn: "National Career Service",
    description: "மத்திய அரசின் தொழிலாளர் மற்றும் வேலைவாய்ப்பு அமைச்சகத்தின் கீழ் செயல்படும் தேசிய தொழில் சேவை திட்டத்தில் திறன் வழங்குநராக பதிவு பெற்றது. (பதிவு எண்: S17L69-1517358106310).",
    logo: "/images/ncs.webp"
  },
  {
    id: "niti",
    name: "NITI Aayog",
    nameEn: "NITI Aayog",
    description: "மத்திய அரசின் நிதி ஆயோக் திட்டத்தின் கீழ் இயங்கி வரும் அரசு சாரா அமைப்புகளின் கண்ணாடி (NGO Darpan) திட்டத்தில் பதிவு செய்யப்பட்டுள்ளது. (பதிவு எண்: TN/2021/0282436)",
    logo: "/images/niti.webp"
  },
  {
    id: "isbn",
    name: "ISBN",
    nameEn: "ISBN",
    description: "ராஜா ராம்மோகன் ராய் தேசிய புத்தக வெளியீட்டு நிறுவனம் (RRRNA for ISBN) புத்தகம் வெளியிடுதல் திட்டத்தில் பதிவு செய்யப்பட்டுள்ளது.",
    logo: "/images/isbn.webp"
  }
]

export const organizationInfo = {
  registrationNote: "தமிழ்நாடு அரசின் சங்கங்கள் சட்டம் 1975 இன் கீழ் பதிவு செய்யப்பட்டது. உலகத் தமிழ்ச்சங்க உறுப்பினர் & இந்திய அரசின் MSME, AICTE Internship, NGO Darpan, NCS, RRRNA for ISBN ஆகியவற்றில் பதிவு செய்யப்பட்டது."
}
