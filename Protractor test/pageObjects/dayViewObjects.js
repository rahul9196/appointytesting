

<<<<<<< HEAD
var time = "05:00 pm";
var servicename = "Hair Cut";
=======
var time = browser.params.time;
var servicename = browser.params.servicename;
>>>>>>> develop

function  dayView(){
	
	this.successnotification = element(by.xpath('//div[@class="app-alert app-alert--success in"]'));
	this.calendartime = element(by.xpath('//div[@formatted-date="'+time+'"]'));
	this.servicetab = element(by.xpath('//*[@id="appointment-modal"]/div/div/div/div/div[2]/div[1]/div/span[4]'));
	this.service = element(by.xpath('//span[text()="'+servicename+'"]//parent::div//preceding-sibling::div//parent::div//preceding-sibling::div[@class="checkbox-circular flex flex-center-center readonly"]'));
	this.recurringlink = element(by.xpath('//*[@id="appointment-modal"]/div/div/div/div/div[3]/input'));
	this.recurroption  = element(by.id('recurr-list')).element(by.css('li:nth-child(3)'));
	this.recurrdate = element(by.xpath('//span[text()="date"]'));
	this.selectrecurr = element(by.xpath('//button[@class="btn blue-2 z-depth-0 btn-sm"]'));
	this.customertextbox = element(by.xpath('//input[@placeholder="Select Customer"]'));
	this.customerlist = element(by.xpath('//div[@class="selectize-dropdown single active"]'));
	this.bookbutton = element(by.xpath('//span[text()="Book"]'));
	
//	this.service = function(servicename){
//		element(by.xpath('//span[text()="'+servicename+'"]//parent::div//preceding-sibling::div//parent::div//preceding-sibling::div[@class="checkbox-circular flex flex-center-center readonly"]'))
//	}
	
	
	this.selectCustomer = function(a){
		
		element.all(by.xpath('//span[@class="word-spacing-none"]')).filter(function(value)
				{
			return value.getText().then(function(text)
					{
				return text == a;
					})
				}).first().click();
	}
}


module.exports = new dayView();