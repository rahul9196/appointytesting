	var login = require('../pageObjects/LoginPageObjects.js');
	var myspace = require('../pageObjects/mySpaceObjects.js');
	var datepicker = require('../pageObjects/datePickerObjects.js');
	var dayview = require('../pageObjects/dayViewObjects.js');
	var xl = require('./dataReader.js');

	describe('Book appointment',function(){
	
	beforeAll(function(){
		browser.waitForAngularEnabled(false);
		login.getUrl();
		login.login("testuser306","appointy1");
		browser.waitForAngularEnabled(true);
	})
	
	beforeEach(function() {
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
		    });

	
	var test_data = xl.read_from_excel('Sheet1', './testData.xlsx');
	
	test_data.forEach(function(data){
		
		console.log(data.Date); //text
		
		
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
	
		it('Admin side - recurring appointment', function(){
			
			
			browser.getCurrentUrl().then(function(value){
				if(value!='https://qa-business.appointy.com/app/calendar'){
					myspace.calendaricon.click();
				}
			})
			
			
			browser.ignoreSynchronization = true;
			
			browser.sleep('3000')
			var isPresent = EC.elementToBeClickable(dayview.calendartime);
			browser.wait(isPresent, 8000)
			console.log('time=',dayview.calendartime)
			
			browser.sleep('2000')
			dayview.calendartime.click();
			
			browser.sleep('1000')
			
			dayview.servicetab.click();
			browser.sleep('1000')
			dayview.service.click();
			
			browser.sleep('1000')
			
			dayview.recurringlink.click();
			browser.sleep('2000')
			dayview.recurroption.click();
			dayview.recurrdate.click();
			browser.sleep('2000')
			
			datepicker.recurryeartextbox.clear();
			datepicker.recurryeartextbox.sendKeys(year)
			
			
			datepicker.recurrmonth.getText().then(function(value)
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
			
			
			var progressbarstale = EC.presenceOf(myspace.progressbar);
			browser.wait(progressbarstale, 8000);
			
			dayview.selectrecurr.click();
			
			dayview.customertextbox.sendKeys("test");
			
			var customerlistwait = EC.visibilityOf(dayview.customerlist);
			browser.wait(customerlistwait, 8000);
			
			dayview.selectCustomer("appointytest@gmail.com")
			
			
			var isClickable1 = EC.elementToBeClickable(dayview.bookbutton);
			browser.wait(isClickable1, 8000)
			
			
			browser.sleep(2000)
			dayview.bookbutton.click();
			browser.wait(EC.presenceOf(dayview.successnotification), 120000)
			expect(dayview.successnotification.getText()).toBe('Appointment added successfully!')
			browser.sleep(3000)
		})
		
	})
	
		
	
})