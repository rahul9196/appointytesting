
var EC = protractor.ExpectedConditions;
function orderSummary(){
	var that = this;
	this.checkoutButton = element(by.id('app-next-button'));
	this.stripe = element(by.xpath('//img[@src="/img/payment/stripe.png"]'));
	this.payLater = element(by.xpath('//span[text()="Pay Later"]'));
	this.orderamount = element(by.xpath('//div[@class="app-cart-checkout-total-amount"]'));
	this.quantityDropdown = element(by.xpath('//span[text()="quantity"]'));
	this.quantityList = element.all(by.xpath('//button[contains(concat(" ",@class, " "),"list-group-item-action")]'));
	this.stripe = element(by.xpath('//img[@src="/img/payment/stripe.png"]'));
	this.normalCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-4444"]//preceding-sibling::div//input'));
	this.confirmText = element(by.xpath('//strong[text()="Your appointment is confirmed"]'));
	this.startOver = element(by.xpath('//span[text()="Start Over"]'));
	this.scaCard = element(by.xpath('//div[text()="xxxx-xxxx-xxxx-3184"]//preceding-sibling::div//input'));
	this.authorizeButton = element(by.xpath('//button[@id="test-source-authorize-3ds"]'));
	var payLater = element(by.xpath('//span[text()="Pay Later"]'));
	this.loader = element(by.className('svg-loader'));
	
	
	
	
	this.clickOnCheckoutButton = function()
				{
		
		browser.wait(EC.urlContains('cart'), 10000);		
		
		that.checkoutButton.click();
				}
	
	
	this.selectPaymentGatewayandPay = function(){		
		
		that.checkoutButton.getText().then(function(value)
				{
			
			if(value.search("PAY") >-1){
		browser.wait(EC.visibilityOf(that.stripe), 5000);
		
		that.stripe.click();				
		
		browser.getAllWindowHandles().then(function(handle)
				{
			
		browser.switchTo().window(handle[1]);
		browser.wait(EC.visibilityOf(that.normalCard), 10000);
		that.normalCard.click();
					
		browser.switchTo().window(handle[0]);
					
						
				})
			}
				})
		
		browser.wait(EC.invisibilityOf(that.loader), 20000);
		
		payLater.isPresent().then(function(value)
						{
			
				if(!value){
					
		browser.wait(EC.presenceOf(that.confirmText), 10000);
							}
						})

		expect(that.confirmText.getText()).toBe('Your appointment is confirmed')
		
		that.startOver.click();
	}
	
}

module.exports = new orderSummary();