const { GoogleSpreadsheet } = require('google-spreadsheet');

async function sheet_ini(sheetId) {
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo(); 

    return doc;
}

module.exports = {
    sheet_ini
}