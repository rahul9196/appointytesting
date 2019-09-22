/**
 * 
 */

function car()
{
	
	this.color = "red";
	this.engine = "turbo";
	this.brand = "BMW";
	
	this.getModel = function(){
		console.log("BMW 2000");
	};


};

//var a = new car();
//
//a.getModel();	

module.exports = new car();