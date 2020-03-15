
var fetch = require('node-fetch');

describe("broken link", function(){

	it("find broken link", function(){
		
		browser.waitForAngularEnabled(false)
		
		browser.get('https://www.salesforce.com/in/');
//		element(by.linkText('Broken Images')).click();
		
		
		element.all(by.tagName('img')).each(function(el){
			el.getAttribute("src").then(function(image){
				
				fetch(image,{
					method: 'GET',
				    headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
				    body: null,  
					
					
				}).then(function(res){
					
					console.log(image+'---->'+res.statusText);
				})
			})
		})
		
		
	})
})
