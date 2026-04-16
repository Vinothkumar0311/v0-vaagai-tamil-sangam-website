import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Users, ScrollText, Archive, Target, CheckCircle2 } from "lucide-react"
import { ArchivesSection } from "@/components/publications/archives-section"

export const metadata: Metadata = {
  title: "வெளியீடுகள்",
  description: "வாகை தமிழ்ச்சங்கத்தின் ஆய்வு வெளியீடுகள் மற்றும் ஆவணங்கள்",
}

const publicationCategories = [
  {
    id: "aim",
    title: "AIM",
    titleEn: "Aim",
    description: "வாகை தமிழ்ச்சங்கத்தின் நோக்கங்கள் மற்றும் குறிக்கோள்கள்",
    icon: Target,
  },
  {
    id: "about",
    title: "About - Vaagai Tamilsangam",
    titleEn: "About",
    description: "வாகை தமிழ்ச்சங்கம் பற்றிய விரிவான தகவல்கள்",
    icon: BookOpen,
  },
  {
    id: "research",
    title: "Research Themes",
    titleEn: "Research Themes",
    description: "ஆய்வு கருத்துக்கள் மற்றும் ஆராய்ச்சி விஷயங்கள்",
    icon: FileText,
  },
  {
    id: "guidelines",
    title: "Guidelines",
    titleEn: "Guidelines",
    description: "வழிகாட்டுதல்கள் மற்றும் நெறிமுறைகள்",
    icon: ScrollText,
  },
  {
    id: "editorial",
    title: "Editorial Board",
    titleEn: "Editorial Board",
    description: "ஆசிரியர் குழு உறுப்பினர்கள்",
    icon: Users,
  },
  {
    id: "archives",
    title: "Archives",
    titleEn: "Archives",
    description: "பழைய வெளியீடுகள் மற்றும் ஆவணங்கள்",
    icon: Archive,
  },
]

const aboutDetails = [
  { label: "Title", value: "Vaagai Tamilsangam" },
  { label: "Name of the Publisher", value: "Vaagai Tamilsangam" },
  { label: "Subject", value: "Education" },
  { label: "Chief Editor", value: "Mr. M. Manojkumar" },
  { label: "Starting Year", value: "2025" },
  { label: "Frequency of Publication", value: "Quarterly" },
  { label: "Format of this publication", value: "Online" },
  { label: "Address for Communication", value: "12 / 153 A 1, Athanur North, Athanur, Rasipuram, Namakkal, TamilNadu, Pin: 636301" },
  { label: "Contact Number", value: "+91 8248272880" },
  { label: "Email Address", value: "info@vaagaitamilsangam.com, vaagaitamilsangam@gmail.com" },
]

const guidelinesList = [
  {
    tamil: "கட்டுரைகள் முதன்மை ஆசிரியரின் மதிப்பீடு, ஒப்புதல் பெற்ற பின்னர் வெளியிடப்படும். முதன்மை ஆசிரியரின் முடிவே இறுதியானது. தமிழ் மற்றும் ஆங்கிலம் ஆகிய இருமொழிகளிலும் கட்டுரைகள் அமையலாம்.",
    english: "Articles will be published after the evaluation and approval of the editorial team. The decision of the team is final. Articles can be in both Tamil and English."
  },
  {
    tamil: "கட்டுரையின் தலைப்பின் கீழ் கட்டுரையாளரின் பெயர், பணி, பணியிட முகவரி, மின்னஞ்சல் முகவரி, மற்றும் அலைபேசி எண் ஆகியவை சரியான முறையில் பிழைகள் இன்றி இருத்தல் வேண்டும்.",
    english: "The name of the author, job / designation title, work address, email address, and mobile number should be correct and without errors under the title of the article."
  },
  {
    tamil: "ஆய்வுக்கட்டுரை A4 தாளில், ஏரியல் யுனிகோடு (Arial Unicode) எழுத்துருவில், 12 எழுத்துரு அளவில், 1.5 இடைவெளியுடன் ஐந்து பக்கங்கள் முதல் ஏழு பக்கங்களுக்குள் doc. வடிவில் இருக்க வேண்டும். pdf வடிவில் இருக்கக் கூடாது.",
    english: "The research article should be in A4 paper, Arial Unicode font, 12 font size, 1.5 spacing, and within five to seven pages in doc. / .dox format. It should not be in pdf format."
  },
  {
    tamil: "ஆய்வுக்கட்டுரை கட்டுரைத் தலைப்பு, ஆய்வுச் சுருக்கம், திறவுச் சொற்கள், முன்னுரை, ஆய்வு அணுகுமுறை, உட்தலைப்புகள், முடிவுரை என்று அமைய வேண்டும். கட்டுரையில் இடம் பெறும் மேற்கோள் கட்டுரையின் உட்பகுதியிலேயே இடம் பெற வேண்டும்.",
    english: "The research article should consist of the article title, research abstract, keywords, introduction, research approach, subheadings, and conclusion. The citation included in the article should be included in the body of the article."
  },
  {
    tamil: "சமர்ப்பிக்கப்படும் ஆய்வேடுகள் தனியுரிமைக்கொள்களுக்குட்பட்டிருப்பின் மட்டுமே தொகுக்கப்பட்டு வாகை தமிழ்ச்சங்கத்தால் வெளியிடப்படும். கட்டுரைகள் வேறு எந்தவொரு ஆய்விதழிலோ, பத்திரிக்கையிலோ ஏற்கனவே பிரசுரிக்கப்பட்டதாக இருத்தல் கூடாது. கருத்துகள் உண்மைத்தன்மையுடன் இருத்தல் அவசியம். வேறு கட்டுரைகளில் இருந்து எடுக்கப்படாததாகவும், கருத்து ஒற்றுமை (Plagiarism) இன்றியும் இருக்க வேண்டும்.",
    english: "The submitted research papers will be compiled and published by the Vaagai Tamilsangam only if they are within the privacy policy. The articles should not have been previously published in any other journal or magazine. Comments must be truthful. They must not be taken from other articles and must be free of plagiarism."
  },
  {
    tamil: "ஆய்வுக்கட்டுரைகளுக்குப் பயன்படுத்தப்படும் நூல்கள், இதழ்கள், மற்றும் இணையதள தரவுகள் போன்றவை துணைநூற்பட்டியலில் அகர வரிசையில் அமைந்திருக்க வேண்டும். கட்டுரையில் கொடுக்கப்பட்டிருக்கிற மேற்கோள்களுக்கான துணைநூல் பட்டியல் பொருத்தமானதாக இருக்க வேண்டும்.",
    english: "Books, journals, and website data used for research articles must be listed alphabetically in the bibliography. The bibliography for the citations given in the article must be appropriate."
  },
  {
    tamil: "ஆய்வாளர்கள் எழுதி அனுப்பும் ஆய்வுக்கட்டுரைகள் தம் சொந்தப் படைப்பாக இருக்க வேண்டும். இணையத்தில் உள்ள செய்திகளை அப்படியே வெட்டி ஒட்டுதல் கூடாது. கருத்துத் திருட்டு இருக்கும் கட்டுரைகள் நிராகரிக்கப்படும். ஆய்வுக்கட்டுரை செயலாக்கக் கட்டணம் மற்றும் சான்றிதழ் கட்டணம் ( அஞ்சல் செலவினம் உட்பட ) ரூபாய் 1050 செலுத்த வேண்டும்.",
    english: "Research papers written and submitted by researchers must be their own work. They should not be cut and pasted from the internet. Articles containing plagiarism will be rejected. A research paper processing fee and certificate fee (including postage) of Rs. 1050 must be paid."
  },
  {
    tamil: "கட்டுரையில் முக்கியமாக ஆய்வுச்சுருக்கம், ஆறு முதன்மைச் சொற்கள், முடிவுரை இருத்தல் அவசியம். கட்டுரைகள் தட்டச்சுப் பிழை, இலக்கணப் பிழை இன்றி அமைதல் வேண்டும். கட்டுரையாளர்கள் தங்கள் கட்டுரைகளை info@vaagaitamilsangam.com அல்லது vaagaitamilsangam@gmail.com என்ற மின்னஞ்சல் மூலம் அனுப்பலாம்.",
    english: "The article must mainly contain a research abstract, six main words, and a conclusion. Articles must be free of typos and grammatical errors. Authors can send their articles by email to info@vaagaitamilsangam.com or vaagaitamilsangam@gmail.com"
  }
]

const advisoryBoard = [
  {
    name: "முனைவர். சீ.வசந்தி",
    nameEn: "Dr. C. Vasanthi",
    role: "கண்காணிப்பாளர் மற்றும் / ஆணையாளர் (பொ) & (ப.நி.), தொல்லியல் துறை",
    roleEn: "Commissioner & Superintendent (i/c.) & (P.O.), Department of Archaeology",
    institution: "தமிழ்நாடு அரசு, சென்னை.",
    institutionEn: "Government of Tamil Nadu, Chennai.",
  },
  {
    name: "முனைவர். சி.தியாகராஜன்",
    nameEn: "Dr. C. Thiyagarajan",
    role: "பதிவாளர் (பொ)",
    roleEn: "Professor",
    link: "https://www.tamiluniversity.ac.in/english/wp-content/uploads/2018/07/Resume-format-HOD.pdf",
    institution: "தமிழ்ப் பல்கலைக்கழகம், தஞ்சாவூர்.",
    institutionEn: "Tamil University, Thanjavur",
  }
];

const chiefEditor = [
  {
    name: "திரு. மா.மனோஜ்குமார்",
    nameEn: "Mr. M. Manojkumar",
    role: "நிறுவனர் & தலைவர்",
    roleEn: "Founder & Chairman",
    email: "publication@vaagaitamilsangam.com",
    vidwanId: "652599",
    institution: "வாகை தமிழ்ச்சங்கம், நாமக்கல்",
    institutionEn: "Vaagai Tamilsangam, Namakkal",
  }
];

const editorialBoardMembers = [
  {
    name: "முனைவர். ச.சத்தியா",
    nameEn: "Dr. S. Sathiya",
    role: "தமிழ்த்துறை தலைவர்",
    roleEn: "Head of the Department / Tamil",
    link: "https://www.bonsecourscollege.edu.in/faculty.php",
    email: "tamil@bonsecourscollege.edu.in",
    vidwanId: "652596",
    institution: "பான் செக்கர்ஸ் மகளிர் கல்லூரி, தஞ்சாவூர்.",
    institutionEn: "Bon Secours Women's College, Thanjavur",
  },
  {
    name: "முனைவர். ம.கவிதா",
    nameEn: "Dr. M. Kavitha",
    role: "தமிழ்த்துறைதலைவர்",
    roleEn: "Head of the Department / Tamil",
    link: "https://vidwan.inflibnet.ac.in/profile/206170",
    email: "headtamil@vicas.org",
    vidwanId: "206170",
    institution: "விவேகானந்தா கலை & அறிவியல் மகளிர் கல்லூரி, திருச்செங்கோடு.",
    institutionEn: "Vivekanandha College of Arts and Science for Women, Elayampalayam.",
  },
  {
    name: "தமிழ்மிகு. மு.இராமலட்சுமி",
    nameEn: "Mrs. M. Ramalakshmi",
    role: "இடைநிலை ஆசிரியர்",
    roleEn: "Intermediate Teacher",
    email: "info@vaagaitamilsangam.com",
    vidwanId: "652598",
    institution: "ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, செல்லணக்கவுண்டன்பட்டி, மதுரை.",
    institutionEn: "Panchayat Union Primary School, Konnapatti, Madurai",
  },
  {
    name: "திரு. அ.கார்த்திகேயன்",
    nameEn: "Mr. A. Karthikeyan",
    role: "பொறுப்பாளர், ஆராய்ச்சி மற்றும் மேம்பாட்டுத்துறை",
    roleEn: "Chief Coordinator, Research and Development Department",
    email: "rd@vaagaitamilsangam.com",
    vidwanId: "652655",
    institution: "வாகை தமிழ்ச்சங்கம், நாமக்கல்",
    institutionEn: "Vaagai Tamilsangam, Namakkal",
  },
  {
    name: "திரு. நா.கனகராஜ்",
    nameEn: "Mr. N. Kanagaraj",
    role: "முதுநிலைப் பள்ளித் தமிழாசிரியர்",
    roleEn: "High School Tamil Teacher",
    email: "kanagarajn1999@gmail.com",
    institution: "பசும்பொன் தேவர் மேல்நிலைப் பள்ளி, மம்சபுரம், விருதுநகர் மாவட்டம்.",
    institutionEn: "Pasumpon Thevar Higher Secondary School Mamsapuram, Virudhunagar.",
  },
  {
    name: "தமிழ்மிகு. கா.விசயநரசிம்மன்",
    nameEn: "Mr. K. Vijayanarasimhan",
    role: "துணைப்பேராசிரியர் / இயற்பியல், மாந்தவியல் & அறிவியல் துறை",
    roleEn: "Assistant Professor in Department of Physics",
    email: "vijayanarasimhan.k@rajalakshmi.edu.in",
    vidwanId: "652605",
    institution: "ராஜலட்சுமி பொறியியல் கல்லூரி (தன்னாட்சி), தண்டலம், சென்னை.",
    institutionEn: "Rajalakshmi College of Engineering (Autonomous), Thandalam, Chennai.",
  },
  {
    name: "முனைவர். ஜெ.புவனேஸ்வரி",
    nameEn: "Dr. J. Bhuvaneswari",
    role: "உதவிப்பேராசிரியர், தமிழாய்வுத்துறை",
    roleEn: "Assistant Professor, Department of Tamil Studies",
    link: "https://vidwan.inflibnet.ac.in/profile/166740",
    email: "buvi1727@nct.ac.in",
    vidwanId: "166740",
    institution: "தேசியக்கல்லூரி (தன்னாட்சி), திருச்சி.",
    institutionEn: "National College (Autonomous), Trichy.",
  },
  {
    name: "முனைவர். ந. ஹேம மாலினி",
    nameEn: "Dr. N. Hema Malini",
    role: "உதவிப்பேராசிரியர் & ஆராய்ச்சி ஒருங்கிணைப்பாளர் / ஆங்கிலத்துறை",
    roleEn: "Assistant Professor & Research Coordinator / Department of English",
    link: "https://vidwan.inflibnet.ac.in/profile/183251",
    email: "hemamalini@mkjc.in",
    vidwanId: "183251",
    institution: "மருதர் கேசரி ஜெயின் மகளிர் கல்லூரி, வாணியம்பாடி",
    institutionEn: "Marudhar Kesari Jain College for Women, Vaniyambadi.",
  },
  {
    name: "முனைவர் சு.பலராமன்",
    nameEn: "Dr. S. Balaraman",
    role: "தமிழ் உதவிப் பேராசிரியர்",
    roleEn: "Assistant Professor of Tamil",
    link: "https://fsh.srmrmp.edu.in/wp-content/uploads/2025/07/faculty-balaraman-tamil.pdf",
    email: "balarams@srmist.edu.in",
    vidwanId: "491010",
    institution: "எஸ்.ஆர்.எம் அறிவியல் மற்றும் மானுடவியல் புலம், இராமாபுரம், சென்னை",
    institutionEn: "SRM Faculty of Science and Humanities, Ramapuram, Chennai - 089.",
  },
  {
    name: "திருமதி. செ. செண்பகவடிவு",
    nameEn: "Mrs. S. Senbhagavadivu",
    role: "உதவிப் பேராசிரியர், தகவல் தொழில்நுட்பத்துறை",
    roleEn: "Assistant Professor, Department of Information Technology",
    link: "https://srmvalliammai.irins.org/profile/328067",
    email: "shenbagavadivus.it@srmvalliammai.ac.in",
    vidwanId: "328067",
    institution: "உறுப்பினர், பாரிவேந்தர் மாணவர் தமிழ்மன்றம் எஸ். ஆர். எம். வள்ளியம்மை பொறியியல் கல்லூரி, காட்டாங்குளத்தூர்.",
    institutionEn: "Member, Parivendar Student Tamil Mandram S. R. M. Valliammai College of Engineering, Kattankulathur.",
  },
  {
    name: "முனைவர். த. தமிழ்ச்செல்வம்",
    nameEn: "Dr. D. Tamilselvam",
    role: "உதவிப்பேராசிரியர் (கணினி அறிவியல்)",
    roleEn: "Assistant Professor (Computer Science)",
    link: "https://rgasc.edu.in/admin/images/pdf/98051_Faculty_Profile_Thamiz%20selvam.pdf",
    institution: "இராஜீவ் காந்தி கலை மற்றும் அறிவியல் கல்லூரி, புதுவை",
    institutionEn: "Rajiv Gandhi College of Arts and Sciences, Puducherry",
  },
  {
    name: "முனைவர் ப. விக்னேஸ்வரி",
    nameEn: "Dr. P. Vigneshwari",
    role: "இணைப் பேராசிரியர் / தமிழ்த்துறை",
    roleEn: "Associate Professor / Department of Tamilnadu",
    link: "https://vidwan.inflibnet.ac.in/profile/334879",
    vidwanId: "334879",
    institution: "நேரு கலை மற்றும் அறிவியல் கல்லூரி கோயம்புத்தூர்.",
    institutionEn: "Nehru College of Arts and Science Coimbatore, Nehru Gardens, Thirumalayampalayam, Coimbatore 641105.",
  }
]

export default function PublicationsPage() {
  return (
    <PageShell>
      <PageHeader
        title="வெளியீடுகள்"
        description="வாகை தமிழ்ச்சங்கத்தின் ஆய்வு வெளியீடுகள், ஆவணங்கள் மற்றும் வழிகாட்டுதல்கள்"
      />

        {/* Publication Categories Links */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicationCategories.map((category) => {
                const Icon = category.icon
                return (
                  <a href={`#${category.id}`} key={category.id} className="block group">
                    <Card className="h-full border shadow-md hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-primary mb-1">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 pb-24 space-y-24">
          
          {/* AIM Section */}
          <section id="aim" className="scroll-mt-32 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 border-b pb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">நோக்கம் (AIM)</h2>
            </div>
            <div className="bg-cream/30 p-8 rounded-2xl border border-primary/10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  'கல் தோன்றி மண் தோன்றாக் காலத்தே வாளொடு முன் தோன்றிய மூத்தகுடி' தமிழர்களின் வாழ்க்கையோடு இயைந்து வாழ்வியல் மேம்பாட்டிற்கு அடிப்படையாகத் திகழும் தமிழ்மொழி, கால மாற்றத்திற்கேற்ப நாகரிகமும் பண்பாடும் அடைந்து காணப்படுகிறது. உலக அறிஞர்கள் தமிழர்களின் தமிழ்மொழியை வியந்தது மட்டுமின்றி அதன் தொன்மையை ஆராய்ந்து கொண்டே இருக்கிறார்கள். அவர்கள் ஆய்வின்படி இலக்கியங்களே தமிழ்மொழியின் வெளிப்பாடுகளாக அமைகின்றன. பன்னாட்டு அளவில் இன்று புலம் பெயர்ந்த தமிழர்கள் தாம் வாழ்கின்ற சூழலில் தங்கள் பண்பாட்டையும் நாகரிகத்தையும் பாதுகாத்து வருகிறார்கள். செம்மொழியாக தமிழ் உயர்ந்து நிற்பதற்கு முக்கிய காரணம் அதன் தொன்மைத் தன்மையே ஆகும். தமிழினம், தமிழ்மொழி, தமிழ் இலக்கியங்கள் ஆகிய அனைத்தும் மிகத் தொன்மை வாய்ந்தவை. தமிழின் தொன்மையை தமிழ் இலக்கியங்களும் அதன் வழி நாம் அறிந்து கொண்ட மூவேந்தர் வரலாறும் உணர்த்தும். இத்தகைய தொல் சிறப்பு வாய்ந்த தமிழ் மொழியை தொன்மைக் காலம் முதல் இந்த தொழில்நுட்பக் காலம் வரை நாம் எத்தனை கொண்டாடினாலும் அதன் புகழுக்கு அத்தனை ஈடாகாது. எதிர்கால தலைமுறையினருக்கு தமிழ்மொழியின் சிறப்புகள் மற்றும் தமிழர்களின் பண்பாட்டு விழுமியங்களை ஆவணப்படுத்துதல் இச்செயல்பாட்டின் நோக்கமாகும்.
                </p>
                <div className="h-px bg-primary/20 w-full my-6"></div>
                <p>
                  'When the stone appeared and the soil did not appear, the sword appeared first' The Tamil language, which is the basis for the development of the lifestyle of the Tamils, has become civilized and cultured with the change of time. World scholars have not only admired the Tamil language of the Tamils but also continue to research its antiquity. According to their research, literature is the expression of the Tamil language. Today, Tamils who have migrated internationally are preserving their culture and civilization in the environment in which they live. The main reason for Tamil's rise as a classical language is its antiquity. The Tamil people, the Tamil language, and Tamil literature are all very ancient. The antiquity of Tamil is conveyed by Tamil literature and the history of the Three Kingdoms that we have learned through it. No matter how much we celebrate such a unique Tamil language from ancient times to this technological age, its glory cannot be compared to it. The aim of this activity is to document the specialties of the Tamil language and the cultural values of the Tamils for future generations.
                </p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-32 max-w-5xl mx-auto">
             <div className="flex items-center gap-4 mb-8 border-b pb-4">
               <BookOpen className="w-8 h-8 text-primary" />
               <h2 className="text-3xl font-bold text-primary">About - Vaagai Tamilsangam</h2>
             </div>
             <div className="mb-8 space-y-2 p-6 bg-primary/5 rounded-xl border border-primary/10">
               <p className="text-xl font-semibold text-foreground">பன்னாட்டு அளவில் சிந்தனை மற்றும் ஆராய்ச்சிகளை மேற்கொள்ளும் வாகை தமிழ்ச்சங்கத்தின் ஒரு முயற்சி.</p>
               <p className="text-lg text-muted-foreground">A platform for global intellectual and research pursuits - An Initiative of Vaagai Tamilsangam.</p>
             </div>
             
             <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
               <div className="flex flex-col">
                 {aboutDetails.map((detail, idx) => (
                   <div key={idx} className="flex flex-col sm:flex-row border-b last:border-0 hover:bg-muted/30 transition-colors">
                     <div className="sm:w-1/3 p-4 font-semibold text-foreground bg-muted/10 border-r border-border/50">
                       {detail.label}
                     </div>
                     <div className="p-4 text-muted-foreground sm:w-2/3 break-words">
                       {detail.value}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* Research Section */}
          <section id="research" className="scroll-mt-32 max-w-5xl mx-auto">
             <div className="flex items-center gap-4 mb-8 border-b pb-4">
               <FileText className="w-8 h-8 text-primary" />
               <h2 className="text-3xl font-bold text-primary">ஆய்வுப் பொருண்மைகள் (Research Themes)</h2>
             </div>
             <div className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 border shadow-sm">
               <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                 இலக்கணங்கள் தொல்காப்பியம், இறையனார் அகப்பொருள், இலக்கண விளக்கம், நம்பியகப் பொருள், யாப்பருங்கலக் காரிகை, தமிழ்மொழியின் சிறப்புகள், தமிழ்மொழியின் உரைநடை, காப்பியங்கள், சிற்றிலக்கியங்கள், பன்னிரு திருமுறைகள், நாலாயிர திவ்வியப் பிரபந்தம், இதிகாச புராணங்கள், சித்தர் இலக்கியங்கள், சித்த மருத்துவம், இயற்கை மருத்துவம், உணவு முறைகள், திணை இலக்கியம், தற்கால இலக்கியம், உரையாசிரியர்கள், இலக்கண நூல் தொகுப்பு, நாட்டுப்புற இலக்கியங்கள், கல்வெட்டுகள், வழக்காறுகள், மறைந்துபோன, மறைந்துகொண்டும், மறைந்துகொண்டு இருக்கும் அனைத்து கலைகளும் மீட்டுருவாக்கம் செய்வது, இன்றைய தேவைகள், நாளைய தேவைகள் பற்றிய சிந்தனைகள் போன்ற பல பன்முகப் பார்வை கொண்ட தலைப்புகள் மற்றும் கருத்தரங்கத் தலைப்பையொட்டித் தாங்கள் விரும்பும் எந்தத் தலைப்பிலும் தமிழ் மற்றும் ஆங்கிலம் ஆகிய இருமொழிகளிலும் கட்டுரைகள் அமையலாம்.
               </p>
             </div>
          </section>

          {/* Guidelines Section */}
          <section id="guidelines" className="scroll-mt-32 max-w-5xl mx-auto">
             <div className="flex items-center gap-4 mb-8 border-b pb-4">
               <ScrollText className="w-8 h-8 text-primary" />
               <h2 className="text-3xl font-bold text-primary">ஆய்வுக் கட்டுரை நெறிமுறைகள் (Guidelines)</h2>
             </div>
             <div className="space-y-6">
               {guidelinesList.map((guideline, index) => (
                 <div key={index} className="flex gap-6 p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow">
                   <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                     {index + 1}
                   </div>
                   <div className="space-y-3 flex-grow">
                     <p className="text-lg font-medium text-foreground leading-relaxed">{guideline.tamil}</p>
                     <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-4">{guideline.english}</p>
                   </div>
                 </div>
               ))}
             </div>
          </section>

          <section id="editorial" className="scroll-mt-32 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-sm" style={{ backgroundColor: '#1d3f4a' }}>
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-2">
                <Users className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold text-red-500">ஆசிரியர் குழு ( Editorial Board )</h2>
              </div>
              <div className="mb-12">
                <p className="text-lg text-white/80">பொருண்மை: கல்வி</p>
                <p className="text-lg text-white/80">Subject: Education</p>
              </div>

              {/* Advisory Board */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8">ஆலோசனைக் குழு (Advisory Board)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {advisoryBoard.map((member, idx) => (
                    <div key={idx} className="bg-white text-slate-800 rounded-lg overflow-hidden flex flex-col h-full">
                      <div className="aspect-[4/3] bg-emerald-100/50 flex items-center justify-center p-6 border-b">
                        <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                          <Users className="w-12 h-12 text-slate-400" />
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col gap-4 text-sm">
                        <div>
                          <p className="font-bold text-lg text-slate-900 leading-tight mb-1">{member.name}</p>
                          <p className="text-slate-700 leading-relaxed">{member.role}</p>
                          <p className="text-slate-500 italic mt-2">{member.nameEn}, {member.roleEn}</p>
                        </div>
                        {member.link && (
                          <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all text-xs">
                            {member.link.length > 40 ? member.link.substring(0, 40) + '...' : member.link}
                          </a>
                        )}
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <p className="text-slate-700">{member.institution}</p>
                          <p className="text-slate-500 italic text-xs mt-1">{member.institutionEn}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chief Editor */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8">முதன்மை ஆசிரியர் (Chief Editor)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {chiefEditor.map((member, idx) => (
                    <div key={idx} className="bg-white text-slate-800 rounded-lg overflow-hidden flex flex-col h-full">
                      <div className="aspect-[4/3] bg-indigo-50 flex items-center justify-center p-6 border-b">
                        <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                          <Users className="w-12 h-12 text-slate-400" />
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col gap-4 text-sm">
                        <div>
                          <p className="font-bold text-lg text-slate-900 leading-tight mb-1">{member.name}</p>
                          <p className="text-slate-700 font-medium">{member.role}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-800 break-all">{member.email}</p>
                          <p className="text-slate-800 font-medium whitespace-nowrap">Vidwan-ID : {member.vidwanId}</p>
                        </div>
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <p className="text-slate-700">{member.institution}</p>
                          <p className="text-slate-500 italic text-xs mt-1">{member.nameEn} {member.roleEn} {member.institutionEn}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Board Members */}
              <div>
                <h3 className="text-2xl font-bold mb-8">ஆசிரியர் குழு ( Editorial Board )</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {editorialBoardMembers.map((member, idx) => (
                    <div key={idx} className="bg-white text-slate-800 rounded-lg overflow-hidden flex flex-col h-full">
                      <div className="aspect-[4/3] bg-blue-50/50 flex items-center justify-center p-6 border-b">
                        <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                          <Users className="w-12 h-12 text-slate-400" />
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col gap-4 text-sm">
                        <div>
                          <p className="font-bold text-lg text-slate-900 leading-tight mb-1">{member.name}</p>
                          <p className="text-slate-700">{member.role}</p>
                        </div>
                        <div className="space-y-2">
                          {member.link && (
                            <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block break-all text-xs mb-2">
                              {member.link.length > 40 ? member.link.substring(0, 40) + '...' : member.link}
                            </a>
                          )}
                          <p className="text-slate-800 break-all">{member.email}</p>
                          {member.vidwanId && (
                            <p className="text-slate-800 font-medium">Vidwan-ID : {member.vidwanId}</p>
                          )}
                        </div>
                        <div className="mt-auto pt-4 border-t border-slate-100">
                          <p className="text-slate-700">{member.institution}</p>
                          <p className="text-slate-500 italic text-xs mt-2">{member.nameEn}, {member.roleEn}, {member.institutionEn}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          <ArchivesSection />
        </div>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ஆய்வுக் கட்டுரைகளை சமர்ப்பிக்க
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              தமிழ் மொழி, இலக்கியம், பண்பாடு சார்ந்த உங்கள் ஆய்வுக் கட்டுரைகளை 
              வாகை தமிழ்ச்சங்கத்தின் வெளியீடுகளில் பிரசுரிக்க விரும்பினால் எங்களை தொடர்புகொள்ளுங்கள்.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:publications@vaagaitamilsangam.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                கட்டுரை சமர்ப்பிக்க
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                தொடர்புக்கு
              </a>
            </div>
          </div>
        </section>
    </PageShell>
  )
}
