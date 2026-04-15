import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { chairman, teamMembers } from "@/data/team"

export const metadata: Metadata = {
  title: "எங்களைப் பற்றி",
  description: "வாகை தமிழ்ச்சங்கம் பற்றிய விரிவான தகவல்கள்",
}

const visionPoints = [
  "தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.",
  "வாகை தமிழ்ச்சங்கம் தமிழின் கலாச்சார-மொழியியல் பாரம்பரியத்தில் ஆர்வமுள்ள அனைவரையும் ஒன்றிணைக்கும் நோக்கத்துடன் தொண்டாற்றும் ஒர் இலாப நோக்கற்ற, மதச்சார்பற்ற, கலாச்சார-சமூக அமைப்பாகும்.",
  "கற்றல், கற்பித்தல், எழுதுதல், வாசித்தல் போன்ற திறன்களுக்குப் பயிற்சியளித்தலும், வெளிப்படுத்துதலும் மேம்படுத்துதலும் செய்தல்.",
  "கருத்தரங்குகள், வினாடி வினாக்கள், ஆசிரிய-மாணவ மேம்பாட்டுத் திட்டங்கள், ஆய்வரங்கங்கள் ஆகிய நிகழ்வுகள் மூலம் தமிழ் வளர்ச்சிப் பணிகளில் ஈடுபடுதல்.",
  "தலைசிறந்த தமிழ் ஆளுமைகள், சிறந்த கலைஞர்கள், துறைசார், திறன்சார்ந்த வல்லுநர்கள், அறிஞர்கள், ஆய்வாளர்கள், தன்னார்வலர்கள் ஆகியோருக்குப் பட்டங்களும் விருதுகளும் வழங்கிப் பெருமைப்படுத்துதல்."
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              எங்களைப் பற்றி
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              வாகை தமிழ்ச்சங்கம் - தமிழ் மொழி, இலக்கியம், பண்பாடு வளர்ச்சிக்கான அமைப்பு
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  வாகை தமிழ்ச்சங்கம் - அறிமுகம்
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p className="leading-relaxed">
                    தமிழன்னையின் மணிமகுடத்தில் மற்றுமொரு மாணிக்கமாய் மிளிர்கிறது நமது வாகை தமிழ்ச்சங்கம். 
                    தமிழக அரசு அனுமதி பெற்று, தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் 
                    சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலையும் வளர்த்தலையும் 
                    மேம்படுத்துதலையும் நோக்கமாகக்கொண்டு வாகை தமிழ்ச்சங்கம் இயங்கி வருகிறது.
                  </p>
                  <p className="leading-relaxed">
                    நமது வாகை தமிழ்ச்சங்கம், தமிழ்நாடு அரசு மற்றும் இந்திய அரசின் மேலும் பல செயல்திட்டங்களின் 
                    கீழும் அனுமதி பெற்ற தன்னார்வலர், தமிழ்சார்ந்த சமூக சேவை நோக்கம் கொண்ட அமைப்பாகும். 
                    மதுரை உலக தமிழ்ச் சங்கத்தின் அதிகாரபூர்வ உறுப்பினராக இணைந்து மட்டுமின்றி, 
                    உள்நாட்டு & பன்னாட்டு அளவிலான பலதரப்பட்ட மக்கள் வயது வேறுபாடின்றி நமது வாகை தமிழ்ச்சங்கத்தில் 
                    இணைந்து தத்தமது திறன்களை மேம்படுத்தவும் வெளிக்கொணரவுமான களமாகத் திகழ்ந்து வருகிறது.
                  </p>
                  <p className="leading-relaxed">
                    இவ்வமைப்பின் தொடர் சாதனைகளுக்க் காரணம் என்னுடன் பயணித்து வரும் தமிழ்ச்சான்றோரும் 
                    வாகை தமிழ்ச்சங்க குடும்ப உறுப்பினருமே ஆவர். தொடர்ந்து தமிழ்ப்பணியாற்றிட 
                    உந்துதலாக இருக்கும் அனைவருக்கும் நன்றிகளைத் தெரிவித்துக்கொள்கிறேன்.
                  </p>
                </div>
              </div>

              {/* Chairman Card */}
              <div className="lg:col-span-1">
                <Card className="overflow-hidden border-0 shadow-lg sticky top-24">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 overflow-hidden bg-primary/10">
                          <Image
                            src="/images/team/chairman.jpg"
                            alt={chairman.name}
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = "none"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {chairman.name}
                      </h3>
                      <p className="text-gold font-medium mb-2">{chairman.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {chairman.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {chairman.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/deity/tamil-thaai.jpg"
                  alt="Tamil Thaai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    நோக்கு
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் 
                    அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    போக்கு
                  </h2>
                  <ul className="space-y-4">
                    {visionPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gold" />
                        <p className="text-foreground/80 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                எங்கள் அணி
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                வாகை தமிழ்ச்சங்கத்தின் பொறுப்பாளர்கள்
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-gold/10">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                          <Image
                            src={member.image || "/images/team/placeholder.jpg"}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = "none"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-medium text-sm text-foreground truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
