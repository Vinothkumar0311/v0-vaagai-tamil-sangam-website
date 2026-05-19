import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ActivitiesSection() {
  const activities = [
    {
      title: "தமிழ் போட்டிகள்",
      description: "திறன் மற்றும் சிறந்ததை சோதிக்கும் மாসிக போட்டிகள்",
      icon: "🏆",
    },
    {
      title: "கலை நிகழ்ச்சிகள்",
      description: "தமிழ் கலா சொரூபங்களான நாடகம், பாடல் மற்றும் நடனம்",
      icon: "🎭",
    },
    {
      title: "பயிற்சி திட்டங்கள்",
      description: "வேலை உருவாக்க பயிற்சி மற்றும் வளர்ச்சி திட்டங்கள்",
      icon: "📚",
    },
    {
      title: "அறிவியல் மாதிரிகள்",
      description:
        "தமிழ் கல்வி மூலம் அறிவியல் மூலகூறுகளை புரிந்து கொள்ளுதல்",
      icon: "🔬",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">செயல்பாடுகள்</h2>
        <p className="section-subheading">
          வாகை தமிழ்ச்சங்கம் தமிழ் விருத்தி மற்றும் கலாச்சாரத்தை பாதுகாப்பதற்கான
          பல்வேறு செயல்பாடுகளை நடத்துகிறது.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{activity.icon}</div>
                <CardTitle className="text-lg text-primary">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/activities"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors font-medium"
          >
            அனைத்து செயல்பாடுகளைப் பார்க்கவும்
          </a>
        </div>
      </div>
    </section>
  )
}
