import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">வாகை தமிழ்ச்சங்கம்</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Dedicated to preserving and promoting Tamil language, literature,
              and cultural heritage.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">குறிப்பு</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  பற்றி
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-secondary transition-colors"
                >
                  செயல்பாடுகள்
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="hover:text-secondary transition-colors"
                >
                  வெளியீடுகள்
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  தொடர்பு
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">தொடர்பு</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@vaagaitamilsangam.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@vaagaitamilsangam.com
                </a>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-1" />
                <a
                  href="tel:+914422345678"
                  className="hover:text-secondary transition-colors"
                >
                  +91 44 2234 5678
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Bharathiyar Quote */}
          <div className="bg-primary-light/30 rounded-lg p-4">
            <p className="text-sm italic">
              "தேமொழிந்த தமிழ்மொழியே உலகமெல்லாம் பாடிப் பரவச் செய்தல் வேண்டும்"
            </p>
            <p className="text-xs mt-2">- பாரதியார்</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} வாகை தமிழ்ச்சங்கம். All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
