let num = 14;
let count = 0;
for(i=2; i<num; i++){
	if(num%i == 0){
		count ++;
	}
}
console.log((count == 0)? "It is a prime number" : "It is not a prime number")
 