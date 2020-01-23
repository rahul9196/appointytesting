
	var gcpage = require('../pageObjects/purchaseGCPageObjects.js');
	var bookingPage = require('../pageObjects/clientBookingPageObjects.js')
	
	describe('gift certificate functionality', function(){
		
		var EC = protractor.ExpectedConditions;
		
		
		beforeEach(function() {
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	    });
		
	
		beforeAll(function()
				{
			browser.waitForAngularEnabled(false);
			browser.get('https://qa-booking.appointy.com/graps');
			
				})
	
	it('purchase gift certicate with SCA card', function()
			{
		browser.wait(EC.stalenessOf(bookingPage.loader), 40000);
		element(by.xpath('//span[@class="mr-2"]')).isPresent().then(function(test){
			console.log(test);
		browser.sleep(2000)	
			if(!test)
			{ console.log('Already not loggedin')
				
				gcpage.login();
				
		
			}else{
				console.log('Already loggedin')
			}
			})
		
			gcpage.gctab.isPresent().then(function(value)
				{
			if(value){ console.log("tab hai")
				gcpage.gctab.click();
		
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
			
			gcpage.normalCard.click();
						
			browser.switchTo().window(handle[0]);
			

		})
		
		browser.wait(EC.presenceOf(gcpage.confirmmessage), 10000);
		expect(gcpage.confirmmessage.getText()).toBe('Thank you for your purchase');
		
				}else{
					console.log('Gift Certificate tab is not present.')
				}
					})
		
		})
			
})