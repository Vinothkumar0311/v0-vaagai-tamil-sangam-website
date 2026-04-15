import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { teamMembers } from "@/data/team"

export function TeamPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            எங்கள் அணி
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            வாகை தமிழ்ச்சங்கத்தின் பொறுப்பாளர்கள்
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-gold/10">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
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
  )
}
