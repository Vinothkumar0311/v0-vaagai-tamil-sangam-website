import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "தொடர்புக்கு",
  description: "வாகை தமிழ்ச்சங்கத்துடன் தொடர்புகொள்ளுங்கள்",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "முகவரி",
    details: [
      "தலைவர், 12 / 53 A 1",
      "அத்தனூர் வடக்கு, அத்தனூர்",
      "நாமக்கல், தமிழ்நாடு",
      "இந்தியா - 636301"
    ],
  },
  {
    icon: Phone,
    title: "தொலைபேசி",
    details: ["+91 82482 72880"],
  },
  {
    icon: Mail,
    title: "மின்னஞ்சல்",
    details: ["vaagaitamilsangam@gmail.com"],
  },
  {
    icon: Clock,
    title: "அலுவலக நேரம்",
    details: ["திங்கள் - சனி: காலை 9 - மாலை 6", "ஞாயிறு: விடுமுறை"],
  },
]

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556917486232&mibextid=JRoKGi", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/vaagaitamilsangam?igsh=MWI3MjRvMnpmcDJ1Yw%3D%3D", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/%E0%AE%B5%E0%AE%BE%E0%AE%95%E0%AF%88-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D/", label: "Linkedin" },
  // { icon: Youtube, href: "#", label: "YouTube" },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        title="தொடர்புக்கு"
        description="எங்களுடன் தொடர்புகொள்ள கீழே உள்ள படிவத்தை நிரப்பவும் அல்லது நேரடியாக தொடர்புகொள்ளவும்"
      />

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">எங்களுக்கு எழுதுங்கள்</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">பெயர் *</Label>
                      <Input id="name" placeholder="உங்கள் பெயர்" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">தொலைபேசி எண்</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">மின்னஞ்சல் *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">தலைப்பு *</Label>
                    <Input id="subject" placeholder="உங்கள் செய்தியின் தலைப்பு" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">செய்தி *</Label>
                    <Textarea id="message" placeholder="உங்கள் செய்தியை இங்கே எழுதுங்கள்..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    அனுப்பு
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.title} className="border shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <Card className="border shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    சமூக வலைத்தளங்களில் எங்களைத் தொடருங்கள்
                  </h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              {/* <Card className="border shadow-md overflow-hidden">
                <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Google Maps வரைபடம்</p>
                    <p className="text-sm">நாமக்கல், தமிழ்நாடு</p>
                  </div>
                </div>
              </Card> */}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
