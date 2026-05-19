import Image from "next/image"

export function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/deity/tamil-thaai.jpg"
              alt="Tamil cultural imagery"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="section-heading text-left">நோக்கு</h2>
            <p className="text-text-secondary mb-6">
              தமிழ் மொழி, இலக்கியம், பண்பாட்டை உலகளாவிய அளவில் பரப்பி, தமிழ்
              கலாச்சாரத்தைப் பாதுகாத்து வளர்க்கும் நோக்கு.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">விஷயம்</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span>
                  தமிழ் மொழி, இலக்கியம், அறிவியல் ஆகியவற்றை வளர்க்க
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span>
                  தமிழ் பண்பாட்டை உலக சமூகத்திற்கு அறிமுகப்படுத்த
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span>
                  தமிழ் ஞான பாரம்பரியத்தை அடுத்த தலைமுறையுக்கு கொடுத்தளிக்க
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                <span>
                  தமிழ் மக்களுக்கு தமிழ் கல்வி மற்றும் பணிப்பயிற்சி வழங்க
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
