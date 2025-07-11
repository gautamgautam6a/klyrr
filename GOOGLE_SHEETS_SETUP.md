# Setting Up Google Sheets API for Client-Side Use

This guide will walk you through setting up the Google Sheets API for client-side use in your application.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your Project ID for later use

## Step 2: Enable the Google Sheets API

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Configure API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. Click "Restrict Key" to limit its usage (recommended):
   - Under "API restrictions", select "Google Sheets API"
   - Under "Application restrictions", choose "HTTP referrers" and add your website domain

## Step 4: Set up your Google Sheet

1. Create a new Google Sheet or use an existing one
2. Note the Spreadsheet ID from the URL:
   - The URL format is: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Make sure the first row has headers for your data (optional)

## Step 5: Configure Sheet Permissions

1. Open your Google Sheet
2. Click "Share" in the top-right corner
3. Click "Change to anyone with the link"
4. Set permission to "Viewer" if you only need to read, or "Editor" if you need to write
5. Click "Done"

## Step 6: Update Your Code

1. Open `src/lib/sheets.ts`
2. Replace `YOUR_API_KEY` with the API key you generated in Step 3
3. Replace the `SPREADSHEET_ID` if different from the one in your code

## Security Considerations

**Important**: Using API keys in client-side code means they are visible to users. To mitigate risks:

1. Set API key restrictions as mentioned in Step 3
2. Consider rate limiting in your Google Cloud Console
3. Monitor API usage for unusual patterns
4. For production environments, consider using a proxy server or serverless functions instead

## Troubleshooting

If you encounter CORS issues:
1. Make sure your API key has the proper referrer restrictions
2. Check that the Google Sheet permissions are set correctly
3. Verify that the Sheets API is enabled in your Google Cloud project

If you get "API key not valid" errors:
1. Double-check that you've copied the key correctly
2. Make sure the API key is enabled and not restricted in a way that blocks your usage 