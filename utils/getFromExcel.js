const xlsx = require('xlsx');
const { getJsDateFromExcel } = require("excel-date-to-js");
const formatDate = require('./formatDate');


module.exports = function(ticker) { 
    const excelFile = xlsx.readFile('../pybithumb/' + ticker + "_ohlcvm.xlsx")
    const sheetName = excelFile.SheetNames[0];
    const firstSheet = excelFile.Sheets[sheetName];
    let jsonData = xlsx.utils.sheet_to_json( firstSheet, { defval : "" } );
    jsonData = jsonData.slice(-30);
    jsonData.forEach(element => {
        element.time = formatDate(getJsDateFromExcel(element.time));
    });
    return jsonData;
}