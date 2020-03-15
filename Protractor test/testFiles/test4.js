
var servicePage = require('../pageObjects/clientBookingPageObjects.js')
var staffPage = require('../pageObjects/clientSide_SelectStaffPage.js')
var DateTimePage = require('../pageObjects/clientSide_SelectDateTime.js')
var AddonPage = require('../pageObjects/clientSide_SelectAddon.js')
var LoginPage = require('../pageObjects/clientSide_LoginPage.js')
var OrderSummaryPage = require('../pageObjects/clientSide_OrderSummary.js')
var intakeformpage = require('../pageObjects/clientSide_FillIntakeForm.js')

describe('test cient booking', function(){
			
			var EC = protractor.ExpectedConditions;
			
				beforeEach(function() 
						{
					
			browser.get('http://qa-booking.appointy.com/graps')
					
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	        browser.waitForAngularEnabled(false);
	        
						});
//				browser.manage().timeouts().implicitlyWait(8000)

it('book appointment', function(){
	servicePage.waitForLoader();
	servicePage.selectService();
//	browser.sleep(2000)
	staffPage.clickNextButton();
	DateTimePage.clickOnDateTime();
	AddonPage.click_addonNextButton();
	LoginPage.loginWhileBooking();
//	browser.sleep(10000)
//	LoginPage.completeLogin();
	intakeformpage.clickOnNext();
//	browser.sleep(3000)
	OrderSummaryPage.clickOnCheckoutButton();
	OrderSummaryPage.selectPaymentGatewayandPay();
})

})