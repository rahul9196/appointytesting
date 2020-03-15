

function test(){
	
	this.switchcase = function(){
		
		
		browser.getAllWindowHandles().then(function(handle)
				{ 
			browser.waitForAngularEnabled(false)
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
	}
}

module.exports = new test();