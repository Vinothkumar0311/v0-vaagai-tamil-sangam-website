import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { getAssetPath } from "@/lib/paths"

export const metadata: Metadata = {
  title: "ஆதரவு நல்குக | Sponsorship & Donations",
  description: "வாகை தமிழ்ச்சங்கத்தின் அறப்பணிகளுக்கு நிதி வழங்கி ஆதரவு நல்குக. 80G வரி விலக்கு உண்டு.",
}

export default function SponsorshipPage() {
  return (
    <PageShell>
      <PageHeader
        title="ஆதரவு நல்குக"
        description="தமிழ்ப் பணிகளுக்கு நிதி வழங்கி ஆதரவு நல்குக | Support the eternity of Tamil"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-3xl border border-primary/10 p-6 md:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Inspiring Quotes & 80G Approvals */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="px-3 py-1 bg-gold/15 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-gold/20">
                    Sponsorship & Support | ஆதரவு நல்குக
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-4 text-primary leading-tight">
                    தமிழுக்குச் செய்யும் தொண்டு, உங்களின் அறப்பணி!
                  </h2>
                </div>
                
                <div className="space-y-5 text-foreground/80 leading-relaxed">
                  <p className="italic text-base md:text-lg border-l-4 border-gold pl-4 text-primary/90 font-medium py-1">
                    "மொழி என்பது வெறும் சொற்கள் அல்ல; அது நமது அடையாளம். பண்பாடு என்பது வெறும் வரலாறு அல்ல; அது நமது வேர்."
                  </p>
                  
                  <p className="text-justify text-sm md:text-base">
                    கடந்த காலப் பெருமைகளைப் பேசுவதோடு நின்றுவிடாமல், தமிழின் எதிர்காலத்தை உலக அரங்கில் நிலைநிறுத்த வாகை தமிழ்ச்சங்கம் அயராது உழைத்து வருகிறது. கீழடி அறிவியல் மரபுகளை அடுத்த தலைமுறைக்குக் கொண்டு சேர்ப்பது முதல், உலகெங்கும் வாழும் குழந்தைகளுக்கு எளிய முறையில் தமிழ் கற்பிப்பது வரை பல உன்னதப் பணிகளை முன்னெடுத்து வருகிறோம்.
                  </p>
                  
                  <p className="text-justify text-sm md:text-base font-semibold text-primary">
                    நம் தாய்மொழி காலங்களைக் கடந்து கம்பீரமாய் வாழ, உங்களின் பேராதரவு தேவை. நீங்கள் வழங்கும் ஒவ்வொரு ரூபாயும் தமிழ் அடையாளத்தைக் காக்கும் அறப்பணி!
                  </p>
                </div>

                <div className="h-px bg-slate-200 my-6" />

                <div className="space-y-4">
                  <p className="italic text-xs md:text-sm text-muted-foreground text-justify leading-relaxed">
                    "At Vaagai Tamilsangam, we don’t just praise our glorious past—we build its future. From digitalizing ancient Tamil literatures to funding modern research in Tamil science and empowering the next generation of global Tamil scholars, we ensure our language remains vibrant, modern, and unstoppable. To keep our legacy thriving in the modern world, we need your support. Your contribution is an investment in the eternity of Tamil."
                  </p>
                </div>

                {/* Tax Exemption Notice (12A & 80G Certified) */}
                <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-gold text-lg">🛡️</span>
                    <h4 className="font-bold text-sm md:text-base text-primary uppercase tracking-wider">வருமான வரி விலக்கு அங்கீகாரம் (80G Tax Exemption)</h4>
                  </div>
                  
                  <p className="text-xs md:text-sm text-foreground/85 leading-relaxed text-justify">
                    தமிழுக்குச் செய்யும் தொண்டு, உங்களின் வருமான வரிச் சேமிப்பிற்கும் வழிவகுக்கிறது. வாகை தமிழ்ச்சங்கம் மத்திய அரசின் <strong className="text-primary">12A மற்றும் 80G</strong> அங்கீகாரங்களைப் பெற்ற அமைப்பாகும். நீங்கள் வழங்கும் நன்கொடைகளுக்கு வருமான வரிச் சட்டம் பிரிவு 80G-ன் கீழ் வரி விலக்கு பெறலாம்.
                  </p>
                  
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic text-justify border-t border-primary/10 pt-3 mt-2">
                    Your pride in your roots now comes with financial smartness. Vaagai Tamilsangam is a registered body with 12A and 80G approvals. Every contribution you make entitles you to a tax deduction under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Direct Bank Transfer Card & QR */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6 space-y-6 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full -z-10" />
                  
                  <h3 className="font-bold text-lg text-primary border-b border-primary/10 pb-3 flex items-center gap-2">
                    🏦 வங்கி கணக்கு விவரங்கள் (Bank Details)
                  </h3>

                  <div className="space-y-4">
                    {/* Account Name */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">கணக்கு பெயர் / Account Name</span>
                      <span className="text-sm md:text-base font-bold text-primary tracking-wide block bg-white px-3 py-2 rounded-lg border border-primary/10 select-all shadow-sm">
                        VAAGAI TAMILSANGAM
                      </span>
                    </div>

                    {/* Account Number */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">கணக்கு எண் / Account No</span>
                      <span className="text-sm md:text-base font-mono font-extrabold text-gold tracking-wider block bg-white px-3 py-2 rounded-lg border border-primary/10 select-all shadow-sm">
                        110089948814
                      </span>
                    </div>

                    {/* IFSC */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">IFSC குறியீடு / IFSC Code</span>
                      <span className="text-sm md:text-base font-mono font-extrabold text-primary tracking-wider block bg-white px-3 py-2 rounded-lg border border-primary/10 select-all shadow-sm">
                        CNRB0016310
                      </span>
                    </div>

                    {/* Bank Branch */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">வங்கி & கிளை / Bank & Branch</span>
                      <span className="text-sm md:text-base font-semibold text-foreground/90 block bg-white px-3 py-2 rounded-lg border border-primary/10 shadow-sm">
                        Canara Bank, Mallur Branch
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-primary/10 pt-4 text-center">
                    <span className="text-xs text-muted-foreground block mb-3 font-semibold">— Or scan the QR below —</span>
                    
                    {/* Real UPI Payment QR Code */}
                    <div className="mx-auto w-44 h-44 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg border border-primary/10">
                      <div className="relative w-full h-full">
                        <Image
                          src={getAssetPath("/pay.png")}
                          alt="Vaagai Tamilsangam UPI QR Code"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-2 font-medium">
                      Scan via GPay, PhonePe or Paytm
                    </p>
                  </div>
                </div>

                {/* Note / Instruction */}
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl text-xs leading-relaxed text-foreground/80 space-y-2 text-justify">
                  <p>
                    <strong>குறிப்பு:</strong> நிதியை மாற்றிய பிறகு, உங்களது பரிவர்த்தனை ரசீது மற்றும் நிரந்தர வங்கிக் கணக்கு எண் (PAN Card) விவரங்களை <a href="mailto:vaagaitamilsangam@gmail.com" className="text-primary hover:underline font-extrabold">vaagaitamilsangam@gmail.com</a> என்ற மின்னஞ்சல் முகவரிக்கு அனுப்பவும். அதன் மூலம் உங்களின் 80G வரி விலக்கு சான்றிதழைப் பெற்றுக் கொள்ளலாம்.
                  </p>
                  <p className="italic text-muted-foreground border-t border-primary/10 pt-2">
                    <strong>Note:</strong> After making a transfer, please email your transaction receipt along with your PAN Card details to <a href="mailto:vaagaitamilsangam@gmail.com" className="text-primary hover:underline font-bold">vaagaitamilsangam@gmail.com</a> to receive your 80G Tax Exemption Certificate.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
