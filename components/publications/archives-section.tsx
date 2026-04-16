"use client"

import { useEffect, useState } from "react"
import { Loader2, Download } from "lucide-react"
import type { PublicationIssue, PublicationArticle } from "@/app/api/publications/route"

interface ApiResponse {
  issues?: PublicationIssue[]
  error?: string
}

export function ArchivesSection() {
  const [issues, setIssues] = useState<PublicationIssue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null)

  const fetchIssues = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/publications")
      const data: ApiResponse = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || "Failed to load")
      setIssues(data.issues || [])
      // Expand the first issue by default
      if (data.issues && data.issues.length > 0) {
        setExpandedIssue(data.issues[0].id)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchIssues() }, [])

  const currentIssue = issues.length > 0 ? issues[0] : null
  const archivedIssues = issues.length > 1 ? issues.slice(1) : []

  const toggleIssue = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id)
  }

  return (
    <section id="archives" className="scroll-mt-32 max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-teal-700 mb-12">Archives</h2>

      {/* Loading & Error states */}
      {loading && (
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-teal-600" /></div>
      )}
      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-red-500 mb-4">{error}</p>
          <button onClick={fetchIssues} className="text-teal-600 hover:underline">Try again</button>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-12">
          {/* Current Issue */}
          <div>
            <h3 className="text-base font-bold text-black mb-4">
              Current Issue
            </h3>
            {currentIssue ? (
              <IssueDropdown 
                issue={currentIssue} 
                isExpanded={expandedIssue === currentIssue.id} 
                onToggle={() => toggleIssue(currentIssue.id)} 
              />
            ) : (
              <p className="text-slate-400">No issues published yet.</p>
            )}
          </div>

          {/* Archived Issues */}
          {archivedIssues.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-black mb-4 mt-8">
                Archives
              </h3>
              <div className="border-t border-slate-200">
                {archivedIssues.map((issue) => (
                  <IssueDropdown 
                    key={issue.id} 
                    issue={issue} 
                    isExpanded={expandedIssue === issue.id} 
                    onToggle={() => toggleIssue(issue.id)} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

function IssueDropdown({ issue, isExpanded, onToggle }: { issue: PublicationIssue, isExpanded: boolean, onToggle: () => void }) {
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={onToggle}
        className="w-full text-left py-4"
      >
        <span className="text-[15px] font-bold text-blue-700 underline hover:text-blue-800 tracking-wide">
          {issue.label}
        </span>
      </button>
      
      {isExpanded && (
        <div className="py-2 pl-4 pr-2 space-y-4 bg-slate-50 border-l-2 border-slate-200 mb-4 ml-2">
          {issue.articles.length > 0 ? (
            issue.articles.map((article) => (
              <ArticleLink key={article.id} article={article} />
            ))
          ) : (
            <p className="text-sm text-slate-500 py-2">No articles found in this folder.</p>
          )}
        </div>
      )}
    </div>
  )
}

function ArticleLink({ article }: { article: PublicationArticle }) {
  const [viewerOpen, setViewerOpen] = useState(false)

  return (
    <>
      <div className="border-b border-slate-50 last:border-0 pb-2 last:pb-0">
        <button
          onClick={() => setViewerOpen(true)}
          className="text-blue-700 hover:text-blue-800 hover:underline text-sm font-bold text-left leading-relaxed transition-colors"
        >
          {article.name.replace(/\.pdf$/i, "")}
        </button>
      </div>

      {viewerOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" onClick={() => setViewerOpen(false)}>
          <div className="bg-white w-full max-w-6xl h-[95vh] sm:h-[90vh] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-slate-50">
              <span className="font-bold text-slate-800 text-sm sm:text-base truncate pr-4">{article.name}</span>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a href={article.downloadUrl} className="p-2 hover:bg-slate-200 rounded-lg transition-colors" title="Download">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                </a>
                <button onClick={() => setViewerOpen(false)} className="text-2xl font-bold text-slate-400 hover:text-slate-800 px-2">×</button>
              </div>
            </div>
            {/* Container to fix scrolling on mobile and let the iframe take full space */}
            <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-100">
              <iframe 
                src={`https://drive.google.com/file/d/${article.id}/preview`} 
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay"
                title={article.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
