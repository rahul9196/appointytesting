


function GCPage()
		{
	
	this.gctab = element(by.xpath('//div[@class="app-header-menu"]//span[contains(text(),"Gift Certificates")]'));
	this.gcselect = element(by.xpath('//a[@id="2967"]'));
	this.customername = element(by.xpath('//input[@id="name"]'));
	this.customeremail = element(by.xpath('//input[@id="email"]'));
	this.message = element(by.xpath('//input[@id="note"]'));
	this.purchasebutton = element(by.xpath('//button[@class="btn  btn-primary"]'));
	this.paybutton = element(by.xpath('//button[@class="btn btn-primary z-depth-0"]'));
	this.confirmmessage = element(by.xpath('//h4[@class="mb-0"]'));
	this.stripe = element(by.xpath('//img[@src="/img/payment/stripe.png"]'));
	this.normalCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-4242"]//preceding-sibling::div//input'));
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
		
		
}

module.exports = new GCPage();
