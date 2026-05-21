"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/paths"

export function ReportCard({ report }: { report: { year: string, file: string } }) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const fileUrl = getAssetPath(report.file)

  return (
    <>
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group flex flex-col">
        <CardContent className="p-8 flex flex-col items-center text-center flex-grow bg-white">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{report.year}</h3>
          <p className="text-sm text-foreground/60 mb-6 flex-grow">
            வருடாந்திர அறிக்கை
          </p>
          
          <div className="flex flex-col gap-3 w-full mt-auto">
            <Button onClick={() => setViewerOpen(true)} variant="default" className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              View Report
            </Button>
            {/* <Button asChild variant="outline" className="w-full">
              <a href={fileUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button> */}
          </div>
        </CardContent>
      </Card>

      {viewerOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" onClick={() => setViewerOpen(false)}>
          <div className="bg-white w-full max-w-6xl h-[95vh] sm:h-[90vh] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-slate-50">
              <span className="font-bold text-slate-800 text-sm sm:text-base truncate pr-4">வருடாந்திர அறிக்கை - {report.year}</span>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a href={fileUrl} download className="p-2 hover:bg-slate-200 rounded-lg transition-colors" title="Download">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                </a>
                <button onClick={() => setViewerOpen(false)} className="text-2xl font-bold text-slate-400 hover:text-slate-800 px-2">×</button>
              </div>
            </div>
            <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-100">
              <iframe 
                src={fileUrl} 
                className="absolute inset-0 w-full h-full border-0"
                title={`Annual Report ${report.year}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
