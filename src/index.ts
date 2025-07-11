import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { google } from "googleapis";
import * as path from "path";
import * as fs from "fs";

const SPREADSHEET_ID = "11uIRWDT6ND6ReArKAfiWXRZinABvjoPLwgYOfMDUC15c";

admin.initializeApp();

const serviceAccountPath = path.join(__dirname, "../service-account.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

const sheets = google.sheets("v4");
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const addToSheetOnSubmission = functions.firestore
  .document("submissions/{docId}")
  .onCreate(async (snap: FirebaseFirestore.DocumentSnapshot) => {
    const data = snap.data();
    const client = await auth.getClient();
    await sheets.spreadsheets.values.append({
      auth: client as any,
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          data?.name || "",
          data?.email || "",
          data?.phone || "",
          data?.company || "",
          data?.message || "",
          new Date().toISOString(),
        ]],
      },
    });
  });
