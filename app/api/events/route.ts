import { NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth"
import { firestore } from "@/lib/firebase"
import { collection, doc, setDoc, getDocs, deleteDoc, query, where, getDoc, updateDoc } from "firebase/firestore"

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    let eventsQuery = collection(firestore, "events")
    
    // If club user, strict filtering via query
    if (session.role === "club") {
      eventsQuery = query(collection(firestore, "events"), where("mandram", "==", session.mandram)) as any
    } else {
      // If admin and requested specific mandram
      const mandramQuery = req.nextUrl.searchParams.get("mandram")
      if (mandramQuery && mandramQuery !== "all") {
        eventsQuery = query(collection(firestore, "events"), where("mandram", "==", mandramQuery)) as any
      }
    }

    const snapshot = await getDocs(eventsQuery)
    const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    return NextResponse.json(events)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const body = await req.json()
    
    if (session.role === "club" && body.mandram !== session.mandram) {
      return NextResponse.json({ error: "Unauthorized to manage this Mandram" }, { status: 403 })
    }

    const eventId = Math.random().toString(36).substring(7)
    const newEvent = {
      id: eventId,
      mandram: body.mandram,
      title: body.title,
      description: body.description,
      date: body.date,
      image: body.image,
      type: body.type, // auto-classified on frontend
      createdAt: new Date().toISOString()
    }

    const eventRef = doc(firestore, "events", eventId)
    await setDoc(eventRef, newEvent)

    return NextResponse.json(newEvent)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const eventId = req.nextUrl.searchParams.get("id")
    if (!eventId) return NextResponse.json({ error: "Event ID required" }, { status: 400 })

    const eventRef = doc(firestore, "events", eventId)
    const eventSnap = await getDoc(eventRef)

    if (!eventSnap.exists()) return NextResponse.json({ error: "Event not found" }, { status: 404 })

    const eventData = eventSnap.data()
    if (session.role !== "admin" && eventData.mandram !== session.mandram) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await req.json()
    const updates: Record<string, any> = {}
    if (body.title !== undefined) updates.title = body.title
    if (body.date !== undefined) updates.date = body.date
    if (body.description !== undefined) updates.description = body.description
    if (body.image !== undefined) updates.image = body.image
    if (body.type !== undefined) updates.type = body.type
    updates.updatedAt = new Date().toISOString()

    await updateDoc(eventRef, updates)

    return NextResponse.json({ success: true, id: eventId, ...eventData, ...updates })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const eventId = req.nextUrl.searchParams.get("id")
    if (!eventId) return NextResponse.json({ error: "Event ID required" }, { status: 400 })

    const eventRef = doc(firestore, "events", eventId)
    const eventSnap = await getDoc(eventRef)

    if (!eventSnap.exists()) return NextResponse.json({ error: "Event not found" }, { status: 404 })

    const eventData = eventSnap.data()
    
    if (session.role !== "admin" && eventData.mandram !== session.mandram) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    await deleteDoc(eventRef)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
