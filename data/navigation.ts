export interface NavItem {
  label: string
  labelEn?: string
  href: string
}

export interface NavDropdown {
  label: string
  labelEn?: string
  items: NavItem[]
}

export type NavElement = NavItem | NavDropdown

export function isDropdown(item: NavElement): item is NavDropdown {
  return 'items' in item
}

export const navigation: NavElement[] = [
  {
    label: "முகப்பு",
    labelEn: "Home",
    href: "/"
  },
  {
    label: "செயல்பாடுகள்",
    labelEn: "Activities",
    items: [
      {
        label: "தமிழ்த்திறன் வளர் மாதாந்திர செயல்பாடுகள்",
        labelEn: "Monthly Tamil Skills Activities",
        href: "/activities#monthly"
      },
      {
        label: "வளர்ச்சி மற்றும் மேம்பாடு",
        labelEn: "Growth and Development",
        href: "/activities#development"
      },
      {
        label: "வாகை மழலையர் மன்றம்",
        labelEn: "Vaagai Children's Forum",
        href: "/activities#children"
      },
      {
        label: "வாகை மகளிர் மன்றம்",
        labelEn: "Vaagai Women's Forum",
        href: "/activities#women"
      },
      {
        label: "வாகை பனுவல் மன்றம்",
        labelEn: "Vaagai Literary Forum",
        href: "/activities#literary"
      }
    ]
  },
  {
    label: "பாடத்திட்டம்",
    labelEn: "Syllabus",
    href: "/syllabus"
  },
  {
    label: "தொடர்புக்கு",
    labelEn: "Contact",
    href: "/contact"
  },
  {
    label: "PUBLICATION",
    labelEn: "Publication",
    items: [
      {
        label: "AIM",
        labelEn: "AIM",
        href: "/publications#aim"
      },
      {
        label: "About - Vaagai Tamilsangam",
        labelEn: "About - Vaagai Tamilsangam",
        href: "/publications#about"
      },
      {
        label: "Research Themes",
        labelEn: "Research Themes",
        href: "/publications#research"
      },
      {
        label: "Guidelines",
        labelEn: "Guidelines",
        href: "/publications#guidelines"
      },
      {
        label: "Editorial Board",
        labelEn: "Editorial Board",
        href: "/publications#editorial"
      },
      {
        label: "Archives",
        labelEn: "Archives",
        href: "/publications#archives"
      }
    ]
  }
]
