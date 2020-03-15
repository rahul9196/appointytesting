
var fetch = require('node-fetch');

describe("broken link", function(){

	it("find broken link", function(){
		browser.waitForAngularEnabled(false)
		browser.get('https://www.seleniumeasy.com');
		
		var links = element.all(by.tagName('a'));
		links.each(function(el){
			
			el.getAttribute("href").then(function(url){
				
				if(url!=null && !url.includes("javascript:void(0)") && !url.includes("mailto")){
				
					fetch(url).then(function(res1){
					
					if(res1.status!=200){
						console.log(url+"---->"+res1.statusText)
					}
					
					
				})
				}
				
			})
		})
		
	})
})
