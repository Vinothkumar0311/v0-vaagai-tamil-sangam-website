import { Metadata } from "next"
import { notFound } from "next/navigation"
import { mandrams, Mandram } from "@/lib/mandramData"
import { firestore } from "@/lib/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { MandramHeader } from "@/components/mandram/MandramHeader"
import { MandramSection } from "@/components/mandram/MandramSection"
import { EventsSection } from "@/components/mandram/EventsSection"
import { Footer } from "@/components/layout/footer"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return Object.keys(mandrams).map((slug) => ({
    slug: slug,
  }))
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

  // Server-side fetch for initial data (fast first paint / SSR)
  // The client-side EventsSection will take over with a real-time Firestore listener
  let initialEvents: any[] = []
  try {
    const eventsQuery = query(collection(firestore, "events"), where("mandram", "==", slug))
    const snapshot = await getDocs(eventsQuery)
    initialEvents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    initialEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Failed fetching initial events:", error)
  }

  // Fallback to static mandram data if no DB events found yet
  const fallbackEvents = initialEvents.length > 0 ? initialEvents : mandram.events

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
          Pass both the mandram slug (for real-time Firestore listener)
          and initial server-fetched events (to avoid flicker on first load)
        */}
        <EventsSection
          mandramSlug={slug}
          initialEvents={fallbackEvents}
        />
      </main>

      <Footer />
    </div>
  )
}
