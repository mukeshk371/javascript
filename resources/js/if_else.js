console.log('(1)');
var age = 19;
if (age > 19) {
    console.log('Adult');
} else if (age >= 13) {
    console.log('Teenager');
} else {
    console.log('Child');
}


console.log('(2)');
var day = "tuesday";
if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday") {
    console.log(day + ' is weekday.');
} else if (day === "friday" || day === "saturday" || day === "sunday") {
    console.log(day + ' is weekend.');
} else {
    console.log(day + ' is invalid Day');
}


console.log('(3)');
var inputValue = 10;
if (inputValue % 2 == 0) {
    console.log(inputValue + ' is an even number.');
} else {
    console.log(inputValue + ' is an odd number.');
}


/* Check the type of a triangle through its sides. */
console.log('(4)');
var side01 = 40;
var side02 = 40;
var side03 = 40;
if (side01 == side02 && side02 == side03) {
    console.log('It is an Equilateral Triangle.');
} else if (side01 == side02 || side01 == side03 || side02 == side03) {
    console.log('It is an Isosceles Triangle.');
} else {
    console.log('It is a Scalene Triangle.');
}


/* Check maximum number among three given numbers */
console.log('(5)');
var number1 = 20;
var number2 = 20;
var number3 = 30;
if (number1 > number2) {
    if (number1 > number3) {
        console.log(number1 + ' is the maximum number.');
    } else {
        console.log(number3 + ' is the maximum number.');
    }
} else if (number2 > number3) {
    console.log(number2 + ' is the maximum number.');
} else {
    console.log(number3 + ' is the maximum number.');
}


/* Check whether the age is switable for work or not. */
console.log('(6)');
var givenAge = 18;
if (givenAge < 18) {
    console.log("You are Minor.");
    console.log("Not Eligible to Work");
} else if (givenAge >= 18 && givenAge <= 60) {
    console.log("You are Eligible to Work.");
    console.log("Please fill in your details and apply.");
} else {
    console.log("You are too old to work as per the Government rules");
    console.log("Please Collect your pension!");
}


/* Compare two numbers; greater or smaller */
console.log('(7)');
var givenValue1 = 10;
var givenValue2 = 10;
if (givenValue1>givenValue2) {
	console.log(givenValue1+' is greater than '+givenValue2);
} else if (givenValue2>givenValue1) {
	console.log(givenValue2+' is greater than '+givenValue1);
} else {
	console.log(givenValue1+' = '+givenValue2);
}


/* Calculate Electricity Bill :-
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill */
console.log('(8)');
var unit = 150;
var amt;
var totalAmt;
var surCharge;
if (unit <= 50) {
    amt = unit * 0.50;
} else if (unit <= 150) {
    amt = 25 + ((unit - 50) * 0.75);
} else if (unit <= 250) {
    amt = 100 + ((unit - 150) * 1.20);
} else {
    amt = 220 + ((unit - 250) * 1.50);
}
surCharge = amt * 0.20;
totalAmt = amt + surCharge;
console.log('Electricity Bill = Rs.' + totalAmt);


/* Calculate Gross Salary according to following :-
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95% */
console.log('(9)');
var basic = 22000;
var da;
var hra;
if (basic <= 10000) {
    da = basic * 0.8;
    hra = basic * 0.2;
} else if (basic <= 20000) {
    da = basic * 0.9;
    hra = basic * 0.25;
} else {
    da = basic * 0.95;
    hra = basic * 0.3;
}
var gross = basic + hra + da;
console.log('The Gross Salary of employee = Rs.' + gross);


/* Enter marks of five subjects and find percentage and grade */
console.log('(10)');
var phy = 95;
var chem = 97;
var bio = 98;
var math = 90;
var comp = 95;
var per = (phy + chem + bio + math + comp) / 5;
console.log('Percentage = ' + per + '%');
if (per >= 90) {
    console.log("Grade A");
} else if (per >= 80) {
    console.log("Grade B");
} else if (per >= 70) {
    console.log("Grade C");
} else if (per >= 60) {
    console.log("Grade D");
} else if (per >= 40) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}