export interface TeamMember {
  id: string
  name: string
  nameEn: string
  role: string
  roleEn: string
  organization?: string
  organizationEn?: string
  image?: string
  category: "advisory" | "chief_editor" | "editorial"
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
    image: "/images/team/member_1.jpg",
    category: "editorial"
  },
  {
    id: "iramalatasama_ma_2",
    name: "இராமலெட்சுமி மூ",
    nameEn: "இராமலெட்சுமி மூ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_2.jpg",
    category: "editorial"
  },
  {
    id: "manavara_pavanasavara_ja_3",
    name: "முனைவர் புவனேஸ்வரி ஜெ",
    nameEn: "முனைவர் புவனேஸ்வரி ஜெ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_3.jpg",
    category: "editorial"
  },
  {
    id: "manavara_samasanatharama_ma_4",
    name: "முனைவர் சாமிசுந்தரம் மு",
    nameEn: "முனைவர் சாமிசுந்தரம் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_4.jpg",
    category: "editorial"
  },
  {
    id: "manavara_kanamazha_sakana_sa_5",
    name: "முனைவர் கனிமொழி சுகுணா சு",
    nameEn: "முனைவர் கனிமொழி சுகுணா சு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_5.jpg",
    category: "editorial"
  },
  {
    id: "mathamanavara_aiyapapana_ma_6",
    name: "முதுமுனைவர் ஐயப்பன் மு",
    nameEn: "முதுமுனைவர் ஐயப்பன் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_6.jpg",
    category: "editorial"
  },
  {
    id: "navatha_sa_sa_7",
    name: "நிவேதா செ ச",
    nameEn: "நிவேதா செ ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_7.jpg",
    category: "editorial"
  },
  {
    id: "navarasa_ka_8",
    name: "நாவரசி கா",
    nameEn: "நாவரசி கா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_8.jpg",
    category: "editorial"
  },
  {
    id: "saramala_rajavala_9",
    name: "சர்மிளா ராஜவேல்",
    nameEn: "சர்மிளா ராஜவேல்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_9.jpg",
    category: "editorial"
  },
  {
    id: "arathatha_mathasavarana_10",
    name: "ஆர்த்தி மாதேஸ்வரன்",
    nameEn: "ஆர்த்தி மாதேஸ்வரன்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_10.jpg",
    category: "editorial"
  },
  {
    id: "pavathara_pa_11",
    name: "பவித்ரா ப",
    nameEn: "பவித்ரா ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_11.jpg",
    category: "editorial"
  },
  {
    id: "manathara_sa_12",
    name: "மினித்ரா செ",
    nameEn: "மினித்ரா செ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_12.jpg",
    category: "editorial"
  },
  {
    id: "sanathara_sa_13",
    name: "சந்துரு சே",
    nameEn: "சந்துரு சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_13.jpg",
    category: "editorial"
  },
  {
    id: "sara_lashana_sa_14",
    name: "ஸ்ரீ லோஷினி சே",
    nameEn: "ஸ்ரீ லோஷினி சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_14.jpg",
    category: "editorial"
  },
  {
    id: "saparanathana_sa_pa_15",
    name: "சபரிநாதன் செ ப",
    nameEn: "சபரிநாதன் செ ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_15.jpg",
    category: "editorial"
  },
  {
    id: "thamazharasa_a_16",
    name: "தமிழரசி அ",
    nameEn: "தமிழரசி அ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_16.jpg",
    category: "editorial"
  },
  {
    id: "sanathaja_pa_tha_17",
    name: "சிந்துஜா பா. தி.",
    nameEn: "சிந்துஜா பா. தி.",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_17.jpg",
    category: "editorial"
  },
  {
    id: "vashanava_ka_18",
    name: "வைஷ்ணவி க",
    nameEn: "வைஷ்ணவி க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_18.jpg",
    category: "editorial"
  },
  {
    id: "thanaya_sa_sa_19",
    name: "தன்யா சு ச",
    nameEn: "தன்யா சு ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_19.jpg",
    category: "editorial"
  },
  {
    id: "vashana_tha_20",
    name: "விஷ்ணு தி",
    nameEn: "விஷ்ணு தி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_20.jpg",
    category: "editorial"
  },
  {
    id: "salavamana_ma_21",
    name: "செல்வமணி ம",
    nameEn: "செல்வமணி ம",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_21.jpg",
    category: "editorial"
  },
  {
    id: "saravanana_sa_22",
    name: "சரவணன் சு",
    nameEn: "சரவணன் சு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_22.jpg",
    category: "editorial"
  },
  {
    id: "kanavatha_ka_23",
    name: "குணவதி கி",
    nameEn: "குணவதி கி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_23.jpg",
    category: "editorial"
  },
  {
    id: "manavara_sathara_e_24",
    name: "முனைவர் சித்ரா ஏ",
    nameEn: "முனைவர் சித்ரா ஏ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_24.jpg",
    category: "editorial"
  },
  {
    id: "manavara_paraya_pa_25",
    name: "முனைவர் பிரியா பா",
    nameEn: "முனைவர் பிரியா பா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_25.jpg",
    category: "editorial"
  },
  {
    id: "apanaya_ka_26",
    name: "அபிநயா கோ",
    nameEn: "அபிநயா கோ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_26.jpg",
    category: "editorial"
  },
  {
    id: "karathathanaஶra_tha_27",
    name: "கீர்த்தனாஶ்ரீ த",
    nameEn: "கீர்த்தனாஶ்ரீ த",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_27.jpg",
    category: "editorial"
  },
  {
    id: "jayapaparaya_na_28",
    name: "ஜெயப்பிரியா நா",
    nameEn: "ஜெயப்பிரியா நா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_28.jpg",
    category: "editorial"
  },
  {
    id: "manayasama_sa_29",
    name: "முனியசாமி சே",
    nameEn: "முனியசாமி சே",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_29.jpg",
    category: "editorial"
  },
  {
    id: "iramamarathama_sa_30",
    name: "இராமாமிர்தம் சி",
    nameEn: "இராமாமிர்தம் சி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_30.jpg",
    category: "editorial"
  },
  {
    id: "sanamaka_rana_pa_31",
    name: "சண்முக ராணி ப",
    nameEn: "சண்முக ராணி ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_31.jpg",
    category: "editorial"
  },
  {
    id: "salalakakana_sa_32",
    name: "செல்லக்கனி செ",
    nameEn: "செல்லக்கனி செ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_32.jpg",
    category: "editorial"
  },
  {
    id: "palasangakara_ka_33",
    name: "பாலசங்கர் க",
    nameEn: "பாலசங்கர் க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_33.jpg",
    category: "editorial"
  },
  {
    id: "kamalakananana_e_34",
    name: "கமலகண்ணன் ஏ",
    nameEn: "கமலகண்ணன் ஏ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_34.jpg",
    category: "editorial"
  },
  {
    id: "vana_aravanatha_35",
    name: "வேணு அரவிந்த்",
    nameEn: "வேணு அரவிந்த்",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_35.jpg",
    category: "editorial"
  },
  {
    id: "karathathaka_raja_na_36",
    name: "கார்த்திக் ராஜா நா",
    nameEn: "கார்த்திக் ராஜா நா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_36.jpg",
    category: "editorial"
  },
  {
    id: "vanatha_kamara_sa_37",
    name: "வினோத் குமார் ச",
    nameEn: "வினோத் குமார் ச",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_37.jpg",
    category: "editorial"
  },
  {
    id: "parakasha_thangakarasa_38",
    name: "பிரகாஷ் தங்கராசு",
    nameEn: "பிரகாஷ் தங்கராசு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_38.jpg",
    category: "editorial"
  },
  {
    id: "karasangakara_ka_39",
    name: "கௌரிசங்கர் க",
    nameEn: "கௌரிசங்கர் க",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_39.jpg",
    category: "editorial"
  },
  {
    id: "aravanatha_ma_40",
    name: "அரவிந்த் மு",
    nameEn: "அரவிந்த் மு",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_40.jpg",
    category: "editorial"
  },
  {
    id: "satharashana_ra_41",
    name: "சுதர்ஷன் ரா",
    nameEn: "சுதர்ஷன் ரா",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_41.jpg",
    category: "editorial"
  },
  {
    id: "sarathara_ja_ta_42",
    name: "ஸ்ரீதர் ஜே டி",
    nameEn: "ஸ்ரீதர் ஜே டி",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_42.jpg",
    category: "editorial"
  },
  {
    id: "maralakarashanana_sa_43",
    name: "முரளிகிருஷ்ணன் சீ",
    nameEn: "முரளிகிருஷ்ணன் சீ",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_43.jpg",
    category: "editorial"
  },
  {
    id: "karanatha_sa_pa_44",
    name: "கௌரிநாத் செ ப",
    nameEn: "கௌரிநாத் செ ப",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_44.jpg",
    category: "editorial"
  },
  {
    id: "mathana_tha_45",
    name: "மிதுன் த",
    nameEn: "மிதுன் த",
    role: "உறுப்பினர்",
    roleEn: "Member",
    image: "/images/team/member_45.jpg",
    category: "editorial"
  },
]

export const chairman: TeamMember = {
  id: "manojkumar",
  name: "திரு. மா. மனோஜ்குமார்",
  nameEn: "Mr. M. Manojkumar",
  role: "நிறுவனர் & தலைவர் / முதன்மை ஆசிரியர்",
  roleEn: "Founder & Chairman / Chief Editor",
  organization: "வாகை தமிழ்ச்சங்கம், நாமக்கல்",
  organizationEn: "Vaagai Tamilsangam, Namakkal",
  location: "நாமக்கல்",
  image: "/Staff_Photo/mr_m_manojkumar_founder__5.png",
  category: "chief_editor"
}

export const teamMembers: TeamMember[] = allMembers
