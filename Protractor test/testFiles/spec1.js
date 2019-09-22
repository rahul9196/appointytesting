describe("protractor demo app",function(){
	
	var text1 = element(by.model('first'));
	var text2 = element(by.model('second'));
	var btn = element(by.id('gobutton'));
	
	function add(a, b){
		text1.sendKeys(a);
		text2.sendKeys(b);
		btn.click();
	}
	
	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo');
	
	})
	
	it("get title",function(){
		
			expect(browser.getTitle()).toEqual('Super Calculator');
		
	})
	
	it("should add 1 and 2",function(){
		
		add(1, 2)
		expect(element(by.binding('latest')).getText()).toEqual('3');
		
	})
	
	it("should add 2 and 5", function(){
		
		add(2, 5)
		expect(element(by.binding('latest')).getText()).toEqual('7');
		
	})
	
	it('read the value from an input',function(){
		
		text1.sendKeys(10);
		expect(text1.getAttribute('value')).toEqual('10');
		
	})
})