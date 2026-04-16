# Google Apps Script Setup Guide

Follow these steps to enable dynamic PDF fetching from your Google Drive folder.

## 1. Create the Google Apps Script

1. Go to [script.google.com](https://script.google.com/).
2. Click **New Project**.
3. Rename the project to `Vaagai Publications API`.
4. Replace the default `code.gs` content with the following code:

```javascript
/**
 * GET request handler for the Web App
 */
function doGet() {
  // THE FOLDER ID FROM YOUR PROVIDED LINK:
  // https://drive.google.com/drive/folders/1Ox1q3FBgJqPxsS6jL7UMCGi3PTnBc2VE
  const folderId = "1Ox1q3FBgJqPxsS6jL7UMCGi3PTnBc2VE"; 
  
  try {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    const result = [];
    
    while (files.hasNext()) {
      const file = files.next();
      // Only include PDFs
      if (file.getMimeType() === "application/pdf") {
        result.push({
          id: file.getId(),
          name: file.getName(),
          mimeType: file.getMimeType(),
          createdTime: file.getDateCreated().toISOString()
        });
      }
    }
    
    // Return as JSON
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Deploy as a Web App

1. Click the **Deploy** button (top right).
2. Choose **New deployment**.
3. Select type: **Web app**.
4. Description: `Initial deployment`.
5. Execute as: **Me** (your Google account).
6. Who has access: **Anyone**. (This is required for the Next.js server to fetch it).
7. Click **Deploy**.
8. You will see a "Web app URL". **Copy this URL.**

## 3. Update Website Configuration

1. Open your project's `.env.local` file.
2. Paste the URL you copied into the `GOOGLE_APPS_SCRIPT_URL` variable:
   ```env
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/..../exec
   ```

3. **For GitHub Deployment:**
   - Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions**.
   - Click **New repository secret**.
   - Name: `GOOGLE_APPS_SCRIPT_URL`.
   - Secret: Paste your Web App URL.
   - This allows GitHub Actions to fetch the data during the build process.

## 4. Drive Folder Permissions

1. Go to your [Google Drive Folder](https://drive.google.com/drive/folders/1Ox1q3FBgJqPxsS6jL7UMCGi3PTnBc2VE).
2. Click **Share**.
3. Under "General access", change to **Anyone with the link**.
4. Role: **Viewer**.
5. This ensures the PDF viewer on the website can actually load the files.

## 5. Testing

Once deployed and configured, refresh your website's publications page. The "Archives" section will now automatically list every PDF file you upload to that specific Drive folder!
