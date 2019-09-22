


		describe('test cient booking', function(){
			var bookingPage = require('../pageObjects/clientBookingPageObjects.js')
			
			browser.get('https://qa-booking.appointy.com/graps')
			var EC = protractor.ExpectedConditions;

		beforeEach(function() {
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
		    });


	it('book appointment with normal card',function(){
				
		bookingPage.service.click();
		
		
		browser.wait(EC.elementToBeClickable(bookingPage.nextButton), 5000);
				
		bookingPage.nextButton.click();
		
		browser.wait(EC.elementToBeClickable(bookingPage.bookingDate), 5000);
		
		bookingPage.bookingDate.click();
		
		bookingPage.bookingTime.click();
		
		bookingPage.addon.click();
		
		bookingPage.nextButton.click();
		
		bookingPage.username.sendKeys('appointytest@gmail.com')
		
		bookingPage.nextButton.click();
		browser.sleep(3000);
		
		
		browser.getAllWindowHandles().then(function(handle){
			browser.switchTo().window(handle[1]);
			
			browser.waitForAngularEnabled(false);
						
				bookingPage.password.sendKeys('123456');
				bookingPage.loginButton.click();
				browser.switchTo().window(handle[0]);
				
				browser.waitForAngularEnabled(true);
			})
			
			
//			bookingPage.password.sendKeys('123456');
//			bookingPage.loginButton.click();
			
		
		bookingPage.nextButton.click();
		bookingPage.payButton.click();
		bookingPage.stripe.click();
		
		browser.sleep(8000);
		browser.getAllWindowHandles().then(function(handle){
			
			browser.switchTo().window(handle[1]);
			
			browser.waitForAngularEnabled(false);
			
			bookingPage.normalCard.click();
						
			browser.switchTo().window(handle[0]);
			
			browser.waitForAngularEnabled(true);	
		})
		
		expect(bookingPage.confirmText.getText()).toBe('Your appointment is confirmed')
		
		bookingPage.startOver.click();
	})
	
	
	
	
	
	
	it('book appointment with SCA card',function(){
		
		
		bookingPage.service.click();
		
		browser.sleep(2000);
		
		bookingPage.nextButton.click();
		
		browser.sleep(2000);
		
		bookingPage.nextButton.isPresent().then(function(value)
				{
			if(value){
				bookingPage.nextButton.click();
			}
				})		
		
		browser.wait(EC.elementToBeClickable(bookingPage.bookingDate), 10000);
		
		bookingPage.bookingDate.click();
		
		bookingPage.bookingTime.click();
		bookingPage.addon.click();
		
		
		
		bookingPage.nextButton.click();
		
		bookingPage.nextButton.click();
		bookingPage.payButton.click();
		bookingPage.stripe.click();
		browser.sleep(8000);
		browser.getAllWindowHandles().then(function(handle){
			browser.switchTo().window(handle[1]);
			browser.waitForAngularEnabled(false);
			
			bookingPage.scaCard.click();
			browser.sleep(8000);
			browser.switchTo().frame('__privateStripeFrame9');
			browser.switchTo().frame('challengeFrame');
			
			bookingPage.authorizeButton.click();
			browser.switchTo().window(handle[0]);
			browser.waitForAngularEnabled(true);
		})
		
		expect(bookingPage.confirmText.getText()).toBe('Your appointment is confirmed')
		bookingPage.startOver.click();
	})
	
	
	
})