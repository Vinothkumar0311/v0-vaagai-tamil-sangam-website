import { teamMembers } from "@/data/team"
import { TeamMemberCard } from "@/components/shared/team-member-card"

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
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
