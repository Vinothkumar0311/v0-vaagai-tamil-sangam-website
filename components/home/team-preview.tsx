import { Card, CardContent } from "@/components/ui/card"

export function TeamPreview() {
  const teamMembers = [
    { name: "Member One", role: "President", initial: "M" },
    { name: "Member Two", role: "Secretary", initial: "M" },
    { name: "Member Three", role: "Treasurer", initial: "M" },
    { name: "Member Four", role: "Coordinator", initial: "M" },
    { name: "Member Five", role: "Advisor", initial: "M" },
    { name: "Member Six", role: "Mentor", initial: "M" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">நம்முடைய குழு</h2>
        <p className="section-subheading">
          வாகை தமிழ்ச்சங்கத்தின் கட்டுப்பாட்டு குழுவின் சிறந்த உறுப்பினர்கள்
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {member.initial}
                </div>
                <h3 className="font-medium text-foreground truncate">
                  {member.name}
                </h3>
                <p className="text-xs text-text-secondary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-dark transition-colors font-medium"
          >
            முழு குழுவைப் பார்க்கவும்
          </a>
        </div>
      </div>
    </section>
  )
}
