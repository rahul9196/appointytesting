
var ser = "Hair Cut";
var date = "25";
var month = " Jan ";
var time = "09:00 PM"
var quantity = "4"

function customerBooking(){
	
	this.service = element(by.xpath('//span[text()="'+ser+'"]'));
	this.nextButton = element(by.xpath('//span[text()="Next"]'));
	this.bookingDate = element(by.xpath('//span[text()="'+date+'"]//following-sibling::span[text()="'+month+'"]'));
	this.bookingTime = element(by.xpath('//span[text()="'+time+'"]'));
	this.addon = element(by.xpath('//span[text()="Shampoo"]//preceding-sibling::div'));
	this.username = element(by.id('email'));
	this.password = element(by.id('Password'));
	this.loginButton = element(by.xpath('//button[@class="ladda-button btn-block"]'));
	this.checkoutButton = element(by.id('app-next-button'));
	this.stripe = element(by.xpath('//img[@src="/img/payment/stripe.png"]'));
	this.normalCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-4444"]//preceding-sibling::div//input'));
	this.confirmText = element(by.xpath('//strong[text()="Your appointment is confirmed"]'));
	this.startOver = element(by.xpath('//span[text()="Start Over"]'));
	this.scaCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-3184"]//preceding-sibling::div//input'));
	this.authorizeButton = element(by.xpath('//button[@id="test-source-authorize-3ds"]'));
	this.payLater = element(by.xpath('//span[text()="Pay Later"]'));
	this.serviceList = element.all(by.xpath('//div[@class="app-service-title px-2"]'));
	this.selectTimeTitle = element(by.xpath('//h4[text()="Select Time"]'));
	this.loader = element(by.className('svg-loader'));
	this.loginformtext = element(by.xpath('//h6[text()="Sign in using"]'));
	this.timetext = element(by.xpath('//h4[text()="Select Time"]'));
	this.quantityNumber = element(by.xpath('//span[text()="'+time+'"]//following-sibling::span[@class="app-calendar-time-info ng-tns-c3-3 ng-star-inserted"]'));
	this.stafftext = element(by.xpath('//div[contains(concat(" ",@class," "),"app-staff-list-container")]//h4[@class="h4-responsive text-capitalize"]'));
	this.orderamount = element(by.xpath('//div[@class="app-cart-checkout-total-amount"]'));
	this.quantityDropdown = element(by.xpath('//span[text()="quantity"]'));
	this.quantityList = element.all(by.xpath('//button[contains(concat(" ",@class, " "),"list-group-item-action")]'));
	this.selectserText = element(by.xpath('//div[contains(concat(" ",@class," "),"app-service-list-container")]//h4[@class="h4-responsive text-capitalize"]'));
	this.addonPresent = element(by.xpath('//div[@class="row app-addons m-0"]'));
	this.isLoggedIn = element(by.xpath('//div[@class="modal-body"]//span[@class="mr-2"]'));
	
	
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
	
	
}

module.exports = new customerBooking();

