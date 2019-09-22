describe('login to appointy',function(){
	browser.waitForAngularEnabled(false);
	
	browser.get('https://qa-business.appointy.com');
	it('should login',function()
			{
		
		element(by.id('Username')).sendKeys('testuser306');
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys('appointy1');
		element(by.css('.ladda-label')).click();
		
		browser.waitForAngularEnabled(true);
		
			})
	    
	var myDate = new Date(browser.params.Date); // Your timezone!
	var myEpoch = myDate.getTime();
	
	var splitTime = browser.params.Date.split(" ");
	var myTime = splitTime[3]+' '+splitTime[4];	
	console.log(myTime, 'myTime')
	
	var dateId = browser.params.Staff+'-'+myEpoch;
	
	
	console.log("hey date ="+dateId)
	
	var dt = myDate.getDate(); // date of the given date
		
	var year = myDate.getFullYear(); // year from the given date
	
	var monthArray = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		  ];
	var myMonth = monthArray[myDate.getMonth()]; // Month from the given date
	
	console.log(dt);
	
	var EC = protractor.ExpectedConditions;
	
	it('book appointment', function()
			{
			
			element(by.xpath('//i[@class="icon icon-calendar-full app-navbar__item-icons a-pad-7"]')).click(); //click on calendar view icon
						
			browser.ignoreSynchronization = true;
			
		
			
			var calendar = element(by.xpath('//span[@class="text-blue-2"]'));
			var isClickable = EC.elementToBeClickable(calendar);
			browser.wait(isClickable, 8000)
			calendar.click();
			
			
			var curYear = element(by.xpath('//input[@class="numInput cur-year"]'));
			curYear.clear();
			curYear.sendKeys(year)
			
			
			element(by.xpath('//span[@class="cur-month"]')).getText().then(function(value)
					{
				
				var expIndex = monthArray.indexOf(myMonth)
				var currIndex = monthArray.indexOf(value)
				var dif = Math.abs(expIndex - currIndex)
								
				if(expIndex == currIndex)
						{
						console.log('month is selected')
						}
				
				else if(expIndex > currIndex)
						{
							for(i=0; i<dif; i++)
							{
							element(by.xpath('//span[@class="flatpickr-next-month"]')).click()
							browser.sleep(1000)
							}
						} 
				
				else if(expIndex < currIndex)
						{
							for(i=0; i<dif; i++)
							{
							element(by.xpath('//span[@class="flatpickr-prev-month"]')).click()
							browser.sleep(1000)
							}
						}
					})
			
							


			
					element.all(by.css('span[class="flatpickr-day "]')).filter(function(elem, index) 
							
								{
							return elem.getText().then(function(text) 
									{
							return parseInt(text) == dt;
									 });
								}).first().click();
	
				
		
			element(by.id(dateId)).click();
			
			browser.sleep(5000)
			
			
			element(by.xpath('//input[@placeholder="Select Customer"]')).sendKeys(browser.params.customerName);
			
			
			var customerlist = element(by.xpath('//div[@class="selectize-dropdown single active"]'));
			var customerwait = EC.visibilityOf(customerlist);
			browser.wait(customerwait, 8000);
			
			element.all(by.xpath('//span[@class="word-spacing-none"]')).filter(function(value)
					{
				return value.getText().then(function(text)
						{
					return text == browser.params.email;
						})
					}).first().click();
			

			
			var bookbutton = element(by.xpath('//button[@class="orange btn lighten-1 m-0 ladda-button"]'));
			var isClickable1 = EC.elementToBeClickable(bookbutton);
			browser.wait(isClickable1, 8000)
			bookbutton.click();
			
			browser.sleep(3000)
			
			
			

		})
	
	
})