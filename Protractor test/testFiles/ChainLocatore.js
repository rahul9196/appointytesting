describe('protractor chain locatore', function(){
	
	it('find element in chain locatore', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(3);
		element(by.model('operator')).element(by.css('option:nth-child(2)')).click();
		element(by.model('second')).sendKeys(4);
		
		element(by.id('gobutton')).click();
		
		element(by.model('first')).sendKeys(3);
		element(by.model('operator')).element(by.css('option:nth-child(1)')).click();
		element(by.model('second')).sendKeys(4);
		
		element(by.id('gobutton')).click();
		
		element(by.model('first')).sendKeys(3);
		element(by.model('operator')).element(by.css('option:nth-child(3)')).click();
		element(by.model('second')).sendKeys(4);
		
		element(by.id('gobutton')).click();
		
		element(by.model('first')).sendKeys(3);
		element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
		element(by.model('second')).sendKeys(4);
		
		element(by.id('gobutton')).click();
		
		element.all(by.repeater('result in memory')).count().then(function(text){
			
			console.log(text);
		})
		
//		element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
//			
//			console.log(text);
//			
//		})
		
		element.all(by.repeater('result in memory')).each(function(item){
			
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				
				console.log(text);
				
			})
			
		})
	})
	
	
	
})