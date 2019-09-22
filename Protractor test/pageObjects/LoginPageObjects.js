

function login(){
	
	this.username = element(by.id('Username'));
	this.password = element(by.id('Password'));
	this.continueButton = element(by.css('.ladda-label'));
	
	this.getUrl = function(){
		browser.get('https://qa-business.appointy.com');
	}
	
	this.login = function(){
		element(by.id('Username')).sendKeys('testuser306');
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys('appointy1');
		element(by.css('.ladda-label')).click();
	}
}

module.exports = new login();