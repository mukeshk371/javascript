/* (1) Print numbers from 1 to 10. */
console.log('(1) :-');
for(var i=0; i<=10; i++) {
	console.log(i);
}


/* (2) Print all natural numbers from 1 to n. */
console.log('(2) :-');
var n = 5;
for(var i=1; i<=n; i++) {
	console.log(i);
}


/* (3) Print all natural numbers in reverse (from n to 1) */
console.log('(3) :-');
var n = 5;
for(var i=n; i>=1; i--) {
	console.log(i);
}


/* (4) Print all alphabets from a to z. */
console.log('(4) :-');
for(var i='a'; i<'z'; i++) {
	console.log(i);
	console.log(i+1);
}


/* (5) Print all even numbers between 1 to 20. */
console.log('(5) :-');
for(var i=1; i<=20; i++) {
	if (i%2==0) {
		console.log(i);
	}
}


console.log('(5) :-');
for(var i=2; i<=20; i+=2) {
	console.log(i);
}


/* (6) Print all odd numbers between 1 to 20. */
console.log('(6) :-');
for(var i=1; i<=20; i++) {
	if (i%2 != 0) {
		console.log(i);
	}
}


console.log('(6) :-');
for(var i=1; i<=20; i+=2) {
	console.log(i);
}


/* (7) Find sum of natural numbers between 1 to n */
console.log('(7) :-');
var n = 20;
var sum = 0;
for(var i=1; i<=n; i++) {
	sum += i;
}
console.log('Sum of first Natural numbers upto '+n+' = '+sum);


/* (8) Find sum of all even numbers between 1 to n. */
console.log('(8) :-');
var n = 7;
var sum = 0;
for(var i=2; i<=n; i+=2) {
	sum += i;
	console.log(i);
}
console.log('Sum of first Even numbers upto '+n+' = '+sum);


/* (9) Find sum of all odd numbers between 1 to n. */
console.log('(9) :-');
var n = 3;
var sum = 0;
for(var i=1; i<=n; i+=2) {
	sum += i;
	console.log(i);
}
console.log('Sum of first Odd numbers upto '+n+' = '+sum);


/* (10) Print multiplication table of a number */
console.log('(10) :-');
var n = 2;
console.log('Table of '+n+' :-');
for(var i=1; i<=10; i++) {
	console.log(n*i);
}


/* (11) Find sum and average of all natural numbers between 1 to n */
console.log('(11) :-');
var n = 4;
var sum = 0;
var avg;
for(var i=1; i<=n; i++) {
	sum +=i;
	avg = sum/n;
	console.log(i);
}
console.log('Sum of first '+n+' Natural numbers = '+sum);
console.log('Average of First '+n+' Natural numbers = '+avg);


/* (12) Find cube and square of the number upto a given integer. */
console.log('(12) :-');
var n = 4;
for(var i=1; i<=n; i++) {
	console.log('Square of '+i+' :-');
	console.log(i*i);
	console.log('Cube of '+i+' :-');
	console.log(i*i*i);
}


/* (13) Find factorial of a given number */
console.log('(13) :-');
var n = 5;
var fact = 1;
for(var i=1; i<=n; i++) {
	fact=fact*i;
}
console.log('Factorial of '+n+' = '+fact);


/* (14) Display the n terms of square natural number and their sum. */
console.log('(14) :-');
var n = 4;
var sum = 0;
for(var i=1; i<=n; i++) {
	sum += i*i;
	console.log('Square of '+i+' :-');
	console.log(i*i);
}
console.log('Sum of all squares = '+sum);


/* (15) Check whether the given number is perfect number or not */
console.log('(15) :-');
var n = 6;
var sum = 0;
for(var i=1; i<n; i++) {
	if (n%i==0) {
		sum += i;
	}
}
if (sum==n) {
	console.log(n+' is a Perfect Number.');
} else {
	console.log(n+' is not a Perfect Number.');
}


/* (16) Display the pattern like right angle triangle with a number.
The pattern like :
1
12
123
1234 */
console.log('(16) :-');
console.log('-------------16-----------');
var rows = 9;
for(var i=1; i<=rows; i++) {
	var pattern="";
	for(var j=1; j<=i; j++) {
		pattern+=j;
		
	}
	console.log(pattern);
}
 console.log('-------------16-----------');


/* (17) Make such a pattern like right angle triangle with a number which will repeat a number in a row.
The pattern like :
 1
 22
 333
 4444 */
 console.log('(17) :-');
 console.log('-------------17-----------');
 var rows = 9;
 for(var i=1; i<=rows; i++) {
 	var pattern="";
 	for(var j=1; j<=i; j++) {
 		pattern+=i;
 	}
 	console.log(pattern);
 }
 console.log('-------------17-----------');