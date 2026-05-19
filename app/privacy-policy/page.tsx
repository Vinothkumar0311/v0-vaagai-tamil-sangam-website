import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { PageHeader } from "@/components/shared/page-header"
import { Shield, Lock, Eye, FileText, Globe, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | வாகை தமிழ்ச்சங்கம்",
  description: "Vaagai Tamilsangam Technical Privacy Policy - Information about how we handle user data.",
}

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHeader
        title={
          <div className="flex flex-col gap-2">
            <span>தனியுரிமைக் கொள்கை</span>
            <span className="text-xl md:text-2xl font-medium opacity-80">Privacy Policy</span>
          </div>
        }
        description="கடைசியாகப் புதுப்பிக்கப்பட்ட தேதி / Last Updated: 10 May 2026"
      />

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Data Safety</h3>
                <p className="text-xs text-slate-500">Your information is protected with industry-standard encryption.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Secure Access</h3>
                <p className="text-xs text-slate-500">Only authorized administrators can access sensitive data.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Transparency</h3>
                <p className="text-xs text-slate-500">We are clear about what we collect and why we use it.</p>
              </div>
            </div>

            {/* Tamil Section */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden mb-12">
              <div className="bg-primary p-8 md:p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">வாகை தமிழ்ச்சங்கம் – தொழில்நுட்ப தனியுரிமைக் கொள்கை</h2>
                <p className="opacity-80 text-sm md:text-base leading-relaxed">
                  வாகை தமிழ்ச்சங்கம் உருவாக்கிய கைப்பேசி செயலி, பயனர்களின் தகவல் பாதுகாப்பு மற்றும் தனியுரிமையை மிகுந்த முக்கியத்துவத்துடன் கையாள்கிறது.
                </p>
              </div>
              <div className="p-8 md:p-12 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <FileText className="w-5 h-5" /> 1. சேகரிக்கப்படும் தொழில்நுட்ப தகவல்கள்
                  </h3>
                  <div className="pl-7 space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">1.1 பயனர் வழங்கும் தகவல்கள்</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 list-disc pl-5">
                        <li>பெயர்</li>
                        <li>மின்னஞ்சல் முகவரி</li>
                        <li>கைபேசி எண்</li>
                        <li>சுயவிவரப் படம்</li>
                        <li>கல்வி / அமைப்பு தொடர்பான விவரங்கள்</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">1.2 தானாக சேகரிக்கப்படும் தகவல்கள்</h4>
                      <ul className="space-y-1 text-slate-600 list-disc pl-5">
                        <li>சாதன வகை (Device Model)</li>
                        <li>இயங்குதளம் மற்றும் பதிப்பு (Android/iOS Version)</li>
                        <li>இணைய நெறிமுறை முகவரி ( IP Address )</li>
                        <li>செயலி பயன்பாட்டு புள்ளிவிவரங்கள்</li>
                        <li>செயலிழப்புப் பதிவுகள் மற்றும் பிழை அறிக்கைகள்</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">1.3 அனுமதிகள் (Permissions)</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 list-disc pl-5">
                        <li>இணைய அணுகல்</li>
                        <li>கேமரா (Profile Upload / QR Scan)</li>
                        <li>கோப்பக அணுகல்</li>
                        <li>அறிவிப்புகள்</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Globe className="w-5 h-5" /> 2. தரவு பயன்பாடு
                  </h3>
                  <p className="text-slate-600 pl-7">சேகரிக்கப்படும் தகவல்கள் பின்வரும் தொழில்நுட்ப மற்றும் செயல்பாட்டு நோக்கங்களுக்காக பயன்படுத்தப்படுகின்றன:</p>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc">
                    <li>பயனர் அங்கீகாரம் (Authentication)</li>
                    <li>கிளவுட் தரவுத்தள ஒத்திசைவு</li>
                    <li>செயலி செயல்திறன் மேம்பாடு</li>
                    <li>செயற்கை நுண்ணறிவு (AI) மற்றும் தரவுப் பகுப்பாய்வு</li>
                    <li>பாதுகாப்பு கண்காணிப்பு மற்றும் மோசடி தடுப்பு</li>
                    <li>தூண்டுதல் அறிவிப்பு அனுப்புதல்</li>
                    <li>பிழை கண்டறிதல் மற்றும் வழுநீக்கம்</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Lock className="w-5 h-5" /> 3. தரவு சேமிப்பு மற்றும் பாதுகாப்பு
                  </h3>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc">
                    <li>அனைத்து தரவுகளும் பாதுகாப்பான மெய்நிகராக்கப்பட்ட கணினி வளங்களில் சேமிக்கப்படலாம்.</li>
                    <li>தகவல் பரிமாற்றம் குறியாக்கம் மூலம் மேற்கொள்ளப்படும் (HTTPS/SSL).</li>
                    <li>கடவுச்சொற்கள் தற்சார்பு முகவரியாக்கம் (Hashing) முறையில் பாதுகாக்கப்படும்.</li>
                    <li>அங்கீகரிக்கப்பட்ட நிர்வாகிகளுக்கு மட்டுமே தரவு அணுகல் வழங்கப்படும்.</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Info className="w-5 h-5" /> 4. மூன்றாம் தரப்பு சேவைகள்
                  </h3>
                  <div className="pl-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Google Firebase", "Firebase Auth", "Cloud Messaging", "Google Analytics", "Cloud Storage", "AI APIs"].map((service) => (
                      <div key={service} className="px-3 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100 text-center">
                        {service}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 pl-7 italic">இந்த சேவைகள் தங்களது தனியுரிமைக் கொள்கைகளின் அடிப்படையில் தகவல்களை நிர்வகிக்கலாம்.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Shield className="w-5 h-5" /> 5. Cookies மற்றும் Tracking Technologies
                  </h3>
                  <p className="text-slate-600 pl-7">செயலி அல்லது அதனுடன் இணைக்கப்பட்ட இணைய சேவைகள் கீழ்க்கண்டவற்றைப் பயன்படுத்தலாம்:</p>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc">
                    <li>Cookies</li>
                    <li>Session Tokens</li>
                    <li>Device Identifiers</li>
                    <li>Analytics Tracking Scripts</li>
                  </ul>
                  <p className="text-sm text-slate-400 pl-7 italic">இவை பயனர் அனுபவத்தை மேம்படுத்தவும் செயல்திறன் ஆய்வுக்கும் பயன்படுத்தப்படுகின்றன.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Eye className="w-5 h-5" /> 6. பயனரின் உரிமைகள்
                  </h3>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc">
                    <li>தங்களது தகவல்களை அணுகுதல்</li>
                    <li>திருத்துதல்</li>
                    <li>கணக்கை நீக்க கோருதல்</li>
                    <li>அறிவிப்புகளை முடக்குதல்</li>
                    <li>தரவு பயன்பாட்டிற்கு எதிர்ப்பு தெரிவித்தல்</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Shield className="w-5 h-5" /> 7. குழந்தைகள் தொடர்பான கொள்கை
                  </h3>
                  <p className="text-slate-600 pl-7">
                    13 வயதிற்குக் குறைவான குழந்தைகளிடமிருந்து தனிப்பட்ட தகவல்கள் சேகரிக்கப்படுவதில்லை. அத்தகைய தகவல் சேகரிக்கப்பட்டது கண்டறியப்பட்டால் உடனடியாக நீக்கப்படும்.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <FileText className="w-5 h-5" /> 8. கொள்கை மாற்றங்கள்
                  </h3>
                  <p className="text-slate-600 pl-7">
                    இந்த தனியுரிமைக் கொள்கை தொழில்நுட்ப மேம்பாடுகள் அல்லது சட்ட விதிமுறைகளின் அடிப்படையில் காலந்தோறும் புதுப்பிக்கப்படலாம்.
                  </p>
                </div>

                <div className="p-8 bg-primary rounded-3xl text-white">
                  <h4 className="font-bold mb-4">9. தொடர்புக்கு</h4>
                  <div className="space-y-2 text-sm opacity-90">
                    <p className="font-bold">வாகை தமிழ்ச்சங்கம்</p>
                    <p>மின்னஞ்சல்: <a href="mailto:vaagaitamilsangam@gmail.com" className="text-white hover:text-gold-light underline underline-offset-4 decoration-white/30 transition-colors">vaagaitamilsangam@gmail.com</a></p>
                    <p>இணையதளம்: <a href="https://vaagaitamilsangam.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-light underline underline-offset-4 decoration-white/30 transition-colors">vaagaitamilsangam.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* English Section */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
              <div className="bg-slate-900 p-8 md:p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Vaagai Tamil Sangam – Technical Privacy Policy</h2>
                <p className="opacity-80 text-sm md:text-base leading-relaxed">
                  Vaagai Tamil Sangam values the privacy and security of users of our mobile application. This policy explains our data handling practices.
                </p>
              </div>
              <div className="p-8 md:p-12 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2 font-mono">
                    1. Information We Collect
                  </h3>
                  <div className="pl-7 space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">1.1 User-Provided Information</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 list-disc pl-5">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Mobile number</li>
                        <li>Profile photo</li>
                        <li>Educational details</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">1.2 Automatically Collected Information</h4>
                      <ul className="space-y-1 text-slate-600 list-disc pl-5">
                        <li>Device model and hardware information</li>
                        <li>Operating system and version</li>
                        <li>IP address</li>
                        <li>Usage analytics and interaction logs</li>
                        <li>Crash reports and diagnostics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">2. Purpose of Data Collection</h3>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc">
                    <li>User authentication and account management</li>
                    <li>Cloud synchronization and backup</li>
                    <li>Application performance optimization</li>
                    <li>AI-driven analytics and personalization</li>
                    <li>Security monitoring and fraud prevention</li>
                    <li>Push notification delivery</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">3. Data Storage and Security</h3>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc text-sm">
                    <li>User data may be stored on secure cloud servers.</li>
                    <li>All communications are protected using HTTPS/SSL encryption.</li>
                    <li>Passwords may be encrypted or hashed before storage.</li>
                    <li>Access to sensitive data is restricted to authorized administrators only.</li>
                    <li>Industry-standard security practices are implemented to prevent unauthorized access, misuse, or disclosure.</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">4. Third-Party Services</h3>
                  <p className="text-slate-600 pl-7">The App may integrate third-party platforms and APIs such as:</p>
                  <div className="pl-7 grid grid-cols-2 gap-4 mt-4">
                    {["Google Firebase", "Firebase Auth", "Cloud Messaging", "Google Analytics", "Cloud Storage", "AI APIs"].map((service) => (
                      <div key={service} className="px-3 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-100 text-center">
                        {service}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 pl-7 italic">These services may collect and process information according to their respective privacy policies.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">5. Cookies and Tracking Technologies</h3>
                  <p className="text-slate-600 pl-7 text-sm">The App or connected web services may use:</p>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc text-sm">
                    <li>Cookies</li>
                    <li>Session tokens</li>
                    <li>Device identifiers</li>
                    <li>Analytics tracking technologies</li>
                  </ul>
                  <p className="text-sm text-slate-400 pl-7 italic">These technologies help improve user experience, monitor performance, and analyze engagement.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">6. User Rights</h3>
                  <p className="text-slate-600 pl-7 text-sm">Users have the right to:</p>
                  <ul className="pl-12 space-y-2 text-slate-600 list-disc text-sm">
                    <li>Access their personal information</li>
                    <li>Request corrections or updates</li>
                    <li>Delete their account and associated data</li>
                    <li>Disable notifications</li>
                    <li>Object to specific data processing activities</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">7. Children’s Privacy</h3>
                  <p className="text-slate-600 pl-7 text-sm">
                    The App does not knowingly collect personal information from children under the age of 13. If such information is identified, it will be deleted promptly.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-primary font-mono">8. Changes to This Policy</h3>
                  <p className="text-slate-600 pl-7 text-sm">
                    This Privacy Policy may be updated periodically to reflect legal, technical, or operational changes.
                  </p>
                </div>

                <div className="p-8 bg-slate-900 rounded-3xl text-white">
                  <h4 className="font-bold mb-4 font-mono">9. Contact Information</h4>
                  <div className="space-y-2 text-sm opacity-80">
                    <p className="font-bold">Vaagai Tamil Sangam</p>
                    <p>Email: <a href="mailto:vaagaitamilsangam@gmail.com" className="text-gold-light hover:text-white underline underline-offset-4 decoration-gold-light/30 transition-all">vaagaitamilsangam@gmail.com</a></p>
                    <p>Website: <a href="https://vaagaitamilsangam.com" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-white underline underline-offset-4 decoration-gold-light/30 transition-all">vaagaitamilsangam.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
