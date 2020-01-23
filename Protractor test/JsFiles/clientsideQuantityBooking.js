		var bookingPage = require('../pageObjects/clientBookingPageObjects.js')


		describe('Test Quantity Booking', function(){
			
			var EC = protractor.ExpectedConditions;
			
				beforeEach(function() 
						{
					
					browser.get('http://qa-booking.appointy.com/testautobooking')
					
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	        browser.waitForAngularEnabled(false);
	        
						});
			
		
		
		it('Check if qauntity is enabled',function()
			
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
						
		browser.sleep(1000)			
		bookingPage.serviceList.count().then(function(value)
						{
			
			if(value>0){
				bookingPage.nextButton.click();
			}
						})
						
// --- staff page
						
		browser.sleep(1000)				
		bookingPage.selectTimeTitle.isPresent().then(function(value)
				{
			if(!value){
				
				bookingPage.nextButton.click();
				browser.wait(EC.stalenessOf(element(by.xpath('//h4[text()="Select Therapist"]'))), 20000);
			}
				})
	
		
//		date and time selection page
		
		browser.wait(EC.stalenessOf(bookingPage.loader), 20000);
	
		bookingPage.bookingDate.click();
		
		browser.wait(EC.elementToBeClickable(bookingPage.bookingTime), 5000);
		
		bookingPage.bookingTime.click().then(function(){
			
			bookingPage.quantityNumber.isPresent().then(function(quantity){
				if(quantity){
					bookingPage.quantityNumber.getText().then(function(value)
							{
						console.log('quantity number = '+value)
						var x = value.split(" ");
						
						expect(x[0]>1).toBe(true);
					})
				
				}else{
					console.log("There is no quantity")
				}
			})
		})
	})
	
	
	fit('Check order cost calculation if quantity selected', function(){

//	---- service page
			
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
						
// --- staff page
						
		browser.sleep(1000)				
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
		
		bookingPage.bookingTime.click().then(function(){
			
			bookingPage.quantityNumber.isPresent().then(function(quantity){
				if(quantity){
					bookingPage.quantityNumber.getText().then(function(value)
							{
						console.log('quantity number = '+value)
						var x = value.split(" ");
						
						
		
		browser.wait(EC.stalenessOf(bookingPage.timetext), 5000)
				
//	--- addon page
						
						bookingPage.loginformtext.isPresent().then(function(value)
								{
							if(!value){ 
								bookingPage.nextButton.click();
							}
								})
						
//	----login page
								
						browser.wait(EC.presenceOf(bookingPage.username), 5000);
						bookingPage.username.sendKeys('appointytest@gmail.com')
						
						bookingPage.nextButton.click();		
						
						browser.getAllWindowHandles().then(function(handle){
							browser.switchTo().window(handle[1]);
							
							browser.wait(EC.presenceOf(bookingPage.password), 5000);
										
								bookingPage.password.sendKeys('123456');
								bookingPage.loginButton.click();
								browser.switchTo().window(handle[0]);
								

							})
						
						browser.wait(EC.stalenessOf(bookingPage.loginformtext), 10000);

//					intake form page
						
						bookingPage.nextButton.isPresent().then(function(value)
								{
							if(value){
								bookingPage.nextButton.click();
							}
								})
								
//						order summary page
								
						browser.wait(EC.urlContains('cart'), 10000);
						
						browser.sleep(3000)
						
						element(by.xpath('//div[contains(concat(" ",@class," "), "app-cart-item-price")]'))
						.getText().then(function(amount){
							var netAmount = amount.split(".");
							console.log('netAmount='+netAmount[1])
						
							
						})
						
						bookingPage.orderamount.getText().then(function(text)
									{
							var orderCost = text.split(".")
							
							
						
						
						bookingPage.quantityDropdown.click();
						bookingPage.quantityList.filter(function(el)
									{
							return el.getText().then(function(num){
								
								console.log('num='+num)
								console.log('X1='+x[0]);
								return num == browser.params.quantity;
								
								
						})
							
						}).first().click()
						
							})
							
						})
					
				}
				
				else
					{
			console.log("There is no quantity")
					}
				
			})
		})
	})
})