import { PageShell } from "@/components/layout/page-shell"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { VisionMission } from "@/components/home/vision-mission"
import { ActivitiesSection } from "@/components/home/activities-section"
import { RecognitionsSection } from "@/components/home/recognitions-section"
import { TeamPreview } from "@/components/home/team-preview"

export default function HomePage() {
  return (
    <PageShell>
        <HeroSection />
        <AboutPreview />
        <VisionMission />
        <ActivitiesSection />
        <RecognitionsSection />
        <TeamPreview />
    </PageShell>
  )
}
