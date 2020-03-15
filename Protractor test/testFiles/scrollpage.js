describe('login to appointy',function(){
	browser.waitForAngularEnabled(false);
	
	browser.get('https://appointy.com');
//	it('should login',function()
//			{
//		
//		element(by.id('Username')).sendKeys('testuser306');
//		element(by.css('.ladda-label')).click();
//		element(by.id('Password')).sendKeys('appointy1');
//		element(by.css('.ladda-label')).click();
//		
//		browser.waitForAngularEnabled(true);
//		
//			})
			
			it('book appointment', function()
			{
				browser.sleep(4000);
			browser.executeScript('scrollTo(0,document.body.scrollHeight)');
			
			browser.sleep(4000);
			
			})
			
})