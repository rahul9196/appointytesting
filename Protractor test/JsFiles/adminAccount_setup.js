describe('login to appointy',function(){
	browser.waitForAngularEnabled(false);
	
	browser.get('https://qa-business.appointy.com');
	it('should login',function(){
		
		element(by.id('Username')).sendKeys(browser.params.Username);
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys(browser.params.password);
		element(by.css('.ladda-label')).click();
		
		browser.waitForAngularEnabled(true);
		
	})
	    
	
	it('account setup',function(){
	
		element(by.id('business')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.cssContainingText('.wizard-list-item-title', 'Beauty & Wellness')).click();
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-wizard/div/div[2]/div/ul/li/div/app-wizard-profession/div[3]/div[2]/div[1]/input')).sendKeys('salon');
		element(by.cssContainingText('.wizard-list-item-title', 'Salon')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		
		element(by.className('ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted')).sendKeys('Hair Cut');
		element(by.className('ng-untouched ng-pristine ng-valid')).sendKeys('30');
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-wizard/div/div[2]/div/ul/li/div/app-wizard-service/div[2]/div[1]/div[2]/div[3]/p-autocomplete/span/input')).sendKeys('100');
		browser.sleep(3000);
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click().then(function(){
			browser.sleep(3000);
		})		
		
		browser.ignoreSynchronization=true;
		
		
			
		element(by.id('wizard-business-name')).clear();
		element(by.id('wizard-business-name')).sendKeys('La Luna Salon United States');
		
		element(by.id('wizard-business-address')).clear();
		element(by.id('wizard-business-address')).sendKeys('B-212, The Bellaire Coloney, near abbas nagar road, airport road bhopal');
		
		
		
		var country = element(by.xpath('//ng-select[@placeholder="Country"]'))
		country.click();
		browser.sleep(1000);
		browser.actions().mouseMove(country).sendKeys('India').perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(1000)
		
		var state = element(by.xpath('//ng-select[@placeholder="State"]'))
		state.click();
		browser.actions().mouseMove(state).sendKeys('Madhya').perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(1000)
		
		var city = element(by.xpath('//ng-select[@placeholder="City"]'))
		city.click();
		browser.actions().mouseMove(city).sendKeys('Bhopal').perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(1000)		
		
		var pincode = element(by.xpath('//input[@placeholder="Zip"]'));
		pincode.clear();
		pincode.sendKeys('233444')	
		
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		browser.sleep(2000)
		
//		var EC = protractor.ExpectedConditions;
		
		var btn = element(by.xpath('//button[@class="btn btn-primary"]'))
//		var isClickable = EC.visibilityOf(btn);
//		
//		browser.wait(isClickable, 8000)
		browser.executeScript('arguments[0].scrollIntoView(true)',btn);
		
		btn.click();
		browser.sleep(1000)
	})
	
})