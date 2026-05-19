export interface NavItem {
  path: string
  label: string
  submenu?: {
    path: string
    label: string
  }[]
}

export const navigation: NavItem[] = [
  {
    path: "/",
    label: "முகப்பு",
  },
  {
    path: "/about",
    label: "பற்றி",
  },
  {
    path: "/activities",
    label: "செயல்பாடுகள்",
    submenu: [
      {
        path: "/activities#competitions",
        label: "போட்டிகள்",
      },
      {
        path: "/activities#events",
        label: "நிகழ்ச்சிகள்",
      },
      {
        path: "/syllabus",
        label: "பாடக்குறிப்பு",
      },
    ],
  },
  {
    path: "/publications",
    label: "வெளியீடுகள்",
  },
  {
    path: "/contact",
    label: "தொடர்பு",
  },
]
