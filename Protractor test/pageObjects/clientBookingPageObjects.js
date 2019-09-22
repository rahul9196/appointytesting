
var ser = "Massage zamók";
var date = "25";
var month = " Sep ";
var time = "09:00 AM"
function customerBooking(){
	
	this.service = element(by.xpath('//span[text()="'+ser+'"]'));
	this.nextButton = element(by.xpath('//span[text()="Next"]'));
	this.bookingDate = element(by.xpath('//span[text()="'+date+'"]//following-sibling::span[text()="'+month+'"]'));
	this.bookingTime = element(by.xpath('//span[text()="'+time+'"]'));
	this.addon = element(by.xpath('//span[text()="Shampoo"]//preceding-sibling::div'));
	this.username = element(by.id('email'));
	this.password = element(by.id('Password'));
	this.loginButton = element(by.xpath('//button[@class="ladda-button btn-block"]'));
	this.payButton = element(by.id('app-next-button'));
	this.stripe = element(by.xpath('//img[@src="/img/payment/stripe.png"]'));
	this.normalCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-4242"]//preceding-sibling::div//input'));
	this.confirmText = element(by.xpath('//strong[text()="Your appointment is confirmed"]'));
	this.startOver = element(by.xpath('//span[text()="Start Over"]'));
	this.scaCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-3184"]//preceding-sibling::div//input'));
	this.authorizeButton = element(by.xpath('//button[@id="test-source-authorize-3ds"]'));
		
	this.login = function()
			{
		element(by.xpath('//div[@class="app-header-menu"]//div[@class="app-header-menu-item-list ng-tns-c0-0 ng-star-inserted"]//span[text()="Login"]')).click();
		browser.getAllWindowHandles().then(function(handle)
				{
			browser.switchTo().window(handle[1]);
			browser.waitForAngularEnabled(false);
			element(by.id('Username')).sendKeys('appointytest@gmail.com')
			element(by.id('Password')).sendKeys('123456')
			element(by.xpath('//button[@class="ladda-button btn-block"]')).click();
			browser.switchTo().window(handle[0]);
			browser.waitForAngularEnabled(true);
				})
			}
	
	this.loginwhile
}

module.exports = new customerBooking();

