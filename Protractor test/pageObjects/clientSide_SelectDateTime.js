
var date = "9";
var month = " Feb ";
var time = "09:00 AM"

	var EC = protractor.ExpectedConditions;
	
function select_DateTime(){
	
	
	this.bookingDate = element(by.xpath('//span[text()="'+date+'"]//following-sibling::span[text()="'+month+'"]'));
	this.bookingTime = element(by.xpath('//span[text()="'+time+'"]'));
	this.selectTimeTitle = element(by.xpath('//h4[text()="Select Time"]'));
	this.loader = element(by.className('svg-loader'));
	this.timetext = element(by.xpath('//h4[text()="Select Time"]'));
	
	this.clickOnDateTime = function(){
		
		browser.wait(EC.stalenessOf(this.loader), 20000);
		
		this.bookingDate.click();
		
		browser.wait(EC.elementToBeClickable(this.bookingTime), 5000);
		this.bookingTime.click();
		browser.wait(EC.stalenessOf(this.selectTimeTitle), 20000);
	}
	
	
	
}

module.exports = new select_DateTime();