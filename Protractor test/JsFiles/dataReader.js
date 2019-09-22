var testData = require('xlsx');

class xlReader{
	
	read_from_excel(sheetName, filepath){
		
		var wb = testData.readFile(filepath);
		var ws = wb.Sheets[sheetName];
		return testData.utils.sheet_to_json(ws);
	}
	
}

module.exports = new xlReader();