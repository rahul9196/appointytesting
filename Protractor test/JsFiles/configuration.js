var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');



exports.config = {
  framework: 'jasmine',
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: [ 'recurringbooking.js'],
  
  
  params:{
	  url:'http://juliemr.github.io/protractor-demo',
	  num1:'4',
	  num2:'6',
	  result:'10',
	Name : 'rahul',
	Email : 'dfghjgf@hgfgh.com',
	Country : '254',
	Username : 'testuser323',
	password : 'appointy1',
	Date : 'March 10, 2020 02:30 PM',
	Staff : '366706',
	customerName : 'test',
	email : 'appointytest@gmail.com',
	country : 'India',
	state : 'Madhya',
	city : 'Indore'
  },
  
  
  multiCapabilities: [
//	  {'browserName': 'firefox'},
	 {'browserName': 'chrome',
//		 'marionnette': true
//		 chromeOptions: {
//			 args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
//		   }
//		 'shardTestFiles': true,
//	      'maxInstances': 1
	 }
	  ],
  allScriptsTimeout: 30000,
	  
	  suites:{
		  Smoke : ['spec1.js','Spec2.js']
	  },
	  
	  onPrepare: function() {
		  browser.driver.manage().window().maximize();
		  
		  jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );

		}

  }
