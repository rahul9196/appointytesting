

function login(){
	
	this.username = element(by.id('Username'));
	this.password = element(by.id('Password'));
	this.continueButton = element(by.css('.ladda-label'));
	
	this.getUrl = function(){
		browser.get('https://qa-business.appointy.com');
	}
	
	this.login = function(username,password){
		element(by.id('Username')).sendKeys(username);
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys(password);
		element(by.css('.ladda-label')).click();
	}
}

module.exports = new login();