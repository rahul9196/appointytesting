var EC = protractor.ExpectedConditions;
function staffPage(){
	
	var stafftext = element(by.xpath('//div[contains(concat(" ",@class," "),"app-staff-list-container")]//h4[@class="h4-responsive text-capitalize"]'));
	var staffNextButton = element(by.xpath('//span[text()="Next"]'));
	
	
	this.clickNextButton = function(){
		
		stafftext.isPresent().then(function(value)
				{
			if(value){
				
				staffNextButton.click();
				browser.wait(EC.stalenessOf(stafftext), 20000);
					}
				})
	}
	
	
}


module.exports = new staffPage();