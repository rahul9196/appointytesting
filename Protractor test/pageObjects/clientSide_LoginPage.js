var EC = protractor.ExpectedConditions;

function client_Login(){
	
	this.username = element(by.id('email'));
	var password = element(by.id('Password'));
	var loginButton = element(by.xpath('//button[@class="ladda-button btn-block"]'));
	this.loginformtext = element(by.xpath('//h6[text()="Sign in using"]'));
	this.isLoggedIn = element(by.xpath('//div[@class="modal-body"]//span[@class="mr-2"]'));
	var loginNextButton = element(by.xpath('//span[text()="Next"]'));
	
	
	
	this.loginWhileBooking = function()
			{
		
		browser.wait(EC.presenceOf(this.username), 5000);
		this.username.sendKeys('appointytest@gmail.com')
		
		loginNextButton.click()
		
		browser.getAllWindowHandles().then(function(handle)
					{
			browser.waitForAngularEnabled(false)
			browser.switchTo().window(handle[1]);
			browser.wait(EC.presenceOf(password), 5000);
			password.sendKeys('123456');
			loginButton.click();
			browser.switchTo().window(handle[0]);
		
					})
					
			browser.wait(EC.stalenessOf(this.loginformtext), 10000);
				}
	
	this.completeLogin = function()
			{
		
		browser.getAllWindowHandles().then(function(handle)
					{
			browser.waitForAngularEnabled(false)
			browser.switchTo().window(handle[1]);
			browser.wait(EC.presenceOf(this.password), 5000);
			this.password.sendKeys('123456');
			loginButton.click();
			browser.switchTo().window(handle[0]);
		
					})
	
//			browser.wait(EC.stalenessOf(this.loginformtext), 10000);
			}
	
}

module.exports = new client_Login();