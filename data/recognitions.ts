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
    description: "தமிழ்நாட்டு அரசின் - 1975ஆம் ஆண்டு தமிழ்நாடு சங்கங்கள் பதிவுச்சட்டத்தின் கீழ் (தமிழ்நாடு சட்டம் 27/1975) பதிவு செய்யப்பட்டது.",
    registrationNo: "SRG/நாமக்கல்/143/2022",
    logo: "/images/logos/tn-govt.png"
  },
  {
    id: "msme",
    name: "MSME",
    nameEn: "MSME",
    description: "மத்திய அரசின் நுண்ணிய, சிறு மற்றும் நடுத்தர நிறுவன அமைச்சக தேசிய தொழில் வகைப்படு பத்தசங்கள் வெளியீடுகள், பிரசுரங்கள், துண்டு பிரசுரங்கள் மற்றும் ஒத்த வெளியீடுகள், களைக்கலை/கசியங்கள் (CD ROM உட்பட), கல்வி ஆதரவு சேவைகள் மற்றும் பிற படைப்பு கலைகள் மற்றும் பொழுதுபோக்கு நடவடிக்கைகள் திட்டத்தின் கீழ் பதிவு செய்யப்பட்டது.",
    registrationNo: "UDYAM-TN-14-0037173",
    logo: "/images/logos/msme.png"
  },
  {
    id: "aicte",
    name: "AICTE",
    nameEn: "AICTE",
    description: "அகில இந்திய தொழில்நுட்பக் கல்வி சபையின் (AICTE) பயிற்சி வழங்குநர் (Internship Provider) பதிவு.",
    registrationNo: "CORPORATE63C3E52AAD72D16737827570",
    logo: "/images/logos/aicte.png"
  }
]

export const organizationInfo = {
  registrationNote: "தமிழ்நாடு அரசின் சங்கங்கள் சட்டம் 1975 இன் கீழ் பதிவு செய்யப்பட்டது. உலகத் தமிழ்ச்சங்க உறுப்பினர் & இந்திய அரசின் MSME, AICTE Internship, NGO Darpan, NCS, RRRNA for ISBN ஆகியவற்றில் பதிவு செய்யப்பட்டது."
}
