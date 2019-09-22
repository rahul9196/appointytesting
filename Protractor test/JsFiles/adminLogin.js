describe('login to appointy',function(){
	
	var path = require('path');
	browser.waitForAngularEnabled(false);
	beforeAll(function(){
		browser.get('https://qa-business.appointy.com');
	})
	
	it('should login',function(){
		
		element(by.id('Username')).sendKeys('testuser306');
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys('appointy1');
		element(by.css('.ladda-label')).click();
		
		
	})
})