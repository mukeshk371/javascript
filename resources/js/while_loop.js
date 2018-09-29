/* (1) Print natural numbers from 1 to n using while loop. */
document.write('<br>(1) :- <br>');
var i = 1;
var n = 20;
while(i<=n) {
	document.write(i+',');
	i++;
}


/* (2) Print all natural numbers in reverse from n to 1 using while loop. */
document.write('<br>(2) :- <br>');
var n = 20;
while(n>=1) {
	document.write(n+',');
	n--;
}


/* (3) Print all even numbers from 1 to n */
document.write('<br>(3) :- <br>');
var i = 1;
var n = 20;
while(i<=n) {
	if (i%2==0) {
		document.write(i+',');
	}
	i++;
}


/* (4) Print all odd numbers from 1 to n */
document.write('<br>(4) :- <br>');
var i = 1;
var n = 20;
while(i<=n) {
	if (i%2!=0) {
		document.write(i+',');
	}
	i++;
}


/* (5) Find the factorial of a given number. */
document.write('<br>(5) :- <br>');
var number = 5;
var factorial = 1;
document.write('Factorial of  '+number+' = ')
while(number>0) {
	factorial *= number;
    number--;
}
document.write(factorial);


/* (6) Find the sum of all natural numbers from 1 to n. */
document.write('<br>(6) :- <br>');
var i = 1;
var n = 3;
var sum = 0;
document.write('Sum of ')
while(i<=n) {
	document.write(i);
	sum +=i;
	i++;
}
document.write(' = '+sum);