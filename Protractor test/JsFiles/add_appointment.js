	var login = require('../pageObjects/LoginPageObjects.js');
	var myspace = require('../pageObjects/mySpaceObjects.js');
	var datepicker = require('../pageObjects/datePickerObjects.js');
	var dayview = require('../pageObjects/dayViewObjects.js');
	var xl = require('./dataReader.js');

	describe('Book appointment',function(){
	
	beforeAll(function(){
		browser.waitForAngularEnabled(false);
		login.getUrl();
		login.login();
		browser.waitForAngularEnabled(true);
	})
	
	
	var test_data = xl.read_from_excel('Sheet1', './testData.xlsx');
	
	test_data.forEach(function(data){
		
		console.log(data.Date);
		
		
	var myDate = new Date(browser.params.Date); // Your timezone!
	var myEpoch = myDate.getTime();
	
	var splitTime = browser.params.Date.split(" ");
	var myTime = splitTime[3]+' '+splitTime[4];	
	console.log(myTime, 'myTime')
	
	var dateId = data.Staff+'-'+myEpoch;
	
	
	console.log("hey date ="+dateId)
	
	var dt = myDate.getDate(); // date of the given date
		
	var year = myDate.getFullYear(); // year from the given date
	
	var monthArray = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		  ];
	var myMonth = monthArray[myDate.getMonth()]; // Month from the given date
	
	console.log(dt);
	
	var EC = protractor.ExpectedConditions;
	
	it('book a single appointment', function()
			{
			
			myspace.calendaricon.click(); //click on calendar view icon
						
			browser.ignoreSynchronization = true;
			
			var isClickable = EC.elementToBeClickable(datepicker.currentdate);
			browser.wait(isClickable, 8000)
			datepicker.currentdate.click();
			
			
			datepicker.yeartextbox.clear();
			datepicker.yeartextbox.sendKeys(year)
			
			
			datepicker.currmonth.getText().then(function(value)
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
								datepicker.nextbutton.click()
							browser.sleep(1000)
							}
						} 
				
				else if(expIndex < currIndex)
						{
							for(i=0; i<dif; i++)
							{
								datepicker.previousbutton.click()
							browser.sleep(1000)
							}
						}
					})
			
							


			
					datepicker.dates.filter(function(elem, index) 
							
								{
							return elem.getText().then(function(text) 
									{
							return parseInt(text) == dt;
									 });
								}).first().click();
	
				
		
			element(by.id(dateId)).click();
			
			browser.sleep(5000)
			
			
			element(by.xpath('//input[@placeholder="Select Customer"]')).sendKeys(data.customerName);
			
			
			var customerlist = element(by.xpath('//div[@class="selectize-dropdown single active"]'));
			var customerwait = EC.visibilityOf(customerlist);
			browser.wait(customerwait, 8000);
			
			element.all(by.xpath('//span[@class="word-spacing-none"]')).filter(function(value)
					{
				return value.getText().then(function(text)
						{
					return text == data.customerEmail;
						})
					}).first().click();
			

			
			var bookbutton = element(by.xpath('//button[@class="orange btn lighten-1 m-0 ladda-button"]'));
			var isClickable1 = EC.elementToBeClickable(bookbutton);
			browser.wait(isClickable1, 8000)
			bookbutton.click();
			browser.sleep(2000)
			expect(dayview.successnotification.getText()).toBe('Appointment added successfully!')
			browser.sleep(3000)
			
			
			

		})
		
		
		
	})
	
	    
	
	
	
})