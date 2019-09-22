

var time = "05:00 pm";
var servicename = "Hair Cut";

function  dayView(){
	
	this.successnotification = element(by.xpath('//div[@class="app-alert app-alert--success in"]'));
	this.calendartime = element(by.xpath('//div[@formatted-date="'+time+'"]'));
	this.servicetab = element(by.xpath('//*[@id="appointment-modal"]/div/div/div/div/div[2]/div[1]/div/span[4]'));
	this.service = element(by.xpath('//span[text()="'+servicename+'"]//parent::div//preceding-sibling::div//parent::div//preceding-sibling::div[@class="checkbox-circular flex flex-center-center readonly"]'));
	this.recurringlink = element(by.xpath('//*[@id="appointment-modal"]/div/div/div/div/div[3]/input'));
	
}


module.exports = new dayView();