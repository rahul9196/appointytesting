var EC = protractor.ExpectedConditions;
var dateTimePage = require('../pageObjects/clientSide_SelectDateTime.js')
var loginPage = require('../pageObjects/clientSide_LoginPage.js')
function select_addon(){
	
	this.addon = element(by.xpath('//span[text()="Shampoo"]//preceding-sibling::div'));
	var addonNextButton = element(by.xpath('//span[text()="Next"]'));
	this.addonPresent = element(by.xpath('//div[@class="row app-addons m-0"]'));
	
	this.click_addonNextButton = function(){
		
		
		loginPage.loginformtext.isPresent().then(function(value)
				{
			if(!value){
				addonNextButton.click();
			}
				})
				
	}
	
}

module.exports = new select_addon();