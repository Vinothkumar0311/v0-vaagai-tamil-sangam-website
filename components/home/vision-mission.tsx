import Image from "next/image"
import { getAssetPath } from "@/lib/paths"

const visionPoints = [
  "தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.",
  "வாகை தமிழ்ச்சங்கம் தமிழின் கலாச்சார-மொழியியல் பாரம்பரியத்தில் ஆர்வமுள்ள அனைவரையும் ஒன்றிணைக்கும் நோக்கத்துடன் தொண்டாற்றும் ஒர் இலாப நோக்கற்ற, மதச்சார்பற்ற, கலாச்சார-சமூக அமைப்பாகும்.",
  "கற்றல், கற்பித்தல், எழுதுதல், வாசித்தல் போன்ற திறன்களுக்குப் பயிற்சியளித்தலும், வெளிப்படுத்துதலும் மேம்படுத்துதலும் செய்தல்.",
  "கருத்தரங்குகள், வினாடி வினாக்கள், ஆசிரிய-மாணவ மேம்பாட்டுத் திட்டங்கள், ஆய்வரங்கங்கள் ஆகிய நிகழ்வுகள் மூலம் தமிழ் வளர்ச்சிப் பணிகளில் ஈடுபடுதல்.",
  "தலைசிறந்த தமிழ் ஆளுமைகள், சிறந்த கலைஞர்கள், துறைசார், திறன்சார்ந்த வல்லுநர்கள், அறிஞர்கள், ஆய்வாளர்கள், தன்னார்வலர்கள் ஆகியோருக்குப் பட்டங்களும் விருதுகளும் வழங்கிப் பெருமைப்படுத்துதல்."
]

export function VisionMission() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 items-start lg:items-center">
          {/* Image - moved below on mobile for better content flow */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[500px] rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg order-2 lg:order-1">
            <Image
              src={getAssetPath("/images/deity/tamil-thaai.jpg")}
              alt="Tamil Thaai"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Vision */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-5 leading-tight">
                நோக்கு
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/80 text-balance">
                தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் 
                அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-5 md:mb-6 leading-tight">
                போக்கு
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-gold" />
                    <p className="text-base sm:text-lg leading-relaxed text-foreground/80 text-balance">{point}</p>
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
