

function datepicker(){
	
	this.currentdate = element(by.xpath('//span[@class="text-blue-2"]'));
	this.yeartextbox = element(by.xpath('//input[@class="numInput cur-year"]'));
	this.currmonth = element(by.xpath('//span[@class="cur-month"]'));
	this.nextbutton = element(by.xpath('//span[@class="flatpickr-next-month"]'));
	this.previousbutton = element(by.xpath('//span[@class="flatpickr-prev-month"]'));
	this.dates = element.all(by.css('span[class="flatpickr-day "]'));
	
	this.recurryeartextbox = element(by.className('flatpickr-calendar animate showTimeInput arrowTop open')).element(by.css('input[class="numInput cur-year"]'));
	this.recurrcurrmonth = element(by.className('flatpickr-calendar animate showTimeInput arrowTop open')).element(by.css('span[class="cur-month"]'));
	this.recurrnextbutton = element(by.className('flatpickr-calendar animate showTimeInput arrowTop open')).element(by.css('span[class="flatpickr-next-month"]'));
	this.recurrpreviousbutton = element(by.className('flatpickr-calendar animate showTimeInput arrowTop open')).element(by.css('span[class="flatpickr-prev-month"]'));
	this.recurrcurrentdate = element(by.className('flatpickr-calendar animate showTimeInput arrowTop open')).element(by.css('span[class="text-blue-2"]'));
	this.recurrdates = element.all(by.css('span[class="flatpickr-day "]'));
	
}

module.exports = new datepicker();