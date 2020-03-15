
var k= [2, 3, 5, 7, 8, 9, 11, 14, 16,17, 19]
 
 
 for(var i=0; i<k.length; i++){
	 
	 for(var j=i+1; j<=k.length; j++){
		 
		 var a=k[i]; b=k[j];
		 
		 let x=a+b;
		 
		 if(x==20)
		 {
			 console.log('a='+a,'b='+b)
			 
		 }
	 }
 }