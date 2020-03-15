
	var login = require('../pageObjects/LoginPageObjects.js');
	var myspace = require('../pageObjects/mySpaceObjects.js');
	var datepicker = require('../pageObjects/datePickerObjects.js');
	var dayview = require('../pageObjects/dayViewObjects.js');
	var xl = require('../JsFiles/dataReader.js');

	describe('Book appointment',function(){
	
	beforeAll(function(){
		browser.waitForAngularEnabled(false);
		login.getUrl();
		login.login('testuser3106','Rahul123');
//		browser.waitForAngularEnabled(true);
	})
	
	beforeEach(function() {
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
		    });
	
	
	
	
	var EC = protractor.ExpectedConditions;
	
	it('book a single appointment', function()
			{

//		if(myspace.calendaricon.isPresent()){
//			console.log('my space hai')
//			myspace.calendaricon.click();
//			browser.sleep('3000')
//		}
			 //click on calendar view icon
		
					
//			browser.ignoreSynchronization = true;
		browser.wait(EC.invisibilityOf(element(by.id('progress-bar'))),10000)
//			
			element(by.xpath('//i[@tooltip="Calendar"]')).click();
			browser.sleep('3000')
//			
			var appTile = element(by.id('app29580180'));
			browser.wait(EC.presenceOf(appTile), 5000)
			
//			appTile.click();
			browser.sleep(2000)
			var newTime = element(by.id('366887-1584189000000'));
			
			
			
			browser.actions().dragAndDrop(appTile,newTime).perform().then(function(){
				console.log('yaha aaya')
				browser.wait(EC.presenceOf(element(by.xpath('//button[text()="Confirm"]'))), 5000)
				element(by.xpath('//button[text()="Confirm"]')).click();
			})
			
			
			
			
			browser.sleep(2000)
						
//			element(by.xpath('//button[text()="Details "]')).click();
			browser.sleep(2000)

		})
		
		
		
	})
	
	    
	
	
	
