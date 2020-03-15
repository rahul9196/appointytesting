
var obj = require('./JSObjectDemo3.js')
describe('chind window', function()
		{
			
			it('learn how to handle child window', function()
					{
						browser.get('https://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.presenceOf');
						element(by.linkText('View code')).click();
						
						obj.switchcase();
						
				
					})
	
	
	
		})