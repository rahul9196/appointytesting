var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');



exports.config = {
  framework: 'jasmine',
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: [ 'clientsideBookSingleAppt.js'],
  
  useAllAngular2AppRoots: true,
  
  params:{
	  url:'http://juliemr.github.io/protractor-demo',
	  num1:'4',
	  num2:'6',
	  result:'10',
	Name : 'rahul',
	Email : 'dfghjgf@test45.com',
	Country : '254',
	Username : 'testuser3116',
	password : 'appointy1',
	Date : 'January 10, 2020 02:30 PM',
	time : "02:30 pm",
	Staff : '366706',
	customerName : 'test',
	email : 'dfghJ@test45.com',
	country : 'India',
	state : 'Madhya',
	city : 'Indore',
	servicename : "Hair cut 2",
	quantity : "04"
  },
  
  

  multiCapabilities: [
//	  {'browserName': 'firefox'},
	 {'browserName': 'chrome',
//		 'marionnette': true
//		 chromeOptions: {
//			 args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
		   }
//		 'shardTestFiles': true,
//	      'maxInstances': 1
//	 }
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
