

function intakeform(){
	
	this.nextButton = element(by.xpath('//span[text()="Next"]'))
	
	this.clickOnNext = function(){
		
		this.nextButton.isPresent().then(function(value)
				{
			if(value){
				element(by.xpath('//span[text()="Next"]')).click();
			}
				})
	}
	
}

module.exports = new intakeform();