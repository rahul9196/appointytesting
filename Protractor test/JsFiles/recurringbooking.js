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
	
	beforeEach(function() {
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
		    });

	
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
	
		it('- recurring appointment', function(){
			
			
			browser.getCurrentUrl().then(function(value){
				if(value!='https://qa-business.appointy.com/app/calendar'){
					myspace.calendaricon.click();
				}
			})
			
			
			browser.ignoreSynchronization = true;
			
			var isPresent = EC.elementToBeClickable(dayview.calendartime);
			browser.wait(isPresent, 8000)
			
			dayview.calendartime.click();
			
			browser.sleep('1000')
			
			dayview.servicetab.click();
			browser.sleep('1000')
			dayview.service.click();
			
			browser.sleep('1000')
			
			dayview.recurringlink.click();
			browser.sleep('2000')
			element(by.id('recurr-list')).element(by.css('li:nth-child(3)')).click();
			element(by.xpath('//span[text()="date"]')).click();
			browser.sleep('2000')
			
			
			
			datepicker.recurryeartextbox.clear();
			datepicker.recurryeartextbox.sendKeys(year)
			
			
			datepicker.recurrcurrmonth.getText().then(function(value)
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
								datepicker.recurrnextbutton.click();
							browser.sleep(1000)
							}
						} 
				
				else if(expIndex < currIndex)
						{
							for(i=0; i<dif; i++)
							{
								datepicker.recurrpreviousbutton.click()
							browser.sleep(1000)
							}
						}
					})
			
						datepicker.recurrdates.filter(function(elem, index) 
							
								{
							return elem.getText().then(function(text) 
									{
							return parseInt(text) == dt;
									 });
								}).first().click();
			
			var progressbar = element(by.xpath('//div[@id="progress-bar" and @style="display: none;"]'));
			var progressbarstale = EC.presenceOf(progressbar);
			browser.wait(progressbarstale, 8000);
			element(by.xpath('//button[@class="btn blue-2 z-depth-0 btn-sm"]')).click();
			
			element(by.xpath('//input[@placeholder="Select Customer"]')).sendKeys("rahul");
			var customerlist = element(by.xpath('//div[@class="selectize-dropdown single active"]'));
			var customerwait = EC.visibilityOf(customerlist);
			browser.wait(customerwait, 8000);
			
			element.all(by.xpath('//span[@class="word-spacing-none"]')).filter(function(value)
					{
				return value.getText().then(function(text)
						{
					return text == "rahulgupta@appointy.com";
						})
					}).first().click();
			
			var bookbutton = element(by.xpath('//span[text()="Book"]'));
			var isClickable1 = EC.elementToBeClickable(bookbutton);
			browser.wait(isClickable1, 8000)
			bookbutton.click();
			
			browser.sleep(2000)
			
			browser.wait(EC.presenceOf(dayview.successnotification), 8000)
			expect(dayview.successnotification.getText()).toBe('Appointment added successfully!')
			browser.sleep(3000)
		})
		
	})
	
	    
	
	
	
})