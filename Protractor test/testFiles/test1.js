
//var async = require('asyncawait/async');
//var await = require('asyncawait/await');


describe('test', function(){
	
	browser.waitForAngularEnabled(false);
	
//	it('test',  async function(){
//		await browser.get('https://qa-booking.appointy.com/graps')
//		
//		var EC = protractor.ExpectedConditions;
//		browser.wait(EC.stalenessOf(await element(by.xpath('//svg[@class="svg-loader"]'))), 15000)
//		await element(by.xpath('//span[text()="Massage zamók"]')).click();
//		 
//	})
	
	it('test',  function(){
		 browser.get('https://appointy.com')
		browser.getTitle()
		.then(function(title){
			console.log(title)
		})
	})
	
	it('test',  function(){
		 browser.get('https://indiatoday.in.com')
		 browser.getTitle()
		.then(function(title){
			console.log(title)
		})
	})
	
	it('test',  function(){
		 browser.get('https://orange.com')
		 browser.getTitle()
		.then(function(title){
			console.log(title)
		})
	})
	
	it('test',  function(){
		 browser.get('https://UAT.com')
		 browser.getTitle()
		.then(function(title){
			console.log(title)
		})
	})
	
	it('test',  function(){
		 browser.get('https://en.wikipedia.org/wiki/Bala_(2019_film)')
		 browser.getTitle()
		.then(function(title){
			console.log(title)
		})
	})
})