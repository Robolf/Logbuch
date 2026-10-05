/**
 * Logbuch - Google Apps Script Backend (Generic Template)
 * 
 * Anleitung zur Einrichtung:
 * 1. Öffne https://script.google.com/ und erstelle ein neues Projekt ("Neues Projekt").
 * 2. Ersetze den Inhalt von Code.gs vollständig durch diesen Code.
 * 3. Klicke oben rechts auf "Bereitstellen" > "Neue Bereitstellung".
 * 4. Wähle das Zahnrad-Symbol > "Web-App".
 * 5. Konfiguration:
 *    - Ausführen als: "Ich" (dein Google-Konto)
 *    - Wer hat Zugriff: "Jeder" (damit deine mobile App ohne Login-Dialog Daten synchronisieren kann)
 * 6. Klicke auf "Bereitstellen", autorisiere den Zugriff und kopiere die Web-App-URL (endet auf /exec).
 * 7. Trage die Web-App-URL in Logbuch unter "Einstellungen" > "Google Sheet Webhook" ein.
 */

const SHEET_NAME = "Haushaltsbuch";

function getOrCreateSheet() {
  const props = PropertiesService.getScriptProperties();
  let sheetId = props.getProperty("SHEET_ID");
  let ss;
  
  if (sheetId) {
    try {
      ss = SpreadsheetApp.openById(sheetId);
    } catch (e) {
      sheetId = null;
    }
  }
  
  if (!ss) {
    const files = DriveApp.getFilesByName(SHEET_NAME);
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
      props.setProperty("SHEET_ID", ss.getId());
    } else {
      ss = SpreadsheetApp.create(SHEET_NAME);
      props.setProperty("SHEET_ID", ss.getId());
      const sheet = ss.getActiveSheet();
      sheet.setName("Ausgaben");
      
      const headers = [["ID", "Datum", "Zeitstempel", "Person", "Zweck (Budget)", "Haendler / Ort", "Betrag (€)"]];
      sheet.getRange(1, 1, 1, 7).setValues(headers);
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight("bold")
        .setBackground("#064e3b")
        .setFontColor("#ffffff")
        .setHorizontalAlignment("center");
        
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 140);
      sheet.setColumnWidth(2, 100);
      sheet.setColumnWidth(3, 160);
      sheet.setColumnWidth(4, 100);
      sheet.setColumnWidth(5, 180);
      sheet.setColumnWidth(6, 160);
      sheet.setColumnWidth(7, 110);
    }
  }
  
  return ss.getSheetByName("Ausgaben") || ss.getActiveSheet();
}

function getEntriesData() {
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();
  const entries = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if ((row[0] || row[1] || row[3]) && row[6] !== "") {
      let dateStr = row[1];
      if (row[1] instanceof Date) {
        dateStr = Utilities.formatDate(row[1], Session.getScriptTimeZone(), "yyyy-MM-dd");
      } else if (typeof row[1] === "string" && row[1].includes(".")) {
        const dParts = row[1].split(".");
        if (dParts.length === 3) {
          dateStr = dParts[2].trim() + "-" + dParts[1].trim().padStart(2, '0') + "-" + dParts[0].trim().padStart(2, '0');
        }
      }
      
      let rawAmt = String(row[6]).replace("€", "").replace(/\s/g, "").replace(",", ".");
      let amount = parseFloat(rawAmt) || 0;

      entries.push({
        id: String(row[0] || ('sheet_row_' + (i + 1))),
        date: String(dateStr),
        timestamp: String(row[2] || ""),
        person: String(row[3] || "Person"),
        purpose: String(row[4] || "Sonstiges"),
        merchant: String(row[5] || ""),
        amount: amount
      });
    }
  }
  
  entries.sort((a, b) => new Date(b.date) - new Date(a.date));
  return entries;
}

function doGet(e) {
  try {
    const entries = getEntriesData();
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      count: entries.length,
      entries: entries
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const contents = JSON.parse(e.postData.contents);
    
    if (contents.action === "add" || !contents.action) {
      const item = contents.entry || contents;
      const rowData = [
        String(item.id || Date.now()),
        item.date || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd"),
        new Date().toISOString(),
        item.person || "Person",
        item.purpose || "Sonstiges",
        item.merchant || "",
        parseFloat(item.amount) || 0
      ];
      sheet.appendRow(rowData);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", id: item.id })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (contents.action === "delete") {
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(contents.id)) {
          sheet.deleteRow(i + 1);
          return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "not_found" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Unbekannte Aktion" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}
