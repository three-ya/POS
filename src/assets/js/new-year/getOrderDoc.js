const {sheet_ini} = require('../sheet_ini');

async function getOrderDoc() {
    const doc = await sheet_ini('1ZNfIxQwHuS5WzbIxU3rH7PY0FOVEKIBWqe6Z7_YpdNY');
    
    return doc;
}

module.exports = {
    getOrderDoc,
}