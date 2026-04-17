import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "முகப்பு", href: "/" },
  { label: "செயல்பாடுகள்", href: "/activities" },
  { label: "பாடத்திட்டம்", href: "/syllabus" },
  { label: "வெளியீடுகள்", href: "/publications" },
  { label: "தொடர்புக்கு", href: "/contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-teal text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">
                <span className="font-bold text-lg">வா</span>
              </div>
              <span className="font-semibold text-xl">வாகை தமிழ்ச்சங்கம்</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-light">விரைவு இணைப்புகள்</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-light">தொடர்பு</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-light flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  நாமக்கல், தமிழ்நாடு, இந்தியா
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-light flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-light flex-shrink-0" />
                <a href="mailto:info@vaagaitamilsangam.com" className="text-white/80 hover:text-white text-sm transition-colors">
                  info@vaagaitamilsangam.com
                </a>
              </li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-light">அங்கீகாரங்கள்</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>TN Societies Act 1975</li>
              <li>MSME Registered</li>
              <li>AICTE Internship Provider</li>
              <li>NGO Darpan</li>
              <li>NCS Registered</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-xs">வா</span>
              </div>
              <p>&copy; {new Date().getFullYear()} - வாகை தமிழ்ச்சங்கம்</p>
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 uppercase text-[10px] tracking-wider font-medium">
              {[
                { label: "முகப்பு", href: "/" },
                { label: "செயல்பாடுகள்", href: "/activities" },
                { label: "பாடத்திட்டம்", href: "/syllabus" },
                { label: "தொடர்புக்கு", href: "/contact" },
                { label: "Publication", href: "/publications" },
              ].map((link, i) => (
                <React.Fragment key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                  {i < 4 && <span className="opacity-20 text-xs">|</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
