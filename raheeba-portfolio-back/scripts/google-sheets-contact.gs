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
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.subject || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this function once from the Apps Script editor to migrate existing rows.
 * It renames Category to Subject and removes the sample test submissions.
 */
function migrateCategoryToSubject() {
  var sheet = SpreadsheetApp
    .openById('1Fgq5IwPqWstI5_1-TptD6NCsBXS2keAryc9FyPnAdy8')
    .getSheets()[0];
  var values = sheet.getDataRange().getValues();

  if (values.length === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
    return;
  }

  var headers = values[0];
  var categoryIndex = headers.indexOf('Category');
  if (categoryIndex !== -1) {
    sheet.getRange(1, categoryIndex + 1).setValue('Subject');
  }

  for (var row = values.length - 1; row >= 1; row -= 1) {
    var name = String(values[row][1] || '');
    var message = String(values[row][4] || '');
    if (
      name === 'Portfolio Endpoint Test' &&
      message === 'Test submission - please delete this row'
    ) {
      sheet.deleteRow(row + 1);
    }
  }
}
