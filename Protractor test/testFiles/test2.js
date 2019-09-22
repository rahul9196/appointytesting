describe('test cient booking', function(){
	browser.waitForAngularEnabled(false);
	browser.get('https://graps.appointy.com')
	
	it('book appointment',function(){
		
		browser.driver.findElement(by.xpath('//img[@id="tickboxImage1"]')).click();
		browser.driver.findElement(by.xpath('//div[text()="Next »"]')).click();
		element(by.id('appBooktime85')).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.id('fname'))),5000)
		element(by.id('fname')).sendKeys('rahul');
		element(by.id('lname')).sendKeys('gupta');
		element(by.id('ziptxt')).sendKeys('123456');
		element(by.id('mobile')).sendKeys('12345678');
		element(by.id('emailId')).sendKeys('appointytest@gmail.com');
		element(by.id('saveBtn')).click();
		})
		
		
})