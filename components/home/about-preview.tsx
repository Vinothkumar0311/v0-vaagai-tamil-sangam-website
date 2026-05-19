import { ChairmanCard } from "@/components/shared/chairman-card"

export function AboutPreview() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-3 items-start">
          {/* About Text */}
          <div className="lg:col-span-2 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-5 md:mb-6 leading-tight">
              வாகை தமிழ்ச்சங்கம் - அறிமுகம்
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/80 text-balance">
                தமிழன்னையின் மணிமகுடத்தில் மற்றுமொரு மாணிக்கமாய் மிளிர்கிறது நமது வாகை தமிழ்ச்சங்கம். 
                தமிழக அரசு அனுமதி பெற்று, தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் 
                சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலையும் வளர்த்தலையும் 
                மேம்படுத்துதலையும் நோக்கமாகக்கொண்டு வாகை தமிழ்ச்சங்கம் இயங்கி வருகிறது.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/80 text-balance">
                நமது வாகை தமிழ்ச்சங்கம், தமிழ்நாடு அரசு மற்றும் இந்திய அரசின் மேலும் பல செயல்திட்டங்களின் 
                கீழும் அனுமதி பெற்ற தன்னார்வலர், தமிழ்சார்ந்த சமூக சேவை நோக்கம் கொண்ட அமைப்பாகும். 
                மதுரை உலக தமிழ்ச் சங்கத்தின் அதிகாரபூர்வ உறுப்பினராக இணைந்து மட்டுமின்றி, 
                உள்நாட்டு & பன்னாட்டு அளவிலான பலதரப்பட்ட மக்கள் வயது வேறுபாடின்றி நமது வாகை தமிழ்ச்சங்கத்தில் 
                இணைந்து தத்தமது திறன்களை மேம்படுத்தவும் வெளிக்கொணரவுமான களமாகத் திகழ்ந்து வருகிறது.
              </p>
            </div>
          </div>

          {/* Chairman Card */}
          <div className="lg:col-span-1 w-full">
            <ChairmanCard />
          </div>
        </div>
      </div>
    </section>
  )
}
