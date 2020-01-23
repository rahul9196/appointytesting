		
		var bookingPage = require('../pageObjects/clientBookingPageObjects.js')
		var serviceId = "67148";
		var date = "12/29/2019"
		var time = "13:00"
		var staffId = "215075"
		describe('test cient booking', function(){
			
			var EC = protractor.ExpectedConditions;
			
				beforeEach(function() 
						{
				
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	        browser.waitForAngularEnabled(false);
	        
						});
				
			
			it('book appointment date and time parameter',function()
			
							{
		
		browser.get('http://qa-booking.appointy.com/testautobooking?d='+date+'&t='+time)
		
//	-------------service page
		
		browser.wait(EC.stalenessOf(bookingPage.loader), 40000);
		
		bookingPage.service.isPresent().then(function(value)
						{
			if(value)
					{ 
				bookingPage.service.click();
					}
						})
						
		browser.sleep(1000)			
		bookingPage.serviceList.count().then(function(value)
						{
			
			if(value>0){ 
				bookingPage.nextButton.click();
			}
						})
						
		browser.sleep(1000)
		
		
//		----- staff page
		
		bookingPage.selectTimeTitle.isPresent().then(function(value)
				{
			if(!value){
				bookingPage.nextButton.click();
			browser.wait(EC.stalenessOf(element(by.xpath('//h4[text()="Select Therapist"]'))), 20000);
			}
				})
				
//		------ date and time selection page
				
		browser.wait(EC.invisibilityOf(bookingPage.loader), 20000);
		browser.sleep(1000)
		
//      ----- addon page
		
		bookingPage.loginformtext.isPresent().then(function(value)
				{
			if(!value){ 
				bookingPage.nextButton.click();
			}
				})
		
//	    ----- login page	
		
		browser.wait(EC.presenceOf(bookingPage.username), 5000);
		bookingPage.username.sendKeys('appointytest@gmail.com')
		
		bookingPage.nextButton.click();		
		
		browser.getAllWindowHandles().then(function(handle)
						{
			
				browser.switchTo().window(handle[1]);
				browser.wait(EC.presenceOf(bookingPage.password), 5000);
				bookingPage.password.sendKeys('123456');
				bookingPage.loginButton.click();
				browser.switchTo().window(handle[0]);
				
						})
			
		browser.wait(EC.stalenessOf(bookingPage.loginformtext), 10000);
	    
//		------- intake form page
		
		bookingPage.nextButton.isPresent().then(function(value)
							{ 
						if(value){
							bookingPage.nextButton.click();
						}
							})
		
		
//		-------- order summary page
		
				browser.wait(EC.urlContains('cart'), 10000);	
				bookingPage.checkoutButton.click();
				
				browser.sleep(1000)
				
				bookingPage.checkoutButton.getText().then(function(value)
						{
					
					if(value.search("PAY") >-1){
				browser.wait(EC.visibilityOf(bookingPage.stripe), 5000);		
				bookingPage.stripe.click();				
				
				browser.getAllWindowHandles().then(function(handle)
						{
					
				browser.switchTo().window(handle[1]);
				browser.wait(EC.visibilityOf(bookingPage.normalCard), 10000);
				bookingPage.normalCard.click();
							
				browser.switchTo().window(handle[0]);
							
								
						})
					}
						})
				
				browser.wait(EC.invisibilityOf(bookingPage.loader), 20000);
				
				bookingPage.payLater.isPresent().then(function(value)
								{
					
						if(!value){
							
				browser.wait(EC.presenceOf(bookingPage.confirmText), 10000);
									}
								})

		expect(bookingPage.confirmText.getText()).toBe('Your appointment is confirmed')
		
		bookingPage.startOver.click();
		
	})
	
	
	
})