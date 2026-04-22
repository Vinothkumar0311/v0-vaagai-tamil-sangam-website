export interface NavItem {
  label: string;
  labelEn?: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  labelEn?: string;
  items: NavItem[];
}

export type NavElement = NavItem | NavDropdown;

export function isDropdown(item: NavElement): item is NavDropdown {
  return "items" in item;
}

export const navigation: NavElement[] = [
  {
    label: "முகப்பு",
    labelEn: "Home",
    href: "/",
  },
  {
    label: "செயல்பாடுகள்",
    labelEn: "Activities",
    items: [
      {
        label: "மன்றங்கள்",
        labelEn: "Mandrams",
        href: "/mandram",
      },
      {
        label: "மாதாந்திர செயல்பாடுகள்",
        labelEn: "Monthly Activities",
        href: "/activities#monthly",
      },
      {
        label: "வளர்ச்சி மற்றும் மேம்பாடு",
        labelEn: "Development",
        href: "/activities#development",
      },
    ],
  },
  {
    label: "பாடத்திட்டம்",
    labelEn: "Syllabus",
    href: "/syllabus",
  },
  {
    label: "PUBLICATION",
    labelEn: "Publication",
    items: [
      {
        label: "AIM",
        labelEn: "AIM",
        href: "/publications#aim",
      },
      {
        label: "About - Vaagai Tamilsangam",
        labelEn: "About - Vaagai Tamilsangam",
        href: "/publications#about",
      },
      {
        label: "Research Themes",
        labelEn: "Research Themes",
        href: "/publications#research",
      },
      {
        label: "Guidelines",
        labelEn: "Guidelines",
        href: "/publications#guidelines",
      },
      {
        label: "Editorial Board",
        labelEn: "Editorial Board",
        href: "/publications#editorial",
      },
      {
        label: "Archives",
        labelEn: "Archives",
        href: "/publications#archives",
      },
    ],
  },
  {
    label: "தொடர்புக்கு",
    labelEn: "Contact",
    href: "/contact",
  },
];
