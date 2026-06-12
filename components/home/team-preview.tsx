"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { allMembers, TeamMember } from "@/data/team"
import { getAssetPath } from "@/lib/paths"

function MemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = React.useState(false)

  const imageSrc = member.image && !imageError
    ? getAssetPath(member.image)
    : getAssetPath("/placeholder-user.jpg")

  return (
    <Card className="group/card relative w-full overflow-hidden border border-[#E8EFE9] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col">
      <div className="relative aspect-[4/5] w-full bg-gray-50 overflow-hidden">
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          onError={() => setImageError(true)}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>
      <div className="p-4 bg-[#FDFCF6] border-t border-[#E8EFE9] flex items-center justify-center text-center min-h-[4.5rem]">
        <h3 className="text-sm md:text-base font-bold text-[#004D40] leading-snug group-hover/card:text-primary transition-colors">
          {member.name}
        </h3>
      </div>
    </Card>
  )
}

interface SectionProps {
  title: string
  highlight: string
  subtitle: string
  members: TeamMember[]
  id: string
}

function MemberSection({ title, highlight, subtitle, members, id }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-28 bg-[#FDFCF6] relative overflow-hidden border-t border-[#F0EDE4]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-[#004D40] mb-4 leading-tight">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007084] to-primary">{highlight}</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function TeamPreview() {
  return (
    <>
      <MemberSection
        id="vaaria-uruppinargal"
        title="வாரிய"
        highlight="உறுப்பினர்கள்"
        subtitle="வாகை தமிழ்ச்சங்கத்தின் வாரிய உறுப்பினர்கள்"
        members={allMembers}
      />
    </>
  )
}
