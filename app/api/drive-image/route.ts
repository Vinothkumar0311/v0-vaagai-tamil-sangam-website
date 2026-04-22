import { NextRequest, NextResponse } from "next/server"

/**
 * Proxy route: /api/drive-image?id=FILE_ID
 * Fetches the Google Drive image server-side (no CORS / cookie issues)
 * and streams it back to the browser.
 */
export async function GET(req: NextRequest) {
  let fileId: string | null = null;
  try {
    const { searchParams } = new URL(req.url);
    fileId = searchParams.get("id")?.trim() || null;

    if (!fileId || !/^[a-zA-Z0-9_-]+$/.test(fileId)) {
      console.error(`[Drive Proxy] Invalid file ID attempted: "${fileId}"`);
      return new NextResponse("Missing or invalid file ID", { status: 400 });
    }

    // Google's direct image export URL
    const driveUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

    console.log(`[Drive Proxy] Fetching from Google: ${driveUrl}`);

    const response = await fetch(driveUrl, {
      redirect: "follow",
      headers: {
        // Mimic a real browser so Google doesn't block the request or trigger robot checks
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      console.error(`[Drive Proxy] Fetch failed for ${fileId} (URL: ${driveUrl}): ${response.status}`);
      return new NextResponse(`Drive fetch failed: ${response.status}`, { status: 502 });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";

    // Detect if we received HTML instead of an image
    // This happens when Google Drive presents a "Virus Scan Warning" or "Too Large to Scan" page
    if (contentType.includes("text/html")) {
      console.warn(`[Drive Proxy] ID ${fileId} returned HTML. Likely too large for direct preview or virus scan warning.`);
      return new NextResponse("File too large or restricted by Google.", { status: 403 });
    }

    const arrayBuffer = await response.arrayBuffer();
    
    // Safety check for empty buffer
    if (arrayBuffer.byteLength === 0) {
      console.error(`[Drive Proxy] Empty buffer for ${fileId}`);
      return new NextResponse("Empty response from Drive", { status: 502 });
    }

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Cache for 1 day
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        // Allow access from mobile/external apps
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error(`[Drive Proxy] Exception for ID ${fileId}:`, error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
