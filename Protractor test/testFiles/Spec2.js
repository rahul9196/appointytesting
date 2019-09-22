/**
 * 
 */
describe("angular demo app",function(){
	
	var num1 = element(by.model('first'));
	var num2 = element(by.model('second'));
	var btn = element(by.id('gobutton'));
	var history = element.all(by.repeater('result in memory'));
	
	function add(a, b){
		
		num1.sendKeys(a);
		num2.sendKeys(b);
		btn.click();
	}
	
	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo');
	})
	
	it('search history', function(){
		
		add(2, 3);
		add (4, 6);
		expect(history.count()).toEqual(2);
		
		add(6, 7);
		expect(history.count()).toEqual(3);
	})
})