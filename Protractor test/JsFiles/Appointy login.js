/**
 * 
 */
describe('login to appointy',function(){
	browser.waitForAngularEnabled(false);
	
	browser.get('https://qa-business.appointy.com');
	it('should login',function(){
		
		element(by.id('Username')).sendKeys('graps');
		element(by.css('.ladda-label')).click();
		element(by.id('Password')).sendKeys('123456');
		element(by.css('.ladda-label')).click();
		
		browser.waitForAngularEnabled(true);
		//expect(element(by.css('.pb-1')).getText()).toEqual('Enjoy your day!');
	})
	    
	
	it('create discount coupon',function(){
		
		element(by.className('icon icon-bullhorn app-navbar__item-icons a-pad-7')).click();
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-marketing/div/div/marketing-menu/div/div[2]/div/div[2]/ul/li[2]/div/span[2]')).click();
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-marketing/div/div/div/discount-coupons/div/div[1]/div/div[2]/a')).click();
		element(by.xpath('/html/body/app-root/main/app-core-layout/div/div/div/div/app-marketing/div/div/div/discount-coupons/app-marketing-discount-coupons/div/div/div/div/div[1]/div[1]/p/a')).click();
		var code = element(by.className('font-weight-bold text-uppercase')).getText();
		//var cd = code.toLowerCase()
		
		//element(by.id('c_code')).sendKeys('rahult');
		element(by.className('font-weight-bold text-uppercase')).getText().then(function(text){
			console.log(text)
		});
		element(by.id('disValue')).sendKeys('28'); 
		
		
		element(by.className('btn btn-primary z-depth-0 ladda-button')).click();
		
		//expect(element(by.xpath('/html/body/app-root/div[1]/div')).getText()).toEqual('Inserted successfully')
		element.all(by.css('ng-star-inserted')).count().then(function(text){
			
			console.log(text);
		})
		//expect(element(by.className('gt-row-content ng-star-inserted')).getText()).toEqual(cd);
		
	})
	
})