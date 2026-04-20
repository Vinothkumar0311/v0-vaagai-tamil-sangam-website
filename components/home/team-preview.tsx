"use client"

import * as React from "react"
import Image from "next/image"
import { User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { teamMembers, chairman } from "@/data/team"
import { getAssetPath } from "@/lib/paths"

export function TeamPreview() {
  const allMembers = [chairman, ...teamMembers]

  return (
    <section className="py-24 md:py-32 bg-[#FDFCF6] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#004D40] mb-4 leading-tight">
            எங்கள் <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007084] to-primary">அணி</span>
          </h2>
          <p className="text-base text-gray-500 font-medium max-w-xl mx-auto">
            வாகை தமிழ்ச்சங்கத்தின் வளர்ச்சிக்கு உறுதுணையாக இருக்கும் பொறுப்பாளர்கள்
          </p>
        </div>

        {/* Team Grid Layout - 3 per row */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center">
            {allMembers.map((member) => (
              <Card 
                key={member.id}
                className="group/card relative w-full max-w-[280px] overflow-hidden border-none bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[1.8rem] flex flex-col items-center text-center"
              >
                {/* Thin top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-primary/30" />
                
                <CardContent className="p-6 md:p-8 flex flex-col items-center w-full">
                  {/* Portrait Circle - Smaller size */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6 p-1 rounded-full border border-primary/10 group-hover/card:border-primary/30 transition-colors duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-50 flex items-center justify-center relative shadow-inner">
                      {member.image ? (
                        <>
                          <Image
                            src={getAssetPath(member.image)}
                            alt={member.nameEn}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            onError={(e) => {
                              (e.target as any).style.display = 'none'
                            }}
                          />
                          <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                            <User className="w-8 h-8 text-primary/10" />
                          </div>
                        </>
                      ) : (
                        <User className="w-10 h-10 text-primary/10" />
                      )}
                      
                      {member.id === 'chairman' && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-primary text-white text-[7px] font-black uppercase px-2 py-0.5 rounded-full shadow-lg border border-white">
                          Chairman
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#004D40] leading-tight mb-1 group-hover/card:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      {member.nameEn}
                    </p>
                    
                    <div className="h-px w-6 bg-primary/20 mx-auto mb-3" />
                    
                    <p className="text-xs font-bold text-gray-600 leading-snug">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
