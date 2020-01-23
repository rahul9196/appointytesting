		var bookingPage = require('../pageObjects/clientBookingPageObjects.js')

//test
		describe('test cient booking', function(){
			
			var EC = protractor.ExpectedConditions;
			
				beforeEach(function() 
						{
					
			browser.get('http://qa-booking.appointy.com/graps')
					
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	        browser.waitForAngularEnabled(false);
	        
						});
			
		
		
		it('book appointment with normal card',function()
			
							{
//	---- service page
			
		browser.wait(EC.stalenessOf(bookingPage.loader), 40000);
		
		bookingPage.service.isPresent().then(function(value)
						{
			if(value)
					{
				bookingPage.service.click();
					}
						})
						
		bookingPage.serviceList.count().then(function(value)
						{
			
			if(value>1){ 
				browser.wait(EC.elementToBeClickable(bookingPage.nextButton), 5000);
				bookingPage.nextButton.click();
						}
						})
			browser.wait(EC.stalenessOf(bookingPage.selectserText), 20000);
						
// --- staff page
						
		
		bookingPage.selectTimeTitle.isPresent().then(function(value)
				{
			if(!value){
				
				bookingPage.nextButton.click();
				browser.wait(EC.stalenessOf(bookingPage.stafftext), 20000);
					}
				})
	
		
//		date and time selection page
		
		browser.wait(EC.stalenessOf(bookingPage.loader), 20000);
	
		bookingPage.bookingDate.click();
		
		browser.wait(EC.elementToBeClickable(bookingPage.bookingTime), 5000);
		bookingPage.bookingTime.click();
	
//		--- addon page

		browser.wait(EC.stalenessOf(bookingPage.timetext), 20000);
		bookingPage.loginformtext.isPresent().then(function(value)
				{
			if(!value){
				bookingPage.nextButton.click();
			}
				})
		
//		login page
				
		browser.wait(EC.presenceOf(bookingPage.username), 5000);
		bookingPage.username.sendKeys('rahulgupta@appointy.com')
		
		bookingPage.nextButton.click().then(function(){
			
		});		
		
		browser.getAllWindowHandles().then(function(handle){
				browser.switchTo().window(handle[1]);
				browser.wait(EC.presenceOf(bookingPage.password), 5000);
				bookingPage.password.sendKeys('123456');
				bookingPage.loginButton.click();
				browser.switchTo().window(handle[0]);
				

			})
		
		browser.wait(EC.stalenessOf(bookingPage.loginformtext), 10000);

//	intake form page
		
		bookingPage.nextButton.isPresent().then(function(value)
				{
			if(value){
				bookingPage.nextButton.click();
			}
				})
				
//		order summary page
				
		browser.wait(EC.urlContains('cart'), 10000);		

		bookingPage.checkoutButton.click();
		
//		browser.sleep(1000)
		
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
	
	
	
	
	
	
		it('book appointment with SCA card',function(){
		
//			---- service page
			
			browser.wait(EC.stalenessOf(bookingPage.loader), 40000);
			
			bookingPage.service.isPresent().then(function(value)
							{
				if(value)
						{
					bookingPage.service.click();
						}
							})
							
					
			bookingPage.serviceList.count().then(function(value)
							{
				
				if(value>1){ 
					browser.wait(EC.elementToBeClickable(bookingPage.nextButton), 5000);
					bookingPage.nextButton.click();
							}
							})
			browser.wait(EC.stalenessOf(bookingPage.selectserText), 20000);
						
// --- staff page
						
		
		bookingPage.selectTimeTitle.isPresent().then(function(value)
				{
			if(!value){
				
				bookingPage.nextButton.click();
				browser.wait(EC.stalenessOf(bookingPage.stafftext), 20000);
					}
				})
		
			
//			date and time selection page
			
			browser.wait(EC.stalenessOf(bookingPage.loader), 20000);
		
			bookingPage.bookingDate.click();
			
			browser.wait(EC.elementToBeClickable(bookingPage.bookingTime), 5000);
			bookingPage.bookingTime.click();
		
//			--- addon page
			browser.wait(EC.stalenessOf(bookingPage.timetext), 20000);

			bookingPage.addonPresent.isPresent().then(function(value)
					{
				if(value){ 
					bookingPage.nextButton.click();
				}
					})
			
			
//			login page

			bookingPage.isLoggedIn.isPresent().then(function(value)
					
					{
				
				if(!value){
				
			browser.wait(EC.presenceOf(bookingPage.username), 5000);
			bookingPage.username.sendKeys('rahulgupta@appointy.com')
			
			bookingPage.nextButton.click();		
			
			browser.getAllWindowHandles().then(function(handle){
					browser.switchTo().window(handle[1]);					
					browser.wait(EC.presenceOf(bookingPage.password), 5000);							
					bookingPage.password.sendKeys('123456');
					bookingPage.loginButton.click();
					browser.switchTo().window(handle[0]);
					

					})
					browser.wait(EC.stalenessOf(bookingPage.loginformtext), 10000);
				}
			})
			
			

//		intake form page
			browser.sleep(2000)
			bookingPage.nextButton.isPresent().then(function(value)
					{
				if(value){ 
					
					bookingPage.nextButton.click();
				}
					})
					
//			order summary page
		
		browser.wait(EC.urlContains('cart'), 10000);
		bookingPage.checkoutButton.click();
		
//		browser.sleep(2000)
		
		bookingPage.checkoutButton.getText().then(function(value)
				{
			
			if(value.search("PAY") >-1){
		
		browser.wait(EC.visibilityOf(bookingPage.stripe), 5000);
		bookingPage.stripe.click();				
		browser.sleep(8000);
		
		browser.getAllWindowHandles().then(function(handle)
				{
			
		browser.switchTo().window(handle[1]);
		browser.wait(EC.visibilityOf(bookingPage.scaCard), 10000);
		bookingPage.scaCard.click();
		
		browser.sleep(8000);
		var frame = element(by.xpath('//iframe[@name="__privateStripeFrame9"]'));
//		browser.wait(EC.presenceOf(frame), 10000);

		browser.switchTo().frame('__privateStripeFrame9');
		browser.switchTo().frame('challengeFrame');
//		browser.wait(EC.visibilityOf(bookingPage.authorizeButton), 10000);
		bookingPage.authorizeButton.click();
			
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