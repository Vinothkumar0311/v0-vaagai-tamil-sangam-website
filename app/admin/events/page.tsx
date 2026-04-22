"use client"

import { useState, useEffect } from "react"
import { mandramsData } from "@/lib/mandramData"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Trash2, Loader2, UploadCloud, ImageIcon, Pencil, X, Check } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
import { driveToImageUrl } from "@/lib/utils"

// ── Component ──────────────────────────────────────────────────────────────


export default function AdminEventsPage() {
  const [events, setEvents] = useState<any[]>([])
  const [session, setSession] = useState<any>(null)

  // Add form state
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [mandram, setMandram] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // Edit modal state
  const [editingEvent, setEditingEvent] = useState<any | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDate, setEditDate] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editFile, setEditFile] = useState<File | null>(null)
  const [editPreviewUrl, setEditPreviewUrl] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  // Loading states
  const [isUploading, setIsUploading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetchSessionAndEvents()
  }, [])

  const fetchSessionAndEvents = async () => {
    try {
      const sessionRes = await fetch("/api/auth/session")
      const sessionData = await sessionRes.json()
      setSession(sessionData.session)

      if (sessionData.session?.role === "club") {
        setMandram(sessionData.session.mandram)
      }

      await fetchEvents()
    } catch {
      toast.error("Failed to authenticate session.")
    }
  }

  const fetchEvents = async () => {
    setIsFetching(true)
    const res = await fetch("/api/events")
    if (res.ok) {
      setEvents(await res.json())
    }
    setIsFetching(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, forEdit = false) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    if (selectedFile.size > 2 * 1024 * 1024) {
      toast.error("Image must be smaller than 2MB")
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    if (forEdit) {
      setEditFile(selectedFile)
      setEditPreviewUrl(objectUrl)
    } else {
      setFile(selectedFile)
      setPreviewUrl(objectUrl)
    }
  }

  const toBase64 = (fileObj: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(fileObj)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
    })

  const uploadToDrive = async (fileObj: File) => {
    const base64 = await toBase64(fileObj)
    const base64Data = base64.split(",")[1]

    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: base64Data, fileName: fileObj.name, contentType: fileObj.type }),
    })

    const data = await res.json()
    if (!data.success) throw new Error(data.error)
    return data.url as string
  }

  // ── Add event ──────────────────────────────────────────────────────────

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !date || !description || !file || (!mandram && session?.role === "admin")) {
      toast.error("Please fill all required fields and select an image.")
      return
    }

    setIsUploading(true)
    let imageUrl = ""

    try {
      toast.loading("Uploading image to Google Drive...", { id: "uploading" })
      imageUrl = await uploadToDrive(file)
      toast.success("Image uploaded!", { id: "uploading" })
    } catch {
      toast.error("Image upload failed.", { id: "uploading" })
      setIsUploading(false)
      return
    }

    const eventDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const type = eventDate.getTime() >= today.getTime() ? "upcoming" : "past"

    try {
      toast.loading("Publishing event...", { id: "publishing" })
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          date,
          description,
          image: imageUrl,
          type,
          mandram: session?.role === "admin" ? mandram : session?.mandram,
        }),
      })

      if (res.ok) {
        setTitle(""); setDate(""); setDescription(""); setFile(null); setPreviewUrl(null)
        if (session?.role === "admin") setMandram("")
        await fetchEvents()
        toast.success("Event published!", { id: "publishing" })
      } else {
        toast.error("Failed to publish event.", { id: "publishing" })
      }
    } catch {
      toast.error("An error occurred", { id: "publishing" })
    } finally {
      setIsUploading(false)
    }
  }

  // ── Open edit modal ────────────────────────────────────────────────────

  const openEdit = (event: any) => {
    setEditingEvent(event)
    setEditTitle(event.title)
    setEditDate(event.date)
    setEditDescription(event.description)
    setEditFile(null)
    setEditPreviewUrl(driveToImageUrl(event.image))
  }

  const closeEdit = () => {
    setEditingEvent(null)
    setEditFile(null)
    setEditPreviewUrl(null)
  }

  // ── Save edit ──────────────────────────────────────────────────────────

  const handleSaveEdit = async () => {
    if (!editTitle || !editDate || !editDescription) {
      toast.error("Please fill all required fields.")
      return
    }
    setIsSaving(true)

    let imageUrl = editingEvent.image

    if (editFile) {
      try {
        toast.loading("Uploading new image...", { id: "editing-upload" })
        imageUrl = await uploadToDrive(editFile)
        toast.success("Image uploaded!", { id: "editing-upload" })
      } catch {
        toast.error("Image upload failed.", { id: "editing-upload" })
        setIsSaving(false)
        return
      }
    }

    const eventDate = new Date(editDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const type = eventDate.getTime() >= today.getTime() ? "upcoming" : "past"

    try {
      toast.loading("Saving changes...", { id: "editing" })
      const res = await fetch(`/api/events?id=${editingEvent.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, date: editDate, description: editDescription, image: imageUrl, type }),
      })

      if (res.ok) {
        await fetchEvents()
        toast.success("Event updated!", { id: "editing" })
        closeEdit()
      } else {
        const err = await res.json()
        toast.error(err.error || "Failed to update.", { id: "editing" })
      }
    } catch {
      toast.error("An error occurred.", { id: "editing" })
    } finally {
      setIsSaving(false)
    }
  }

  // ── Delete ─────────────────────────────────────────────────────────────

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return
    toast.loading("Deleting event...", { id: "deleting" })
    const res = await fetch(`/api/events?id=${id}`, { method: "DELETE" })
    if (res.ok) {
      fetchEvents()
      toast.success("Event deleted.", { id: "deleting" })
    } else {
      toast.error("Failed to delete event", { id: "deleting" })
    }
  }

  const getMandramName = (slug: string) => mandramsData.find(m => m.slug === slug)?.title || slug

  if (!session) return <div className="p-8"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>

  return (
    <div className="space-y-8">
      {/* ── Edit Modal ─────────────────────────────────────────────────── */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="font-bold text-lg text-slate-900">Edit Event</h3>
              <button onClick={closeEdit} className="text-slate-400 hover:text-slate-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              {/* Title */}
              <div className="space-y-2">
                <Label>Event Title</Label>
                <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} placeholder="Event title" />
              </div>
              {/* Date */}
              <div className="space-y-2">
                <Label>Event Date</Label>
                <Input type="date" value={editDate} onChange={e => setEditDate(e.target.value)} />
              </div>
              {/* Description */}
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={editDescription} onChange={e => setEditDescription(e.target.value)} className="min-h-[100px]" />
              </div>
              {/* Image */}
              <div className="space-y-3">
                <Label>Cover Image <span className="text-slate-400 text-xs font-normal">(leave empty to keep existing)</span></Label>
                {editPreviewUrl ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border shadow-sm group">
                    <Image src={editPreviewUrl} alt="Preview" fill className="object-cover" unoptimized />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button type="button" variant="destructive" size="sm" onClick={() => { setEditFile(null); setEditPreviewUrl(null) }}>Change Image</Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                    <input type="file" accept="image/*" onChange={e => handleFileChange(e, true)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-600">Click to upload new image</p>
                    <p className="text-xs text-slate-400 mt-1">JPEG, PNG up to 2MB</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t bg-slate-50/50 rounded-b-2xl">
              <Button variant="outline" onClick={closeEdit} className="flex-1" disabled={isSaving}>Cancel</Button>
              <Button onClick={handleSaveEdit} className="flex-1" disabled={isSaving}>
                {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Saving...</> : <><Check className="w-4 h-4 mr-2" />Save Changes</>}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Page Header ────────────────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Manage Events</h2>
          <p className="text-slate-500 mt-2">Publish your mandram activities securely.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* ── Add Event Form ──────────────────────────────────────────── */}
        <div className="lg:col-span-1 sticky top-24">
          <Card className="border-0 shadow-lg ring-1 ring-slate-100">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6 rounded-t-xl">
              <CardTitle>Add New Event</CardTitle>
              <CardDescription>Fill out the details. Images upload directly to Google Drive.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleAddEvent} className="space-y-5">
                {session?.role === "admin" ? (
                  <div className="space-y-2">
                    <Label htmlFor="mandram">Select Mandram <span className="text-red-500">*</span></Label>
                    <Select value={mandram} onValueChange={setMandram}>
                      <SelectTrigger><SelectValue placeholder="Choose a forum..." /></SelectTrigger>
                      <SelectContent>
                        {mandramsData.map(m => (
                          <SelectItem key={m.slug} value={m.slug}>{m.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label>Assigned Mandram</Label>
                    <Input disabled value={getMandramName(session?.mandram || "")} className="bg-slate-50 font-semibold" />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="title">Event Title <span className="text-red-500">*</span></Label>
                  <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g. இலக்கிய வாசிப்பு" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Event Date <span className="text-red-500">*</span></Label>
                  <Input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Event Description <span className="text-red-500">*</span></Label>
                  <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required placeholder="Enter detailed description..." className="min-h-[100px]" />
                </div>

                <div className="space-y-3">
                  <Label>Event Cover Image <span className="text-red-500">*</span></Label>
                  {previewUrl ? (
                    <div className="relative aspect-video rounded-xl overflow-hidden border shadow-sm group">
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button type="button" variant="destructive" size="sm" onClick={() => { setFile(null); setPreviewUrl(null) }}>Remove</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer w-full relative">
                      <input type="file" accept="image/*" onChange={e => handleFileChange(e)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-slate-600">Click or drag image to upload</p>
                      <p className="text-xs text-slate-400 mt-1">JPEG, PNG up to 2MB</p>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full text-md h-12" disabled={isUploading}>
                  {isUploading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Uploading...</> : "Publish Event"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* ── Events Feed ────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
            <div className="bg-primary/10 p-3 rounded-lg"><ImageIcon className="text-primary w-6 h-6" /></div>
            <div>
              <h3 className="font-bold text-lg">Published Events Feed</h3>
              <p className="text-slate-500 text-sm">Cards appear exactly as they do on the public site.</p>
            </div>
          </div>

          {isFetching ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin w-8 h-8 text-slate-400" /></div>
          ) : events.length === 0 ? (
            <div className="p-12 text-center text-slate-500 border-2 border-dashed rounded-xl bg-slate-50">No published events found.</div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {events.map((event, i) => (
                <div key={event.id || i} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-white border flex flex-col h-full relative group">
                  {/* Image */}
                  <div className="relative aspect-video bg-slate-100">
                    {event.image ? (
                      <Image
                        src={driveToImageUrl(event.image)}
                        alt={event.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300">No Image</div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 text-xs font-bold bg-white text-primary rounded-full shadow-sm">
                        {event.type === "upcoming" ? "Upcoming" : "Past"}
                      </span>
                      {session?.role === "admin" && (
                        <span className="px-2.5 py-1 text-xs font-bold bg-slate-900 text-white rounded-full shadow-sm truncate max-w-[120px]">
                          {getMandramName(event.mandram)}
                        </span>
                      )}
                    </div>

                    {/* Edit / Delete buttons – top right, visible on hover */}
                    <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openEdit(event)}
                        className="bg-white hover:bg-blue-50 text-blue-600 rounded-full p-1.5 shadow-md transition-colors"
                        title="Edit event"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="bg-white hover:bg-red-50 text-red-500 rounded-full p-1.5 shadow-md transition-colors"
                        title="Delete event"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg leading-tight line-clamp-2 text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-sm font-semibold text-gold mb-3">{event.date}</p>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
