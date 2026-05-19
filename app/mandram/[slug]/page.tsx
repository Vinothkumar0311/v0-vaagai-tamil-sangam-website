import { Metadata } from "next"
import { notFound } from "next/navigation"
import { mandrams, Mandram } from "@/lib/mandramData"
import { MandramHeader } from "@/components/mandram/MandramHeader"
import { MandramSection } from "@/components/mandram/MandramSection"
import { EventsSection } from "@/components/mandram/EventsSection"
import { Footer } from "@/components/layout/footer"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Pre-generate all mandram slug pages at build time for static export
export async function generateStaticParams() {
  return [
    { slug: "panuval" },
    { slug: "mazhalai" },
    { slug: "magalir" },
    { slug: "kural" },
    { slug: "manavar" },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const mandram = mandrams[slug]
  if (!mandram) return { title: "Not Found" }

  return {
    title: `${mandram.title} | வாகை தமிழ்ச்சங்கம்`,
    description: mandram.description,
  }
}

export default async function MandramIndividualPage({ params }: PageProps) {
  const { slug } = await params
  const mandramData = mandrams[slug]

  if (!mandramData) {
    notFound()
  }

  const mandram = mandramData as Mandram

  // NOTE: No server-side Firestore fetch here — we use static export (output: "export")
  // which runs in GitHub Pages without a server. Events are loaded in real-time
  // client-side by EventsSection via Firestore onSnapshot.
  // Static mandram.events are used as a fallback if Firestore hasn't connected yet.

  return (
    <div className="flex flex-col min-h-screen">
      <MandramHeader
        mandramTitle={mandram.title}
        mandramLogo={mandram.logo}
      />

      <main className="flex-grow">
        <MandramSection
          title={mandram.title}
          objective={mandram.objective}
          features={mandram.features}
          image={mandram.banner}
          themeColor={mandram.themeColor}
        />

        {/*
          EventsSection subscribes to Firestore in real-time on the client.
          It starts with an empty state and instantly fetches live DB events.
        */}
        <EventsSection
          mandramSlug={slug}
          initialEvents={[]}
        />
      </main>

      <Footer />
    </div>
  )
}
