describe("drag and drop demo", function(){
browser.waitForAngularEnabled(false)
	it("drag and drop", function(){
		
//		browser.get('https://codef0rmer.github.io/angular-dragdrop/#!/')
//		
//		var source = element(by.model('list1'));
//		var destination = element(by.model('list2'));
//		browser.sleep(2000)
//		browser.actions().dragAndDrop(source, destination).perform();
//		browser.sleep(4000)
		
		browser.get('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2')
		
		var source = element(by.id('drag1'));
		var destination = element(by.id('div2'));
		browser.sleep(2000)
		browser.actions().dragAndDrop(source, destination).perform();
		browser.sleep(4000)
		
		
		
		
	})
	
	
})

