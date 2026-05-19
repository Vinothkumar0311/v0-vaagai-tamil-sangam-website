import { NextRequest, NextResponse } from "next/server"

// Matches the Apps Script URL used by the Flutter DriveUploadService
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzc_YMcrZxzp7F5W7aZdqiYiv2t37iNeY-I9jF92FiTEej4mH_q9D_rAQBtvuY8t1v9/exec";

export async function POST(req: NextRequest) {
  try {
    const { file, fileName, contentType } = await req.json()

    // Matches the payload shape from Flutter's DriveUploadService._singleUpload()
    const payload = {
      action: "upload",
      base64: file,
      mimeType: contentType,
      fileName: fileName,
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload)
    })

    const text = await response.text()
    
    let data;
    try {
      data = JSON.parse(text)
    } catch {
      return NextResponse.json({ error: "Failed to parse Apps Script response", raw: text, status: response.status }, { status: 500 })
    }

    // Apps Script returns { status: "success", url: "..." } on success
    if (data.status !== "success") {
      return NextResponse.json({ error: data.message || data.error || "Upload failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true, url: data.url })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

