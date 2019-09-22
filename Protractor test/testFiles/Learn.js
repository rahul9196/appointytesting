describe('chind window', function()
		{
			
			it('learn how to handle child window', function()
					{
						browser.get('https://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.presenceOf');
						element(by.linkText('View code')).click();
						
						browser.getAllWindowHandles().then(function(handle)
								{ browser.waitForAngularEnabled(false)
							browser.switchTo().window(handle[1])
							browser.getTitle().then(function(title)
									{
								console.log(title);
									})
									browser.waitForAngularEnabled(true)
							browser.switchTo().window(handle[0])
							browser.getTitle().then(function(title)
									{
								console.log(title);
									})
								})
						
				
					})
	
	
	
		})