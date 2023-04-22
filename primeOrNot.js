let number = 239;
let counter = 0;

if(number <=0 || number == 1){
	console.log("The given number is not a prime");
}
for(let i=1; i<=number; i++) {

	if(number%i == 0) {
		counter++;
	}
}

if(counter == 2) {
	console.log("The given number is a prime number");
}

else {
	console.log("The given number is not a prime number");
}