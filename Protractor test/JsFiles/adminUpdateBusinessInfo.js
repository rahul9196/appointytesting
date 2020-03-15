describe('login to appointy',function(){
	
	var path = require('path');
	browser.waitForAngularEnabled(false);
	beforeAll(function(){
		browser.get('https://qa-business.appointy.com');
	})
	
	fit('should login',function(){
		
		element(by.id('Username')).sendKeys('testuser306');
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys('appointy1');
		element(by.css('.ladda-label')).click();
		
		browser.waitForAngularEnabled(true);
		//expect(element(by.css('.pb-1')).getText()).toEqual('Enjoy your day!');
	})
	    
	fit('upload file',function(){
		var filePath = "./FirstFrame.png"
		var fPath = path.resolve(filePath);
		
		element(by.className('icon icon-cog app-navbar__item-icons a-pad-7')).click();
		
		element(by.xpath('//span[contains(text(), "Your Business")]')).click();
		browser.waitForAngularEnabled(false);
		var imageButton = element(by.xpath('//img[@alt="business logo"]'));
		browser.executeScript("arguments[0].scrollIntoView(true);",imageButton)
		imageButton.click();
		
		element(by.xpath('//input[@type="file"]')).sendKeys(fPath);
//		browser.sleep(2000)
		element(by.xpath('//span[text()="Upload "]')).click()
		browser.sleep(3000);
		
	})
			
	it('Update Business Information',function(){
			
		element(by.className('icon icon-cog app-navbar__item-icons a-pad-7')).click();
		
		element(by.xpath('//span[contains(text(), "Your Business")]')).click();
		browser.waitForAngularEnabled(false);
		
		var profession = element(by.id('ProfessionDdl'))
		profession.click();
		browser.actions().mouseMove(profession).sendKeys('salon').perform();
		//browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform()
		browser.sleep(1000)
		
		element(by.id('business-name')).clear();
		element(by.id('business-name')).sendKeys('La Luna Salon United States');
		
		element(by.id('business-location')).clear();
		element(by.id('business-location')).sendKeys('B-212, The Bellaire Coloney, near abbas nagar road, airport road bhopal');
		
		
		
		var country = element(by.xpath('//ng-select[@id="CountryDdl"]'))
		country.click();
		//browser.sleep(2000);
		
//		element(by.xpath('//ng-select[@id="CountryDdl"]')).click();
//		browser.sleep(10000)
		browser.actions().mouseMove(country).sendKeys(browser.params.country).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(1000)
		
		var state = element(by.xpath("//ng-select[@id='regionddl']"))
		state.click();
		browser.actions().mouseMove(state).sendKeys(browser.params.state).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(2000)
		
		var city = element(by.id('cityddl'))
		city.click();
		browser.actions().mouseMove(city).sendKeys(browser.params.city).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		//browser.sleep(3000)
		
		
		
		element(by.className('btn btn-primary ladda-button')).click().then(function(){
			browser.sleep(3000);
		})
		
		var msg = element(by.xpath('//div[contains(text(), "Updated")]'))
		expect(msg.getText()).toBe('Updated successfully')
		})
		
		
	
	
})