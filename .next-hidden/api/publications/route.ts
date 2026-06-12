import { NextResponse } from "next/server"

// Replace this with your deployed Google Apps Script Web App URL
// after following the setup instructions in GOOGLE_APPS_SCRIPT_SETUP.md
const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL || ""

export interface DriveFile {
  id: string
  name: string
  mimeType: string
  webViewLink: string
  webContentLink: string
  createdTime: string
}

export interface PublicationArticle {
  id: string
  name: string
  title: string
  viewUrl: string
  downloadUrl: string
  createdTime: string
}

export interface PublicationIssue {
  id: string
  label: string
  issueKey: string // for sorting
  articles: PublicationArticle[]
}

// Helper for sorting
function getSortKey(label: string): number {
  const volMatch = label.match(/Volume\s*(\d+)/i)
  const issMatch = label.match(/Issue\s*(\d+)/i)
  const vol = volMatch ? volMatch[1].padStart(3, '0') : '000'
  const iss = issMatch ? issMatch[1].padStart(3, '0') : '000'
  return parseInt(vol + iss)
}



export async function GET() {
  // During build if GAS_URL is missing, return empty instead of failing build
  if (!GAS_URL) return NextResponse.json({ issues: [], warning: "Config missing" })

  try {
    const res = await fetch(GAS_URL)
    const rawData: any[] = await res.json()

    if (!Array.isArray(rawData)) throw new Error("Invalid response")

    const issues: PublicationIssue[] = rawData.map(item => ({
      id: item.id,
      label: item.issueLabel,
      issueKey: item.issueLabel.toUpperCase(),
      articles: item.articles.map((art: any) => ({
        id: art.id,
        name: art.name,
        title: art.name.replace(/\.pdf$/i, ""),
        viewUrl: `https://drive.google.com/file/d/${art.id}/view`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${art.id}`,
        createdTime: art.createdTime,
      })).sort((a: any, b: any) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    })).sort((a, b) => getSortKey(b.label) - getSortKey(a.label))

    return NextResponse.json({ issues })
  } catch (err: any) {
    return NextResponse.json({ error: "Fetch failed: " + err.message }, { status: 500 })
  }
}
