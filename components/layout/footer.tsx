import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react"

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.016 14.122.99 11.5.99c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.46 3.41 1.33 4.908l-.993 3.626 3.704-.984zm11.206-5.076c-.301-.15-1.78-.88-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-1.011-.507-1.688-1.024-2.355-2.172-.178-.308-.178-.59-.078-.79.098-.197.2-.43.3-.646.1-.21.133-.357.2-.5.067-.143.033-.27-.017-.37-.05-.1-.475-1.15-.65-1.575-.17-.412-.347-.354-.475-.36-.124-.006-.267-.008-.409-.008-.14 0-.37.05-.565.27-.193.21-.74.72-.74 1.76 0 1.04.75 2.04.855 2.18.1.15 1.47 2.26 3.57 3.16.5.21.89.34 1.2.44.5.16.96.14 1.32.09.4-.06 1.78-.73 2.03-1.43.25-.7.25-1.29.17-1.43-.08-.14-.28-.22-.58-.37z"/>
  </svg>
)

const quickLinks = [
  { label: "முகப்பு", href: "/" },
  { label: "செயல்பாடுகள்", href: "/activities" },
  { label: "வாகை சூட வா", href: "/vaagai-sooda-vaa" },
  { label: "பாடத்திட்டம்", href: "/syllabus" },
  { label: "வெளியீடுகள்", href: "/publications" },
  { label: "தொடர்புக்கு", href: "/contact" },
  { label: "தனியுரிமைக் கொள்கை", href: "/privacy-policy" },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556917486232&mibextid=JRoKGi", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/vaagaitamilsangam?igsh=MWI3MjRvMnpmcDJ1Yw%3D%3D", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/%E0%AE%B5%E0%AE%BE%E0%AE%95%E0%AF%88-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%9C%E0%AF%8D%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D/", label: "Linkedin" },
  { icon: Youtube, href: "https://youtube.com/@vaagaitamilsangam?si=p7zQmgld9STrj3Qt", label: "Youtube" },
  { icon: WhatsappIcon, href: "https://whatsapp.com/channel/0029Vb7qrzV30LKUarhSNJ0j", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#F6F4E8] dark:bg-[#071816] text-[#2C4A47] dark:text-slate-200 border-t border-[#E5E2D0] dark:border-teal-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#0F766E]/20 dark:border-teal-500/20 overflow-hidden shadow-sm transition-transform hover:scale-105">
                <Image
                  src={getAssetPath("/logo2.svg")}
                  alt="Vaagai Tamilsangam Logo"
                  fill
                  className="object-contain scale-[1.4]"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-xl text-[#0F766E] dark:text-white">வாகை தமிழ்ச்சங்கம்</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#4A6B67] dark:text-slate-400">
              தமிழ் மொழி, இலக்கியம், பண்பாடு சார்ந்த அறிவை இக்கால சிந்தனைகளுடன் வளர்த்தலும் மேம்படுத்துதலும் எங்களின் முதன்மை நோக்கம்.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0F766E]/10 dark:bg-white/5 flex items-center justify-center text-[#0F766E] dark:text-slate-300 hover:bg-[#0F766E] hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#0F766E] dark:text-teal-400 tracking-wide">விரைவு இணைப்புகள்</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4A6B67] hover:text-[#0F766E] dark:text-slate-400 dark:hover:text-teal-300 text-sm transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#0F766E] dark:text-teal-400 tracking-wide">தொடர்புக்கு</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0F766E] dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-[#4A6B67] dark:text-slate-300 text-sm leading-relaxed">
                  தலைவர், 12 / 53 A 1, அத்தனூர் வடக்கு, அத்தனூர், நாமக்கல், தமிழ்நாடு, இந்தியா - 636301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0F766E] dark:text-teal-400 flex-shrink-0" />
                <a href="tel:+918248272880" className="text-[#4A6B67] hover:text-[#0F766E] dark:text-slate-300 dark:hover:text-teal-300 text-sm transition-colors">
                  +91 82482 72880
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0F766E] dark:text-teal-400 flex-shrink-0" />
                <a href="mailto:vaagaitamilsangam@gmail.com" className="text-[#4A6B67] hover:text-[#0F766E] dark:text-slate-300 dark:hover:text-teal-300 text-sm transition-colors">
                  vaagaitamilsangam@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E5E2D0] dark:border-teal-950/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#4A6B67] dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-[#E5E2D0] dark:border-teal-950 shadow-inner">
                <Image
                  src={getAssetPath("/logo2.svg")}
                  alt="Vaagai Tamilsangam Logo"
                  fill
                  className="object-contain scale-[1.4]"
                  loading="lazy"
                />
              </div>
              <p>&copy; 2026 Vaagai Tamil Sangam. All rights reserved.</p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 uppercase text-[10px] tracking-wider font-medium">
              {[
                { label: "முகப்பு", href: "/" },
                { label: "செயல்பாடுகள்", href: "/activities" },
                { label: "வாகை சூட வா", href: "/vaagai-sooda-vaa" },
                { label: "பாடத்திட்டம்", href: "/syllabus" },
                { label: "Publication", href: "/publications" },
                { label: "ஆதரவு நல்குக", href: "/sponsorship" },
                { label: "தொடர்புக்கு", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link, i) => (
                <React.Fragment key={link.href}>
                  <Link href={link.href} className="text-[#4A6B67] hover:text-[#0F766E] dark:text-slate-400 dark:hover:text-teal-300 transition-colors">
                    {link.label}
                  </Link>
                  {i < 7 && <span className="opacity-20 text-xs">|</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
