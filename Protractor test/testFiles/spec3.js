/**
 * 
 */

describe('angular app locater',function(){
	
	var text1 = element(by.model('first'));
	var text2 = element(by.model('second'));
	var btn = element(by.id('gobutton'));
	
	browser.get(browser.params.url);
	
	function add(a, b){
		text1.sendKeys(a);
		text2.sendKeys(b);
		btn.click();
	}
	it('add two value',function(){
		
		add(browser.params.num1, browser.params.num2)
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(browser.params.result);
		
	})
}, 30000)