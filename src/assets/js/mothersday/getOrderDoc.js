const {sheet_ini} = require('../sheet_ini');

async function getOrderDoc() {
    const doc = await sheet_ini('1BwRVwKuUOJ2O4O5dYJhyrf8tNoY7FPAcmTV12XYuGjI');
    
    return doc;
}

module.exports = {
    getOrderDoc,
}