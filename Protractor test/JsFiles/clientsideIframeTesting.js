var bookingPage = require('../pageObjects/clientBookingPageObjects.js')

	describe("iFrame Booking", function() {
	browser.waitForAngularEnabled(false);
	var EC = protractor.ExpectedConditions;
	beforeEach(function(){
		browser.get("file:///C:/Users/Appointy/git/appointytesting/Protractor%20test/iFrameFile.html")
		
		 originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	})
	
	it('booking',function(){
		

		browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
//		---- service page
		
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
			console.log('sr list count='+value)
			if(value>1){
				console.log('inside list')
				browser.sleep(1000)
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
		bookingPage.username.sendKeys('appointytest@gmail.com')
		browser.sleep(1000)
		bookingPage.nextButton.click();		
		browser.sleep(3000)
		browser.getAllWindowHandles().then(function(handle){
				console.log('window handle='+handle[1])
				browser.switchTo().window(handle[1]);
				browser.wait(EC.presenceOf(bookingPage.password), 5000);
				bookingPage.password.sendKeys('123456');
				bookingPage.loginButton.click();
				browser.switchTo().window(handle[0]);
				

			})


//	intake form page
//		browser.sleep(2000)
		browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
		browser.wait(EC.stalenessOf(bookingPage.loginformtext), 15000);
//		bookingPage.nextButton.isPresent().then(function(value)
		element(by.xpath('//div[@class="row app-intake-form m-0"]')).isPresent().then(function(value)
				{ 
			console.log('intake form value'+value)
			if(value){ console.log('intake form')
				browser.sleep(1000)
				bookingPage.nextButton.click().then(function(){
					console.log('intake form btn click')
				});
			}
				})
				
//		order summary page
				
		browser.wait(EC.elementToBeClickable(bookingPage.checkoutButton), 12000);		

		bookingPage.checkoutButton.click();
		
//		browser.sleep(1000)
		
		bookingPage.checkoutButton.getText().then(function(value)
				{
			
			if(value.search("PAY") >-1){
				console.log("payment mila")
		browser.wait(EC.visibilityOf(bookingPage.stripe), 5000);
				console.log("wait kiya")
		bookingPage.stripe.click();				
		
		browser.getAllWindowHandles().then(function(handle)
				{
			
		browser.switchTo().window(handle[1]);
		browser.wait(EC.visibilityOf(bookingPage.normalCard), 10000);
		bookingPage.normalCard.click();
					
		browser.switchTo().window(handle[0]);
					
						
				})
				browser.sleep(2000)
				browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
			}else{console.log("payment nahi mila")}
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