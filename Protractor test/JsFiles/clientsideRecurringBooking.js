describe('angularjs homepage', function() {
  browser.get('https://qa-booking.appointy.com/graps')
  
//  beforeEach(function() {
//		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
//		        browser.waitForAngularEnabled(false);
//		    });
  
  it('test', function(done){
	  
	  browser.waitForAngularEnabled(false);
	  
	  element(by.xpath('//span[text()="Massage zamók"]')).click()
	  
	  element(by.xpath('//span[text()="Next"]')).click()
	  element(by.xpath('//span[text()="Next"]')).click()
	  
	  browser.sleep(5000)
	  done();
  })
});