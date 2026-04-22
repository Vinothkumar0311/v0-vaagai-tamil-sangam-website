export const dynamic = "force-dynamic"
import { getSession } from "@/lib/auth"
import { mandramsData } from "@/lib/mandramData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Activity } from "lucide-react"

export default async function DashboardPage() {
  const session = await getSession()
  if (!session) return null

  // Calculate some mock stats based on role
  let accessibleMandrams = 0
  let totalEvents = 0

  if (session.role === "admin") {
    accessibleMandrams = mandramsData.length
    totalEvents = mandramsData.reduce((acc, m) => acc + (m.events?.length || 0), 0)
  } else {
    accessibleMandrams = 1
    const myMandram = mandramsData.find(m => m.slug === session.mandram)
    totalEvents = myMandram?.events?.length || 0
  }

  const mandramName = session.role === "admin" 
    ? "All Mandrams (Global Admin)" 
    : mandramsData.find(m => m.slug === session.mandram)?.title || session.mandram

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
        <p className="text-slate-500 mt-2">
          Welcome back, {session.name}. You are managing <strong>{mandramName}</strong>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-0 shadow-lg ring-1 ring-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-500">Accessible Forums</CardTitle>
            <Users className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">{accessibleMandrams}</div>
            <p className="text-xs text-slate-500 mt-1">Based on your ({session.role}) role</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg ring-1 ring-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-500">Total Events</CardTitle>
            <Calendar className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">{totalEvents}</div>
            <p className="text-xs text-slate-500 mt-1">Scheduled events across your forums</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg ring-1 ring-slate-100 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-primary">System Status</CardTitle>
            <Activity className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-primary mt-1">Protected</div>
            <p className="text-xs text-primary/70 mt-1">Access control is active</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
