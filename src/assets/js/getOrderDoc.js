const {sheet_ini} = require('./sheet_ini');

async function getOrderDoc() {
    const doc = await sheet_ini('1kNISgZwHxtq0hd01KbvtehEmDWjsGqH7KchOcHpn_E8');
    
    return doc;
}

module.exports = {
    getOrderDoc,
}