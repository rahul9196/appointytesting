

describe('test demo', function(){

	
	it('custom locator', function(){
		
		browser.waitForAngularEnabled(false);
		browser.get('http://the-internet.herokuapp.com/')
		
		by.addLocator('newLink',
				
		function(linkText,opt_parentElement, opt_rootSelector){
			
			var using = opt_parentElement || document,
			links = using.querySelectorAll('a');
			
			return Array.prototype.filter.call(links, function(button){
				
				return button.textContent == linkText;
			})
			
			
			
		}
		
		
		)
		
		element(by.newLink('Dynamic Content')).click();
		browser.sleep(2000)
	})
})

