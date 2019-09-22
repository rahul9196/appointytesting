describe('dropdown value', function(){
	
	function calc(a, b, c){
		
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		
		element.all(by.tagName('option')).each(function(item){
			
			item.getAttribute('value').then(function(values){
				
				if(values==c){
					item.click();
				}
				
			})
			
			
		})
		
	element(by.id('gobutton')).click();
	}
	it('retrive values', function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		
		calc(2,3,"ADDITION")
		calc(4,5,"MULTIPLICATION")
		calc(4,1,"DIVISION")
		calc(9,2,"MODULO")
		calc(5,7,"MULTIPLICATION")
		calc(2,9,"SUBTRACTION")
		element.all(by.repeater('result in memory')).each(function(item){
			
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				
				console.log(text);
				
			})
			
		})
	})
})