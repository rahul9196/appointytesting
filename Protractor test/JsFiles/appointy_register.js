describe('register new account', function(){
	browser.waitForAngularEnabled(false);
	
	browser.get('https://qa-business.appointy.com/account/register');
	var name = element(by.id('inputYourFirstName'));
	var email = element(by.id('inputEmail'));
	var username = element(by.id('inputUsername'));
	var password = element(by.id('inputPassword'));
	
	function signup(a, b, c, d, e){
		
		name.sendKeys(a);
		email.sendKeys(b);
		
		/*element.all(by.tagName('option')).each(function(item){
			
			item.getAttribute('value').then(function(values){
				
				if(values==e){
				element(by.id('ddlCountry')).click();
				}
			})
			
		})*/
		
		element(by.id('ddlCountry')).element(by.css('option:nth-child(10)')).click();
		
		element(by.id('signupBt')).click();
		username.sendKeys(c).then(function(){
			browser.sleep(5000);
		})
		password.sendKeys(d).then(function(){
			browser.sleep(5000);
		})
		element(by.id('wp-signup-checkbox')).click();
		
		
	}
	
	it('should signup successfully', function(){
		
		signup(browser.params.Name, browser.params.Email, browser.params.Username, browser.params.password, browser.params.Country);
		
		element(by.id('submitBtn')).click().then(function(){
			browser.sleep(60000);
		})
			
		
		// expect(element(by.css('hightlight')).getText()).toContain('https://booking.appointy.com')
		element(by.id('next-btn-signup')).click();
		
		
		
		
	})
	
	it('account setup', function(){
		
		element(by.id('business')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.cssContainingText('.wizard-list-item-title', 'Beauty & Wellness')).click();
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-wizard/div/div[2]/div/ul/li/div/app-wizard-profession/div[3]/div[2]/div[1]/input')).sendKeys('salon');
		element(by.cssContainingText('.wizard-list-item-title', 'Salon')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		
		element(by.className('ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input ng-star-inserted')).sendKeys('Hair Cut');
		element(by.className('ng-untouched ng-pristine ng-valid')).sendKeys('30');
		//element(by.xpath('row mb-1 wizard-service ng-star-inserted')).element(by.css('Div:nth-child(3)')).sendKeys('100');
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		
		element(by.id('wizard-business-name')).sendKeys('Appointy information technology private limited');
		element(by.id('wizard-business-address')).sendKeys('near ashima mall, hoshangabad road').then(function(){
			browser.sleep(30000);
		})		
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-wizard/div/div[2]/div/ul/li/div/app-wizard-business/div[3]/div[1]/div/div/div/div[6]/input')).sendKeys('233444');
		
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
//		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		element(by.className('btn btn-primary')).click();
	})
	
})