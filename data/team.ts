export interface TeamMember {
  id: string
  name: string
  nameEn: string
  role: string
  roleEn: string
  organization?: string
  location?: string
  image?: string
}

export const chairman: TeamMember = {
  id: "chairman",
  name: "மா. மனோஜகுமார்",
  nameEn: "Ma. Manojkumar",
  role: "தலைவர்",
  roleEn: "Chairman",
  organization: "வாகை தமிழ்ச்சங்கம்",
  location: "நாமக்கல்",
  image: "/images/team/chairman.jpg"
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "உறுப்பினர் 1",
    nameEn: "Member 1",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-1.jpg"
  },
  {
    id: "member-2",
    name: "உறுப்பினர் 2",
    nameEn: "Member 2",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-2.jpg"
  },
  {
    id: "member-3",
    name: "உறுப்பினர் 3",
    nameEn: "Member 3",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-3.jpg"
  },
  {
    id: "member-4",
    name: "உறுப்பினர் 4",
    nameEn: "Member 4",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-4.jpg"
  },
  {
    id: "member-5",
    name: "உறுப்பினர் 5",
    nameEn: "Member 5",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-5.jpg"
  },
  {
    id: "member-6",
    name: "உறுப்பினர் 6",
    nameEn: "Member 6",
    role: "பொறுப்பாளர்",
    roleEn: "Office Bearer",
    image: "/images/team/member-6.jpg"
  }
]
