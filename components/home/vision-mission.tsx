import Image from "next/image"

const visionPoints = [
  "தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.",
  "வாகை தமிழ்ச்சங்கம் தமிழின் கலாச்சார-மொழியியல் பாரம்பரியத்தில் ஆர்வமுள்ள அனைவரையும் ஒன்றிணைக்கும் நோக்கத்துடன் தொண்டாற்றும் ஒர் இலாப நோக்கற்ற, மதச்சார்பற்ற, கலாச்சார-சமூக அமைப்பாகும்.",
  "கற்றல், கற்பித்தல், எழுதுதல், வாசித்தல் போன்ற திறன்களுக்குப் பயிற்சியளித்தலும், வெளிப்படுத்துதலும் மேம்படுத்துதலும் செய்தல்.",
  "கருத்தரங்குகள், வினாடி வினாக்கள், ஆசிரிய-மாணவ மேம்பாட்டுத் திட்டங்கள், ஆய்வரங்கங்கள் ஆகிய நிகழ்வுகள் மூலம் தமிழ் வளர்ச்சிப் பணிகளில் ஈடுபடுதல்.",
  "தலைசிறந்த தமிழ் ஆளுமைகள், சிறந்த கலைஞர்கள், துறைசார், திறன்சார்ந்த வல்லுநர்கள், அறிஞர்கள், ஆய்வாளர்கள், தன்னார்வலர்கள் ஆகியோருக்குப் பட்டங்களும் விருதுகளும் வழங்கிப் பெருமைப்படுத்துதல்."
]

export function VisionMission() {
  return (
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
            {/* Vision */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                நோக்கு
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் 
                அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.
              </p>
            </div>

            {/* Mission */}
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
  )
}
