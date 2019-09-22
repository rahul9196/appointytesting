
	var gcpage = require('../pageObjects/purchaseGCPageObjects.js');

	describe('gift certificate functionality', function(){
		
		var EC = protractor.ExpectedConditions;
		
		
		beforeEach(function() {
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	    });
		
	
		beforeAll(function()
				{
			browser.get('https://qa-booking.appointy.com/graps');
			
			element(by.xpath('//span[@class="mr-2"]')).isPresent().then(function(test){
				console.log(test);
				
				if(!test)
				{
					
			gcpage.login();
			
				}else{
					console.log('Already loggedin')
				}
				})

		
	})
	
	it('purchase gift certicate with SCA card', function()
			{
		
		gcpage.gctab.isPresent().then(function(value)
				{
			if(value){
				gcpage.gctab.click();
			
				
		browser.waitForAngularEnabled(false);
		
		gcpage.gcselect.click();
		gcpage.customername.sendKeys('Rahul Gupta')
		gcpage.customeremail.sendKeys('rahulgupta@appointy.com');
		gcpage.message.sendKeys('Hi! this is a Gift from me.');
		gcpage.purchasebutton.click();
		
		browser.sleep(1000);
		
		gcpage.paybutton.click();
		
		browser.sleep(1000);
		
		gcpage.stripe.click();
		
		browser.sleep(8000);
		
		browser.getAllWindowHandles().then(function(handle)
				{
			browser.switchTo().window(handle[1]);
			gcpage.scaCard.click();
			browser.sleep(10000);
			browser.switchTo().frame('__privateStripeFrame9');
			browser.switchTo().frame('challengeFrame');			
			gcpage.authorizeButton.click();
			browser.switchTo().window(handle[0]);			
				})
		
		browser.wait(EC.presenceOf(gcpage.confirmmessage), 10000);
		expect(gcpage.confirmmessage.getText()).toBe('Thank you for your purchase');
		
			}else{
				console.log('Gift Certificate tab is not present.')
			}
				})
		
		})
		
		
		it('purchase gift certicate with Normal card', function()
			{
		
			gcpage.gctab.isPresent().then(function(value)
					{
				if(value){
					
				
		gcpage.gctab.click();		
		browser.waitForAngularEnabled(false);
		
		gcpage.gcselect.click();
		gcpage.customername.sendKeys('Rahul Gupta')
		gcpage.customeremail.sendKeys('rahulgupta@appointy.com');
		gcpage.message.sendKeys('Hi! this is a Gift from me.');
		gcpage.purchasebutton.click();
		
		browser.sleep(1000);
		
		gcpage.paybutton.click();
		
		browser.sleep(1000);
		
		gcpage.stripe.click();
		
		browser.sleep(8000);
		browser.getAllWindowHandles().then(function(handle){
			
			browser.switchTo().window(handle[1]);
			
			browser.waitForAngularEnabled(false);
			
			gcpage.normalCard.click();
						
			browser.switchTo().window(handle[0]);
			
			browser.waitForAngularEnabled(true);	
		})
		
		browser.wait(EC.presenceOf(gcpage.confirmmessage), 10000);
		expect(gcpage.confirmmessage.getText()).toBe('Thank you for your purchase');
		
				}else{
					console.log('Gift Certificate tab is not present.')
				}
					})
		
		})
			
})