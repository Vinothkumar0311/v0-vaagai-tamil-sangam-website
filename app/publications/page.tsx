import type { Metadata } from "next"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Users, ScrollText, Archive, Target, CheckCircle2, Award } from "lucide-react"
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
    id: "peer-reviewed",
    title: "Peer Reviewed Journal",
    titleEn: "Peer Reviewed Journal",
    description: "ஆய்வுக்கட்டுரைகளின் தரம் மற்றும் சக மதிப்பாய்வு முறை",
    icon: Award,
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
  }
];

const advisoryBoard = [
  {
    // img: "/Staff_Photo/dr_c_vasanthi_1.png",
    name: "முனைவர். சீ.வசந்தி",
    nameEn: "Dr. C. Vasanthi",
    role: "கண்காணிப்பாளர் மற்றும் / ஆணையாளர் (பொ) & (ப.நி.), தொல்லியல் துறை",
    roleEn: "Commissioner & Superintendent (i/c.) & (P.O.), Department of Archaeology",
    institution: "தமிழ்நாடு அரசு, சென்னை.",
    institutionEn: "Government of Tamil Nadu, Chennai",
  },
  {
    // img: "/Staff_Photo/dr_c_thiyagarajan_professor_2.png",
    name: "முனைவர். சி.தியாகராஜன்",
    nameEn: "Dr. C. Thiyagarajan",
    role: "பதிவாளர் (பொ)",
    roleEn: "Professor",
    link: "https://www.tamiluniversity.ac.in/english/wp-content/uploads/2018/07/Resume-format-HOD.pdf",
    institution: "தமிழ்ப் பல்கலைக்கழகம், தஞ்சாவூர்.",
    institutionEn: "Tamil University, Thanjavur",
  },
  {
    // img: "/Staff_Photo/முனைவர்_சு_3.jpeg",
    name: "முனைவர். சு. கனிமொழி சுகுணா",
    nameEn: "Dr. S. Kanimozhi Suguna",
    role: "உதவிப் பேராசிரியர், கணினி அறிவியல் துறை",
    roleEn: "Assistant Professor, Department of Computer Science",
    institution: "எஸ்.ஆர்.எம். அறிவியல் மற்றும் தொழில்நுட்ப நிறுவனம், ராமாபுரம்",
    institutionEn: "SRM Institute of Science and Technology, Ramapuram",
  }
];

const chiefEditor = [
  {
    // img: "/Staff_Photo/mr_m_manojkumar_founder__5.png",
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
    // img: "/Staff_Photo/dr_s_sathiya_head_of_the_department__7.png",
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
    // img: "/Staff_Photo/dr_m_kavitha_8.jpeg",
    name: "முனைவர். ம.கவிதா",
    nameEn: "Dr. M. Kavitha",
    role: "தமிழ்த்துறைதலைவர்",
    roleEn: "Head of the Department / Tamil",
    link: "https://vidwan.inflibnet.ac.in/profile/206170",
    email: "headtamil@vicas.org",
    vidwanId: "206170",
    institution: "விவேகானந்தா கலை & அறிவியல் மகளிர் கல்லூரி, திருச்செங்கோடு.",
    institutionEn: "Vivekanandha College of Arts and Science for Women, Elayampalayam",
  },
  {
    // img: "/Staff_Photo/dr_v_balasarasuvathi_honorary_lecturer__9.jpeg",
    name: "முனைவர். வெ. பாலசரசுவதி",
    nameEn: "Dr. V. Balasarasuvathi",
    role: "கௌரவ விரிவுரையாளர் / தமிழ்த்துறை",
    roleEn: "Honorary Lecturer / Tamil Department",
    institution: "அரசு கலைக்கல்லூரி, கோவை",
    institutionEn: "Government Arts College, Coimbatore",
  },
  {
    // img: "/Staff_Photo/mrs_m_ramalakshmi_10.png",
    name: "தமிழ்மிகு. மூ.இராமலெட்சுமி",
    nameEn: "Mrs. M. Ramalakshmi",
    role: "இடைநிலை ஆசிரியர்",
    roleEn: "Intermediate Teacher",
    email: "info@vaagaitamilsangam.com",
    vidwanId: "652598",
    institution: "ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, செல்லணக்கவுண்டன்பட்டி, மதுரை.",
    institutionEn: "Panchayat Union Primary School, Konnapatti, Madurai",
  },
  {
    // img: "/Staff_Photo/mr_a_karthikeyan_11.png",
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
    // img: "/Staff_Photo/mr_n_kanagaraj_high_school_tamil_teacher_12.jpeg",
    name: "திரு. நா.கனகராஜ்",
    nameEn: "Mr. N. Kanagaraj",
    role: "முதுநிலைப் பள்ளித் தமிழாசிரியர்",
    roleEn: "High School Tamil Teacher",
    email: "kanagarajn1999@gmail.com",
    institution: "பசும்பொன் தேவர் மேல்நிலைப் பள்ளி, மம்சபுரம், விருதுநகர் மாவட்டம்.",
    institutionEn: "Pasumpon Thevar Higher Secondary School Mamsapuram, Virudhunagar",
  },
  {
    // img: "/Staff_Photo/mr_k_vijayanarasimhan_assistant_professor_in_department_of_physics_13.png",
    name: "தமிழ்மிகு. கா.விசயநரசிம்மன்",
    nameEn: "Mr. K. Vijayanarasimhan",
    role: "துணைப்பேராசிரியர் / இயற்பியல், மாந்தவியல் & அறிவியல் துறை",
    roleEn: "Assistant Professor in Department of Physics",
    email: "vijayanarasimhan.k@rajalakshmi.edu.in",
    vidwanId: "652605",
    institution: "ராஜலட்சுமி பொறியியல் கல்லூரி (தன்னாட்சி), தண்டலம், சென்னை.",
    institutionEn: "Rajalakshmi College of Engineering (Autonomous), Thandalam, Chennai",
  },
  {
    // img: "/Staff_Photo/dr_j_bhuvaneswari_14.png",
    name: "முனைவர். ஜெ.புவனேஸ்வரி",
    nameEn: "Dr. J. Bhuvaneswari",
    role: "உதவிப் பேராசிரியர், தமிழாய்வுத்துறை",
    roleEn: "Assistant Professor, Department of Tamil Studies",
    link: "https://vidwan.inflibnet.ac.in/profile/166740",
    email: "buvi1727@nct.ac.in",
    vidwanId: "166740",
    institution: "தேசியக்கல்லூரி (தன்னாட்சி), திருச்சி.",
    institutionEn: "National College (Autonomous), Trichy",
  },
  {
    // img: "/Staff_Photo/dr_n_hema_malini_15.jpeg",
    name: "முனைவர். ந. ஹேம மாலினி",
    nameEn: "Dr. N. Hema Malini",
    role: "உதவிப் பேராசிரியர் & ஆராய்ச்சி ஒருங்கிணைப்பாளர் / ஆங்கிலத்துறை",
    roleEn: "Assistant Professor & Research Coordinator / Department of English",
    link: "https://vidwan.inflibnet.ac.in/profile/183251",
    email: "hemamalini@mkjc.in",
    vidwanId: "183251",
    institution: "மருதர் கேசரி ஜெயின் மகளிர் கல்லூரி, வாணியம்பாடி",
    institutionEn: "Marudhar Kesari Jain College for Women, Vaniyambadi",
  },
  {
    // img: "/Staff_Photo/dr_s_balaraman_assistant_professor_of_tamil__16.jpeg",
    name: "முனைவர் சு.பலராமன்",
    nameEn: "Dr. S. Balaraman",
    role: "தமிழ் உதவிப் பேராசிரியர்",
    roleEn: "Assistant Professor of Tamil",
    link: "https://fsh.srmrmp.edu.in/wp-content/uploads/2025/07/faculty-balaraman-tamil.pdf",
    email: "balarams@srmist.edu.in",
    vidwanId: "491010",
    institution: "எஸ்.ஆர்.எம் அறிவியல் மற்றும் மானுடவியல் புலம், இராமாபுரம், சென்னை",
    institutionEn: "SRM Faculty of Science and Humanities, Ramapuram, Chennai - 089",
  },
  {
    // img: "/Staff_Photo/mrs_s_senbhagavadivu_assistant_professor_17.jpeg",
    name: "திருமதி. செ. செண்பகவடிவு",
    nameEn: "Mrs. S. Senbhagavadivu",
    role: "உதவிப் பேராசிரியர், தகவல் தொழில்நுட்பத்துறை",
    roleEn: "Assistant Professor, Department of Information Technology",
    link: "https://srmvalliammai.irins.org/profile/328067",
    email: "shenbagavadivus.it@srmvalliammai.ac.in",
    vidwanId: "328067",
    institution: "உறுப்பினர், பாரிவேந்தர் மாணவர் தமிழ்மன்றம் எஸ். ஆர். எம். வள்ளியம்மை பொறியியல் கல்லூரி, காட்டாங்குளத்தூர்.",
    institutionEn: "Member, Parivendar Student Tamil Mandram S. R. M. Valliammai College of Engineering, Kattankulathur",
  },
  {
    // img: "/Staff_Photo/dr_d_tamilselvam_18.jpeg",
    name: "முனைவர். த. தமிழ்ச்செல்வம்",
    nameEn: "Dr. D. Tamilselvam",
    role: "உதவிப் பேராசிரியர் (கணினி அறிவியல்)",
    roleEn: "Assistant Professor (Computer Science)",
    link: "https://rgasc.edu.in/admin/images/pdf/98051_Faculty_Profile_Thamiz%20selvam.pdf",
    institution: "இராஜீவ் காந்தி கலை மற்றும் அறிவியல் கல்லூரி, புதுவை",
    institutionEn: "Rajiv Gandhi College of Arts and Sciences, Puducherry",
  },
  {
    // img: "/Staff_Photo/dr_p_vigneshwari_19.jpeg",
    name: "முனைவர் ப. விக்னேஸ்வரி",
    nameEn: "Dr. P. Vigneshwari",
    role: "இணைப் பேராசிரியர் / தமிழ்த்துறை",
    roleEn: "Associate Professor / Department of Tamilnadu",
    link: "https://vidwan.inflibnet.ac.in/profile/334879",
    vidwanId: "334879",
    institution: "நேரு கலை மற்றும் அறிவியல் கல்லூரி கோயம்புத்தூர்.",
    institutionEn: "Nehru College of Arts and Science Coimbatore, Nehru Gardens, Thirumalayampalayam, Coimbatore 641105",
  },
  {
    // img: "/Staff_Photo/dr_m_samisundaram_head_of_department_and_associate_professor_20.jpeg",
    name: "முனைவர் மு. சாமிசுந்தரம்",
    nameEn: "Dr. M. Samisundaram",
    role: "துறைத்தலைவர் மற்றும் இணைப்பேராசிரியர், தமிழ்த்துறை",
    roleEn: "Head of Department and Associate Professor / Tamil",
    link: "https://parkscollege.ac.in/teaching-staff/",
    email: "sundaram1971@gmail.com",
    institution: "பார்க்ஸ் கல்லூரி, திருப்பூர் - 641605",
    institutionEn: "Parks College, Tirupur - 641605",
  },
  {
    // img: "/Staff_Photo/post_dr_m_ayyappan_arulmiku_subramania_swamy_college_of_arts_and_science_21.jpeg",
    name: "முதுமுனைவர் மு. ஐயப்பன்",
    nameEn: "Post Dr. M. Ayyappan",
    role: "உதவிப் பேராசிரியர் / தமிழ்த்துறை",
    roleEn: "Assistant Professor / Tamil",
    link: "https://www.assascollege.org/#/teaching",
    email: "driyyappanphd@gmail.com",
    institution: "அருள்மிகு சுப்பிரமணிய சுவாமி கலை மற்றும் அறிவியல் கல்லூரி, விளாத்திகுளம், தூத்துக்குடி – 628907 (இந்துசமய அறநிலையத் துறை)",
    institutionEn: "Arulmiku Subramania Swamy College of Arts and Science, Vlathikulam, Thoothukudi – 628907",
  },
  {
    // img: "/Staff_Photo/dr_a_chithra_22.jpeg",
    name: "முனைவர் ஏ. சித்ரா",
    nameEn: "Dr. A. Chithra",
    role: "உதவிப் பேராசிரியர் / தமிழ்த்துறை",
    roleEn: "Assistant Professor / Department of Tamil",
    link: "https://sacas.ac.in/departments/dept-of-tamil/",
    email: "chitra.damu1985@gmail.com",
    institution: "S A கலை மற்றும் அறிவியல் கல்லூரி, திருவேற்காடு, சென்னை 600077",
    institutionEn: "S. A. College of Arts & Science, Chennai - 600077",
  }
];

export default function PublicationsPage() {
  return (
    <PageShell>
      {/* Premium Header Banner Section */}
      <section className="pt-28 md:pt-36 pb-6 md:pb-10 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* SEO and Accessibility Page Title */}
          <h1 className="sr-only">வெளியீடுகள் | Publications</h1>
          
          {/* Banner Container - Ultra Clean & Borderless to match the page background */}
          <div className="flex justify-center w-full">
            <Image
              src={getAssetPath("/images/issn.png")}
              alt="Vaagai Tamilsangam Publications ISSN Banner"
              width={1024}
              height={621}
              priority
              unoptimized
              className="w-full max-w-4xl h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Publication Categories Links */}
      <section className="py-16 md:py-24 bg-[#E8EFE9] relative">
        <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.02] pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicationCategories.map((category) => {
              const Icon = category.icon
              return (
                <a href={`#${category.id}`} key={category.id} className="block group">
                  <Card className="h-full border border-[#346023]/10 bg-[#F4F8F5] shadow-md hover:shadow-lg transition-all hover:border-[#346023]/30 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#346023]/10 flex items-center justify-center group-hover:bg-[#346023]/20 transition-colors">
                          <Icon className="w-6 h-6 text-[#346023]" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-[#346023] mb-1">
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
        <section id="aim" className="scroll-mt-32 max-w-5xl mx-auto px-1 bg-[#E8EFE9] rounded-3xl p-6 md:p-8 border border-[#346023]/10 shadow-sm relative">
          <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.01] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">நோக்கம் (AIM)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#346023]/15 shadow-lg relative z-10">
            <div className="p-6 md:p-8 bg-[#D6E4D9] border-b lg:border-b-0 lg:border-r border-[#346023]/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-[#346023] rounded-full"></div>
                <h3 className="font-bold text-[#346023] uppercase tracking-wider text-xs">Tamil Version</h3>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
                'கல் தோன்றி மண் தோன்றாக் காலத்தே வாளொடு முன் தோன்றிய மூத்தகுடி' தமிழர்களின் வாழ்க்கையோடு இயைந்து வாழ்வியல் மேம்பாட்டிற்கு அடிப்படையாகத் திகழும் தமிழ்மொழி, கால மாற்றத்திற்கேற்ப நாகரிகமும் பண்பாடும் அடைந்து காணப்படுகிறது. உலக அறிஞர்கள் தமிழர்களின் தமிழ்மொழியை வியந்தது மட்டுமின்றி அதன் தொன்மையை ஆராய்ந்து கொண்டே இருக்கிறார்கள். அவர்கள் ஆய்வின்படி இலக்கியங்களே தமிழ்மொழியின் வெளிப்பாடுகளாக அமைகின்றன. பன்னாட்டு அளவில் இன்று புலம் பெயர்ந்த தமிழர்கள் தாம் வாழ்கின்ற சூழலில் தங்கள் பண்பாட்டையும் நாகரிகத்தையும் பாதுகாத்து வருகிறார்கள். செம்மொழியாக தமிழ் உயர்ந்து நிற்பதற்கு முக்கிய காரணம் அதன் தொன்மைத் தன்மையே ஆகும். தமிழினம், தமிழ்மொழி, தமிழ் இலக்கியங்கள் ஆகிய அனைத்தும் மிகத் தொன்மை வாய்ந்தவை. தமிழின் தொன்மையை தமிழ் இலக்கியங்களும் அதன் வழி நாம் அறிந்து கொண்ட மூவேந்தர் வரலாறும் உணர்த்தும். இத்தகைய தொல் சிறப்பு வாய்ந்த தமிழ் மொழியை தொன்மைக் காலம் முதல் இந்த தொழில்நுட்பக் காலம் வரை நாம் எத்தனை கொண்டாடினாலும் அதன் புகழுக்கு அத்தனை ஈடாகாது. எதிர்கால தலைமுறையினருக்கு தமிழ்மொழியின் சிறப்புகள் மற்றும் தமிழர்களின் பண்பாட்டு விழுமியங்களை ஆவணப்படுத்துதல் இச்செயல்பாட்டின் நோக்கமாகும்.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-[#F4F8F5]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-[#346023]/70 rounded-full"></div>
                <h3 className="font-bold text-[#346023]/80 uppercase tracking-wider text-xs">English Version</h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic text-pretty">
                'When the stone appeared and the soil did not appear, the sword appeared first' The Tamil language, which is the basis for the development of the lifestyle of the Tamils, has become civilized and cultured with the change of time. World scholars have not only admired the Tamil language of the Tamils but also continue to research its antiquity. According to their research, literature is the expression of the Tamil language. Today, Tamils who have migrated internationally are preserving their culture and civilization in the environment in which they live. The main reason for Tamil's rise as a classical language is its antiquity. The Tamil people, the Tamil language, and Tamil literature are all very ancient. The antiquity of Tamil is conveyed by Tamil literature and the history of the Three Kingdoms that we have learned through it. No matter how much we celebrate such a unique Tamil language from ancient times to this technological age, its glory cannot be compared to it. The aim of this activity is to document the specialties of the Tamil language and the cultural values of the Tamils for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-32 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8 border-b pb-4">
            <BookOpen className="w-8 h-8 text-[#346023]" />
            <h2 className="text-3xl font-bold text-[#346023]">About - Vaagai Tamilsangam</h2>
          </div>
          <div className="mb-8 space-y-2 p-6 bg-[#D6E4D9]/30 rounded-xl border border-[#346023]/10">
            <p className="text-xl font-semibold text-foreground">பன்னாட்டு அளவில் சிந்தனை மற்றும் ஆராய்ச்சிகளை மேற்கொள்ளும் வாகை தமிழ்ச்சங்கத்தின் ஒரு முயற்சி.</p>
            <p className="text-lg text-muted-foreground">A platform for global intellectual and research pursuits - An Initiative of Vaagai Tamilsangam.</p>
          </div>

          <div className="bg-[#F4F8F5] rounded-xl border border-[#346023]/10 shadow-sm overflow-hidden">
            <div className="flex flex-col">
              {aboutDetails.map((detail, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <div className="sm:w-1/3 p-4 font-semibold text-foreground bg-[#D6E4D9]/20 border-r border-[#346023]/10 text-[#346023]">
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
            <FileText className="w-8 h-8 text-[#346023]" />
            <h2 className="text-3xl font-bold text-[#346023]">ஆய்வுப் பொருண்மைகள் (Research Themes)</h2>
          </div>
          <div className="bg-[#F4F8F5] rounded-2xl p-8 border border-[#346023]/10 shadow-md relative overflow-hidden">
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              இலக்கணங்கள் தொல்காப்பியம், இறையனார் அகப்பொருள், இலக்கண விளக்கம், நம்பியகப் பொருள், யாப்பருங்கலக் காரிகை, தமிழ்மொழியின் சிறப்புகள், தமிழ்மொழியின் உரைநடை, காப்பியங்கள், சிற்றிலக்கியங்கள், பன்னிரு திருமுறைகள், நாலாயிர திவ்வியப் பிரபந்தம், இதிகாச புராணங்கள், சித்தர் இலக்கியங்கள், சித்த மருத்துவம், இயற்கை மருத்துவம், உணவு முறைகள், திணை இலக்கியம், தற்கால இலக்கியம், உரையாசிரியர்கள், இலக்கண நூல் தொகுப்பு, நாட்டுப்புற இலக்கியங்கள், கல்வெட்டுகள், வழக்காறுகள், மறைந்துபோன, மறைந்துகொண்டும், மறைந்துகொண்டு இருக்கும் அனைத்து கலைகளும் மீட்டுருவாக்கம் செய்வது, இன்றைய தேவைகள், நாளைய தேவைகள் பற்றிய சிந்தனைகள் போன்ற பல பன்முகப் பார்வை கொண்ட தலைப்புகள் மற்றும் கருத்தரங்கத் தலைப்பையொட்டித் தாங்கள் விரும்பும் எந்தத் தலைப்பிலும் தமிழ் மற்றும் ஆங்கிலம் ஆகிய இருமொழிகளிலும் கட்டுரைகள் அமையலாம்.
            </p>
          </div>
        </section>

        {/* Guidelines Section */}
        <section id="guidelines" className="scroll-mt-32 max-w-5xl mx-auto px-1">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <ScrollText className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">வழிகாட்டுதல்கள் (Guidelines)</h2>
          </div>
          <div className="grid gap-4 md:gap-6">
            {guidelinesList.map((guideline, index) => (
              <div key={index} className="group relative flex flex-col sm:flex-row gap-4 p-4 md:p-6 rounded-2xl border border-[#346023]/10 bg-[#F4F8F5] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#346023]/30">
                <div className="flex items-center gap-4 sm:flex-col sm:gap-2 sm:shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#346023] text-white flex items-center justify-center font-bold text-sm md:text-base shadow-md">
                    {index + 1}
                  </div>
                  <div className="sm:hidden h-px flex-grow bg-[#346023]/10"></div>
                </div>
                <div className="space-y-3 flex-grow">
                  <div>
                    <p className="text-base md:text-lg font-medium text-foreground leading-relaxed text-pretty">{guideline.tamil}</p>
                  </div>
                  <div className="pt-2 border-t border-dashed border-primary/10">
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed text-pretty">{guideline.english}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="editorial" className="scroll-mt-32 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-[#E8EFE9] border border-[#346023]/15 relative">
          {/* Subtle page background decoration */}
          <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.02] pointer-events-none"></div>
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex items-center gap-4 mb-2">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-[#346023]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#346023] flex flex-wrap items-center gap-2">
                <span>ஆசிரியர் குழு</span>
                <span className="text-[#346023]/60 text-lg md:text-xl font-normal font-sans">( Editorial Board )</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 mt-4 mb-12">
              <div className="px-4 py-2 bg-[#F4F8F5] border border-[#346023]/10 rounded-xl text-sm shadow-sm">
                <span className="text-[#346023] font-semibold">பொருண்மை:</span> <span className="text-foreground/80">கல்வி</span>
              </div>
              <div className="px-4 py-2 bg-[#F4F8F5] border border-[#346023]/10 rounded-xl text-sm shadow-sm">
                <span className="text-[#346023] font-semibold">Subject:</span> <span className="text-foreground/80">Education</span>
              </div>
            </div>

            {/* Advisory Board */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-[#346023] pl-4 text-[#346023]">ஆலோசனைக் குழு (Advisory Board)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advisoryBoard.map((member, idx) => (
                  <div key={idx} className="bg-[#F4F8F5] rounded-2xl overflow-hidden flex flex-col h-full border border-[#346023]/10 hover:border-[#346023]/30 shadow-md hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-[260px] relative overflow-hidden bg-[#E8EFE9] border-b border-[#346023]/15 group-hover:brightness-[1.02] transition-all duration-300">
                      {/* Traditional elegant double-border frame wrapper */}
                      <div className="absolute inset-3 border border-[#346023]/20 pointer-events-none z-20"></div>
                      <div className="absolute inset-3.5 border-2 border-[#346023]/10 pointer-events-none z-20"></div>
                      
                      {('img' in member && member.img) ? (
                        <Image
                          src={getAssetPath(member.img as string)}
                          alt={member.name}
                          fill
                          className="object-cover object-top z-10 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#D6E4D9] z-10">
                          <Users className="w-12 h-12 text-[#346023]/40" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-grow flex flex-col gap-4 text-sm text-left bg-[#F4F8F5]">
                      <div className="text-left">
                        <p className="font-bold text-lg text-[#346023] leading-tight mb-1.5 group-hover:text-[#346023] transition-colors text-left">{member.name}</p>
                        <p className="text-slate-700 leading-relaxed font-medium text-left">{member.role}</p>
                        <p className="text-[#346023]/80 italic text-xs mt-2.5 font-normal leading-relaxed text-left">{member.nameEn}, {member.roleEn}</p>
                      </div>

                      {member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-[#346023] hover:text-[#346023] font-semibold group/link hover:underline mt-1 text-left"
                        >
                          <span>Profile Link</span>
                          <span className="group-hover/link:translate-x-0.5 transition-transform ml-1">→</span>
                        </a>
                      )}

                      <div className="mt-auto pt-4 border-t border-[#346023]/10 text-left">
                        <p className="text-[#346023] text-xs font-semibold leading-relaxed text-left">{member.institution}</p>
                        <p className="text-slate-600 italic text-[11px] mt-1.5 leading-relaxed text-left">{member.institutionEn}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chief Editor */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-[#346023] pl-4 text-[#346023]">முதன்மை ஆசிரியர் (Chief Editor)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {chiefEditor.map((member, idx) => (
                  <div key={idx} className="bg-[#F4F8F5] rounded-2xl overflow-hidden flex flex-col h-full border border-[#346023]/10 hover:border-[#346023]/30 shadow-md hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-[260px] relative overflow-hidden bg-[#E8EFE9] border-b border-[#346023]/15 group-hover:brightness-[1.02] transition-all duration-300">
                      {/* Traditional elegant double-border frame wrapper */}
                      <div className="absolute inset-3 border border-[#346023]/20 pointer-events-none z-20"></div>
                      <div className="absolute inset-3.5 border-2 border-[#346023]/10 pointer-events-none z-20"></div>
                      
                      {('img' in member && member.img) ? (
                        <Image
                          src={getAssetPath(member.img as string)}
                          alt={member.name}
                          fill
                          className="object-cover object-top z-10 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#D6E4D9] z-10">
                          <Users className="w-12 h-12 text-[#346023]/40" />
                        </div>
                      )}
                      <span className="absolute top-4 right-4 bg-[#346023] text-white text-[9px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider z-20 border border-white/10">
                        CHIEF
                      </span>
                    </div>

                    <div className="p-6 flex-grow flex flex-col gap-4 text-sm text-left bg-[#F4F8F5]">
                      <div className="text-left">
                        <p className="font-bold text-lg text-[#346023] leading-tight mb-1.5 group-hover:text-[#346023] transition-colors text-left">{member.name}</p>
                        <p className="text-slate-700 leading-relaxed font-medium text-left">{member.role}</p>
                        <p className="text-[#346023]/80 italic text-xs mt-2.5 font-normal leading-relaxed text-left">{member.nameEn}, {member.roleEn}</p>
                      </div>

                      <div className="space-y-2 text-left">
                        <p className="text-[#346023] break-all text-xs font-semibold text-left">{member.email}</p>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#346023]/5 text-[#346023] text-xs font-semibold border border-[#346023]/10 shadow-sm mt-1 text-left">
                          Vidwan-ID : {member.vidwanId}
                        </span>
                      </div>

                      <div className="mt-auto pt-4 border-t border-[#346023]/10 text-left">
                        <p className="text-[#346023] text-xs font-semibold leading-relaxed text-left">{member.institution}</p>
                        <p className="text-slate-600 italic text-[11px] mt-1.5 leading-relaxed text-left">{member.institutionEn}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Board Members */}
            <div>
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-amber-700 pl-4 text-amber-900">ஆசிரியர் குழு ( Editorial Board )</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {editorialBoardMembers.map((member, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="h-[240px] bg-gradient-to-br from-teal-50 to-indigo-50/50 flex items-center justify-center p-6 border-b border-slate-100 relative">
                      <div className="w-[200px] h-[200px] bg-white border-2 border-white shadow-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 relative">
                        {('img' in member && member.img) ? (
                          <Image
                            src={getAssetPath(member.img as string)}
                            alt={member.name}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <Users className="w-16 h-16 text-primary/70" />
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col gap-4 text-sm text-left">
                      <div className="text-left">
                        <p className="font-bold text-lg text-slate-900 leading-tight mb-1.5 group-hover:text-primary transition-colors text-left">{member.name}</p>
                        <p className="text-slate-600 leading-relaxed font-medium text-left">{member.role}</p>
                        <p className="text-primary/70 italic text-xs mt-2.5 font-normal leading-relaxed text-left">{member.nameEn}, {member.roleEn}</p>
                      </div>

                      <div className="space-y-2 text-left">
                        {member.link && (
                          <a
                            href={member.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-blue-600 hover:text-blue-500 font-semibold group/link hover:underline mb-1 text-left"
                          >
                            <span>Profile Link</span>
                            <span className="group-hover/link:translate-x-0.5 transition-transform ml-1">→</span>
                          </a>
                        )}
                        {member.email && (
                          <p className="text-slate-700 break-all text-xs font-semibold text-left">{member.email}</p>
                        )}
                        {member.vidwanId && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold border border-primary/10 shadow-sm mt-1 text-left">
                            Vidwan-ID : {member.vidwanId}
                          </span>
                        )}
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100 text-left">
                        <p className="text-slate-700 text-xs font-semibold leading-relaxed text-left">{member.institution}</p>
                        <p className="text-muted-foreground italic text-[11px] mt-1.5 leading-relaxed text-left">{member.institutionEn}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Peer Reviewed Journal Section */}
        <section id="peer-reviewed" className="scroll-mt-32 max-w-5xl mx-auto px-1">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">சக மதிப்பாய்வு இதழ் (Peer Reviewed Journal)</h2>
          </div>

          <Card className="overflow-hidden border border-[#346023]/15 shadow-xl bg-[#F4F8F5] rounded-2xl">
            <div className="bg-gradient-to-r from-[#244417] to-[#346023] p-6 md:p-8 text-white">
              <p className="text-sm font-semibold tracking-wider text-white/70 uppercase mb-1">வாகை தமிழ்ச்சங்கம்</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                IJVAAGAI – International Journal of Visionary Advancements in Applied Global Academics and Innovation
              </h3>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold border border-white/10 shadow-sm">
                  E-ISSN: 3107-9202
                </span>
                <span className="bg-gold/90 text-primary-dark px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  PEER REVIEWED
                </span>
              </div>
            </div>

            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="p-5 bg-[#D6E4D9]/30 rounded-xl border border-[#346023]/10">
                <p className="text-lg font-bold text-[#346023] leading-relaxed font-semibold">
                  கல்வி மற்றும் புத்தாக்கத்தில் தொலைநோக்குச் சார்ந்த முன்னேற்றங்களுக்கான பன்னாட்டு ஆய்விதழ் ( IJVAAGAI TAMILSANGAM ) மதிப்பாய்வு செய்யப்பட்ட பன்னாட்டு காலாண்டு தமிழாய்விதழாகும்.
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
                <p className="indent-8 text-justify">
                  வாகை தமிழ்ச்சங்கத்தின் பன்னாட்டு காலாண்டு தமிழாய்விதழான IJVAAGAI (E-ISSN: 3107-9202), கல்வி மற்றும் அறிவியல் உலகிற்குச் சமர்ப்பிக்கப்படும் ஆய்வுக் கட்டுரைகளின் தரம், உண்மைத்தன்மை மற்றும் அறிவியல் மற்றும் அனைத்துத் தரப்பினரும் ஏற்கும் தன்மை ஆகியவற்றை உறுதி செய்ய மிகக் கடுமையான ‘சக மதிப்பாய்வு’ (Peer-Review) முறையைப் பின்பற்றுகிறது.
                </p>
                <p className="indent-8 text-justify">
                  இவ்விதழுக்கு வரும் ஒவ்வொரு பிரதியும், அந்தந்தக் குறிப்பிட்ட கல்வி அல்லது விஞ்ஞானத்துறை சார்ந்த மூத்த பேராசிரியர்கள், துறைசார் வல்லுனர்கள் மற்றும் உலகளாவிய ஆராய்ச்சி வல்லுநர்களின் தீவிரப் பார்வைக்கு அனுப்பப்படுகிறது. தனிச்சார்பற்ற நடுநிலையான மதிப்பீட்டை உறுதி செய்வதற்காக, கட்டுரை எழுதியவரின் விவரங்கள் மதிப்பீட்டாளருக்கும், மதிப்பீட்டாளரின் விவரங்கள் கட்டுரையாளருக்கும் தெரியாத வண்ணம் ‘இரட்டை மறைப்பு சக மதிப்பாய்வு’ (Double-Blind Peer Review) முறை இங்கு கையாளப்படுகிறது.
                </p>
                <p className="indent-8 text-justify">
                  இந்த வல்லுநர் குழுவானது கட்டுரையின் தனித்தன்மை, தரவுத் துல்லியம் மற்றும் அது சமூகத்திற்கு வழங்கும் புத்தாக்கப் பங்களிப்பு ஆகியவற்றை ஆழமாக ஆராய்ந்து விமர்சிக்கிறது. அவர்களின் விரிவான ஆய்வு அறிக்கையின் அடிப்படையிலேயே, ஒரு கட்டுரை எவ்வித மாற்றமுமின்றி நேரடியாக வெளியீட்டிற்குப் பொருத்தமானதா, அல்லது வல்லுநர்களின் பரிந்துரைகளின்படி திருத்தங்கள் செய்யப்பட வேண்டுமா அல்லது போதிய ஆய்வுத் தரம் இல்லாத பட்சத்தில் வெளியீட்டிற்குத் தகுதியற்றதாக நிராகரிக்கப்பட வேண்டுமா என்பதை இதழாசிரியர் குழு இறுதி செய்கிறது. இதன் மூலம் ஆய்வுக்கட்டுரை வெளியீடுகளின் உலகளாவிய நம்பகத்தன்மையை வாகை தமிழ்ச்சங்கம் முழுமையாக நிலைநிறுத்துகிறது.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <ArchivesSection />

        {/* Publication Process Section */}
        <section id="process" className="scroll-mt-32 max-w-5xl mx-auto px-1">
          <div className="flex items-center gap-3 mb-6 border-b border-[#346023]/10 pb-4">
            <div className="p-2 rounded-lg bg-[#346023]/10">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-[#346023]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#346023]">வெளியீட்டு செயல்முறை (Publication Process)</h2>
          </div>

          <div className="bg-[#F4F8F5] rounded-3xl p-6 md:p-8 border border-[#346023]/10 shadow-md relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.01] pointer-events-none"></div>
            <div className="w-full max-w-4xl relative overflow-hidden rounded-2xl border border-[#346023]/15 shadow-lg bg-white p-2">
              <Image
                src={getAssetPath("/images/publication_process.jpg")}
                alt="Vaagai Tamilsangam Publication Process"
                width={1200}
                height={800}
                unoptimized
                className="w-full h-auto select-none rounded-xl"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#E8EFE9] border-t border-[#346023]/10 relative"
      >
        <div className="absolute inset-0 bg-[url(/images/tamil_heritage_bg.png)] bg-repeat opacity-[0.01] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#346023] mb-4">
            ஆய்வுக் கட்டுரைகளை சமர்ப்பிக்க
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            தமிழ் மொழி, இலக்கியம், பண்பாடு சார்ந்த உங்கள் ஆய்வுக் கட்டுரைகளை
            வாகை தமிழ்ச்சங்கத்தின் வெளியீடுகளில் பிரசுரிக்க விரும்பினால் எங்களை தொடர்புகொள்ளுங்கள்.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:publications@vaagaitamilsangam.com"
              className="inline-flex items-center justify-center rounded-lg bg-[#346023] px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-[#244417] transition-colors"
            >
              கட்டுரை சமர்ப்பிக்க
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-[#346023]/10 transition-colors"
            >
              தொடர்புக்கு
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
