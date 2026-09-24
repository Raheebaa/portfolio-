/**
 * Deploy this file as a Google Apps Script Web app:
 * Execute as: Me
 * Who has access: Anyone
 *
 * Set VITE_GOOGLE_SHEET_SCRIPT_URL to the resulting /exec URL.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'portfolio-contact' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp
    .openById('1Fgq5IwPqWstI5_1-TptD6NCsBXS2keAryc9FyPnAdy8')
    .getSheets()[0];
  var data = e.parameter || {};

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Category', 'Message']);
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.category || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
