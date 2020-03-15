//var x="rahul";
//
//let d = x.split('');
//console.log(typeof x);
//
//let z =[1,2,3]
//
//console.log(d.reverse().join(''))
//
//console.log(8+2/2-7*4);

let x = {value: 10, price:600, name:"rahul"}

for(let key in x)
	console.log(key, x[key])
	
	let role = "gust"
		
		switch(role){
			
		case 'admin':
		console.log("admin user")
		break;
		
		default :
		console.log('no user')
				
		
		
		}



function myCar(color,value,model,brand){
	return{
		color,
		value,
		model,
		brand
	}
	
}

let t = myCar('red',3000,'d5','fiat')

for(let key in t){
	console.log(key, t[key])
	if(t.color=="red")
		break;
}


if(!null){
	console.log('i am here')
}else{
	console.log('i am there')
}

let r = 1/0;

console.log(r);


var rahu = "xyz";
var rahu;
console.log(typeof null)

var ran='2'
	console.log(typeof NaN);