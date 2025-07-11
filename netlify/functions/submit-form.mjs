// Netlify serverless function to handle form submissions with Google Sheets
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Path to your service account key file
const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'sheets-writer-465510-042cd552014c.json');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '15G-c-QYAfZeKfwYlOhhiBzQMUqOo7yktdjKpX75ugjw';
const SHEET_NAME = 'Sheet1'; // Change if your sheet name is different

// Helper to get Google Sheets client
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: SCOPES,
  });
  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

export const handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, headers, body: JSON.stringify({ message: 'Invalid JSON' }) };
  }

  // Validate required fields
  if (!data.name || !data.email) {
    return { statusCode: 400, headers, body: JSON.stringify({ message: 'Name and email are required' }) };
  }

  try {
    const sheets = await getSheetsClient();
    const values = [[data.name, data.email, data.phone || '', data.company || '', data.message || '', new Date().toISOString()]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });
    return { statusCode: 200, headers, body: JSON.stringify({ message: 'Form submitted successfully' }) };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { statusCode: 500, headers, body: JSON.stringify({ message: error.message || 'Error submitting form' }) };
  }
}; 