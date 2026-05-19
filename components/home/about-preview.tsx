import { ChairmanCard } from "@/components/shared/chairman-card"

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* About Text */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              வாகை தமிழ்ச்சங்கம் - அறிமுகம்
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="leading-relaxed text-pretty">
                தமிழன்னையின் மணிமகுடத்தில் மற்றுமொரு மாணிக்கமாய் மிளிர்கிறது நமது வாகை தமிழ்ச்சங்கம். 
                தமிழக அரசு அனுமதி பெற்று, தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் 
                சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலையும் வளர்த்தலையும் 
                மேம்படுத்துதலையும் நோக்கமாகக்கொண்டு வாகை தமிழ்ச்சங்கம் இயங்கி வருகிறது.
              </p>
              <p className="leading-relaxed text-pretty">
                நமது வாகை தமிழ்ச்சங்கம், தமிழ்நாடு அரசு மற்றும் இந்திய அரசின் மேலும் பல செயல்திட்டங்களின் 
                கீழும் அனுமதி பெற்ற தன்னார்வலர், தமிழ்சார்ந்த சமூக சேவை நோக்கம் கொண்ட அமைப்பாகும். 
                மதுரை உலக தமிழ்ச் சங்கத்தின் அதிகாரபூர்வ உறுப்பினராக இணைந்து மட்டுமின்றி, 
                உள்நாட்டு & பன்னாட்டு அளவிலான பலதரப்பட்ட மக்கள் வயது வேறுபாடின்றி நமது வாகை தமிழ்ச்சங்கத்தில் 
                இணைந்து தத்தமது திறன்களை மேம்படுத்தவும் வெளிக்கொணரவுமான களமாகத் திகழ்ந்து வருகிறது.
              </p>
            </div>
          </div>

          {/* Chairman Card */}
          <div className="lg:col-span-1">
            <ChairmanCard />
          </div>
        </div>
      </div>
    </section>
  )
}
