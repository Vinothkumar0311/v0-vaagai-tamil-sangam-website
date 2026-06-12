export interface TeamMember {
  id: string
  name: string
  nameEn: string
  role: string
  roleEn: string
  organization?: string
  organizationEn?: string
  image?: string
  category: "advisory" | "chief_editor" | "editorial" | "issn" | "course"
  email?: string
  link?: string
  vidwanId?: string
  location?: string
}

export const allMembers: TeamMember[] = [
  {
    id: "karathathakayana_a_1",
    name: "கார்த்திகேயன் அ",
    nameEn: "கார்த்திகேயன் அ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/karthikeyan sir.png",
    category: "editorial"
  },
  {
    id: "iramalatasama_ma_2",
    name: "இராமலெட்சுமி மூ",
    nameEn: "இராமலெட்சுமி மூ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/Ramalakshmi mam.png",
    category: "editorial"
  },
  {
    id: "manavara_pavanasavara_ja_3",
    name: "முனைவர் புவனேஸ்வரி ஜெ",
    nameEn: "முனைவர் புவனேஸ்வரி ஜெ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/Bhuvaneshwari mam.png",
    category: "editorial"
  },
  {
    id: "manavara_samasanatharama_ma_4",
    name: "முனைவர் சாமிசுந்தரம் மு",
    nameEn: "முனைவர் சாமிசுந்தரம் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/samy sundharam sir.png",
    category: "editorial"
  },
  {
    id: "manavara_kanamazha_sakana_sa_5",
    name: "முனைவர் கனிமொழி சுகுணா சு",
    nameEn: "முனைவர் கனிமொழி சுகுணா சு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/suguna mam.png",
    category: "editorial"
  },
  {
    id: "mathamanavara_aiyapapana_ma_6",
    name: "முதுமுனைவர் ஐயப்பன் மு",
    nameEn: "முதுமுனைவர் ஐயப்பன் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/iyappan sir.png",
    category: "editorial"
  },
  {
    id: "navatha_sa_sa_7",
    name: "நிவேதா செ ச",
    nameEn: "நிவேதா செ ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/nivetha mam.png",
    category: "editorial"
  },
  {
    id: "navarasa_ka_8",
    name: "நாவரசி கா",
    nameEn: "நாவரசி கா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/navarasi mam.png",
    category: "editorial"
  },
  {
    id: "saramala_rajavala_9",
    name: "சர்மிளா ராஜவேல்",
    nameEn: "சர்மிளா ராஜவேல்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/sharmila mam.png",
    category: "editorial"
  },
  {
    id: "arathatha_mathasavarana_10",
    name: "ஆர்த்தி மாதேஸ்வரன்",
    nameEn: "ஆர்த்தி மாதேஸ்வரன்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/aarthi mam.png",
    category: "editorial"
  },
  {
    id: "pavathara_pa_11",
    name: "பவித்ரா ப",
    nameEn: "பவித்ரா ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/pavithra mam.png",
    category: "editorial"
  },
  {
    id: "manathara_sa_12",
    name: "மினித்ரா செ",
    nameEn: "மினித்ரா செ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/minithra mam.png",
    category: "editorial"
  },
  {
    id: "sanathara_sa_13",
    name: "சந்துரு சே",
    nameEn: "சந்துரு சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/chanru anna.png",
    category: "editorial"
  },
  {
    id: "sara_lashana_sa_14",
    name: "ஸ்ரீ லோஷினி சே",
    nameEn: "ஸ்ரீ லோஷினி சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/loshini akka.png",
    category: "editorial"
  },
  {
    id: "saparanathana_sa_pa_15",
    name: "சபரிநாதன் செ ப",
    nameEn: "சபரிநாதன் செ ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/sabarinathan anna.png",
    category: "editorial"
  },
  {
    id: "thamazharasa_a_16",
    name: "தமிழரசி அ",
    nameEn: "தமிழரசி அ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/tamilarasi akka.png",
    category: "editorial"
  },
  {
    id: "sanathaja_pa_tha_17",
    name: "சிந்துஜா பா. தி.",
    nameEn: "சிந்துஜா பா. தி.",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/sindhuja akka.png",
    category: "editorial"
  },
  {
    id: "vashanava_ka_18",
    name: "வைஷ்ணவி க",
    nameEn: "வைஷ்ணவி க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/vaishnavi akka.png",
    category: "editorial"
  },
  {
    id: "thanaya_sa_sa_19",
    name: "தன்யா சு ச",
    nameEn: "தன்யா சு ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/thanya akka.png",
    category: "editorial"
  },
  {
    id: "vashana_tha_20",
    name: "விஷ்ணு தி",
    nameEn: "விஷ்ணு தி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/vishnu anna.png",
    category: "editorial"
  },
  {
    id: "salavamana_ma_21",
    name: "செல்வமணி ம",
    nameEn: "செல்வமணி ம",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/selva mani anna.png",
    category: "editorial"
  },
  {
    id: "saravanana_sa_22",
    name: "சரவணன் சு",
    nameEn: "சரவணன் சு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/saravanan sir.png",
    category: "editorial"
  },
  {
    id: "kanavatha_ka_23",
    name: "குணவதி கி",
    nameEn: "குணவதி கி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/gunavathi mam.png",
    category: "editorial"
  },
  {
    id: "manavara_sathara_e_24",
    name: "முனைவர் சித்ரா ஏ",
    nameEn: "முனைவர் சித்ரா ஏ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/chitra mam.png",
    category: "editorial"
  },
  {
    id: "manavara_paraya_pa_25",
    name: "முனைவர் பிரியா பா",
    nameEn: "முனைவர் பிரியா பா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/priya mam.png",
    category: "editorial"
  },
  {
    id: "apanaya_ka_26",
    name: "அபிநயா கோ",
    nameEn: "அபிநயா கோ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/abinaya mam.png",
    category: "editorial"
  },
  {
    id: "karathathanaஶra_tha_27",
    name: "கீர்த்தனாஶ்ரீ த",
    nameEn: "கீர்த்தனாஶ்ரீ த",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/keerthana mam.png",
    category: "editorial"
  },
  {
    id: "jayapaparaya_na_28",
    name: "ஜெயப்பிரியா நா",
    nameEn: "ஜெயப்பிரியா நா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/jaya priya mam.png",
    category: "editorial"
  },
  {
    id: "manayasama_sa_29",
    name: "முனியசாமி சே",
    nameEn: "முனியசாமி சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/muniya samy sir.png",
    category: "editorial"
  },
  {
    id: "iramamarathama_sa_30",
    name: "இராமாமிர்தம் சி",
    nameEn: "இராமாமிர்தம் சி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/Ramairtham mam.png",
    category: "editorial"
  },
  {
    id: "sanamaka_rana_pa_31",
    name: "சண்முக ராணி ப",
    nameEn: "சண்முக ராணி ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/shanmugha rani mam.png",
    category: "editorial"
  },
  {
    id: "salalakakana_sa_32",
    name: "செல்லக்கனி செ",
    nameEn: "செல்லக்கனி செ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/selakani mam.png",
    category: "editorial"
  },
  {
    id: "palasangakara_ka_33",
    name: "பாலசங்கர் க",
    nameEn: "பாலசங்கர் க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/balashankar sir.png",
    category: "editorial"
  },
  {
    id: "kamalakananana_e_34",
    name: "கமலகண்ணன் ஏ",
    nameEn: "கமலகண்ணன் ஏ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/kamala kannan anna.png",
    category: "editorial"
  },
  {
    id: "vana_aravanatha_35",
    name: "வேணு அரவிந்த்",
    nameEn: "வேணு அரவிந்த்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/venu aravindh anna.png",
    category: "editorial"
  },
  {
    id: "karathathaka_raja_na_36",
    name: "கார்த்திக் ராஜா நா",
    nameEn: "கார்த்திக் ராஜா நா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/karthi anna.png",
    category: "editorial"
  },
  {
    id: "vanatha_kamara_sa_37",
    name: "வினோத் குமார் ச",
    nameEn: "வினோத் குமார் ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/vinoth anna.png",
    category: "editorial"
  },
  {
    id: "parakasha_thangakarasa_38",
    name: "பிரகாஷ் தங்கராசு",
    nameEn: "பிரகாஷ் தங்கராசு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/prakash sir.png",
    category: "editorial"
  },
  {
    id: "karasangakara_ka_39",
    name: "கௌரிசங்கர் க",
    nameEn: "கௌரிசங்கர் க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/gowrishankar anna.png",
    category: "editorial"
  },
  {
    id: "aravanatha_ma_40",
    name: "அரவிந்த் மு",
    nameEn: "அரவிந்த் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/aravindh.png",
    category: "editorial"
  },
  {
    id: "satharashana_ra_41",
    name: "சுதர்ஷன் ரா",
    nameEn: "சுதர்ஷன் ரா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/sutharsan sir.png",
    category: "editorial"
  },
  {
    id: "sarathara_ja_ta_42",
    name: "ஸ்ரீதர் ஜே டி",
    nameEn: "ஸ்ரீதர் ஜே டி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/srithar anna.png",
    category: "editorial"
  },
  {
    id: "maralakarashanana_sa_43",
    name: "முரளிகிருஷ்ணன் சீ",
    nameEn: "முரளிகிருஷ்ணன் சீ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/murali anna.png",
    category: "editorial"
  },
  {
    id: "karanatha_sa_pa_44",
    name: "கௌரிநாத் செ ப",
    nameEn: "கௌரிநாத் செ ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/gowrinath anna.png",
    category: "editorial"
  },
  {
    id: "mathana_tha_45",
    name: "மிதுன் த",
    nameEn: "மிதுன் த",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/Members/mithun anna.png",
    category: "editorial"
  },
]

// ஆசிரியர் குழு - ISSN folder members
export const issnMembers: TeamMember[] = [
  { id: "issn_kanimozhli", name: "கனிமொழி சுகுணா", nameEn: "Kanimozhli Suguna", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/Kanimozhli suguna.png", category: "issn" },
  { id: "issn_karthikeyan", name: "கார்த்திகேயன்", nameEn: "Karthikeyan", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/Karthikeyan.png", category: "issn" },
  { id: "issn_manoj", name: "மனோஜ்", nameEn: "Manoj", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/Manoj.png", category: "issn" },
  { id: "issn_ramamirtham", name: "இராமாமிர்தம்", nameEn: "Ramamirtham", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/Ramamirtham.png", category: "issn" },
  { id: "issn_thiyagarajan", name: "தியாகராஜன்", nameEn: "Thiyagarajan", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/Thiyagarajan.png", category: "issn" },
  { id: "issn_bala_saraswathi", name: "பால சரஸ்வதி", nameEn: "Bala Saraswathi", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/bala saraswathi.png", category: "issn" },
  { id: "issn_balaraaman", name: "பாலராமன்", nameEn: "Balaraaman", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/balaraaman.png", category: "issn" },
  { id: "issn_bhuvaneswari", name: "புவனேஸ்வரி", nameEn: "Bhuvaneswari", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/bhuvaneswari.png", category: "issn" },
  { id: "issn_chitra", name: "சித்ரா", nameEn: "Chitra", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/chitra.png", category: "issn" },
  { id: "issn_hema_malini", name: "ஹேமா மாலினி", nameEn: "Hema Malini", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/hema malini.png", category: "issn" },
  { id: "issn_iyappan", name: "ஐயப்பன்", nameEn: "Iyappan", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/iyappan.png", category: "issn" },
  { id: "issn_kanagaraj", name: "கனகராஜ்", nameEn: "Kanagaraj", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/kanagaraj.png", category: "issn" },
  { id: "issn_kavitha", name: "கவிதா", nameEn: "Kavitha", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/kavitha.png", category: "issn" },
  { id: "issn_samy_sutharam", name: "சாமி சுந்தரம்", nameEn: "Samy Sutharam", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/samy sutharam.png", category: "issn" },
  { id: "issn_sathiya", name: "சத்தியா", nameEn: "Sathiya", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/sathiya.png", category: "issn" },
  { id: "issn_senbhakavadivu", name: "செம்பகவடிவு", nameEn: "Senbhakavadivu", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/senbhakavadivu.png", category: "issn" },
  { id: "issn_tamil_sevam", name: "தமிழ் சேவம்", nameEn: "Tamil Sevam", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/tamil sevam.png", category: "issn" },
  { id: "issn_vasanthi", name: "வசந்தி", nameEn: "Vasanthi", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/vasanthi.png", category: "issn" },
  { id: "issn_vigneswari", name: "விக்னேஸ்வரி", nameEn: "Vigneswari", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/vigneswari.png", category: "issn" },
  { id: "issn_vijayanarasiman", name: "விஜயநரசிமன்", nameEn: "Vijayanarasiman", role: "ஆசிரியர் குழு உறுப்பினர்", roleEn: "Editorial Board Member", image: "/images/ISSN/vijayanarasiman.png", category: "issn" },
]

// ஆலோசனைக்குழு - Course folder members (numbered 1-18)
export const courseMembers: TeamMember[] = Array.from({ length: 18 }, (_, i) => ({
  id: `course_member_${i + 1}`,
  name: `ஆலோசனைக்குழு உறுப்பினர் ${i + 1}`,
  nameEn: `Advisory Member ${i + 1}`,
  role: "ஆலோசனைக்குழு உறுப்பினர்",
  roleEn: "Advisory Board Member",
  image: `/images/Course/${i + 1}.png`,
  category: "course" as const,
}))

export const chairman: TeamMember = {
  id: "manojkumar",
  name: "திரு. மா. மனோஜ்குமார்",
  nameEn: "Mr. M. Manojkumar",
  role: "நிறுவனர் & தலைவர் / முதன்மை ஆசிரியர்",
  roleEn: "Founder & Chairman / Chief Editor",
  organization: "வாகை தமிழ்ச்சங்கம், நாமக்கல்",
  organizationEn: "Vaagai Tamilsangam, Namakkal",
  location: "நாமக்கல்",
  image: "/images/ISSN/Manoj.png",
  category: "chief_editor"
}

export const teamMembers: TeamMember[] = allMembers
