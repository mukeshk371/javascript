function sumOfTwoNumbers() {
	var a,b,c;
	a=Number(document.getElementById("firstInput").value);
	b=Number(document.getElementById("secondInput").value);
	c= a + b;
	document.getElementById("answer").innerHTML= c;
}


function checkOddEven() {
	var no=Number(document.getElementById("inputValue").value);
	if(no%2==0) {
		document.getElementById("oddEvenResult").innerHTML= "Even Number";
	}
	else
	{
		document.getElementById("oddEvenResult").innerHTML= "Odd Number";
	}
}


function findFactorial(){

	var i, no, fact;
	fact=1;
	no=Number(document.getElementById("factorialInputValue").value);
	for(i=1; i<=no; i++)  {
		fact= fact*i;
	}  
	document.getElementById("factorialResult").innerHTML= fact;
}


function verifyAge() {
	var age;
	age=Number(document.getElementById("inputAge").value);
	if (age<18) {
		document.getElementById("ageResult").innerHTML="Under 18";
	}
	else
	{
		document.getElementById("ageResult").innerHTML="Adult";
	}
}


function findPerimeter() {
	var length, breadth, perimeter;
	length=Number(document.getElementById("length").value);
	breadth=Number(document.getElementById("breadth").value);
	perimeter = 2*(length + breadth);
	document.getElementById("perimeterResult").innerHTML=perimeter;
}


function findArea() {
	var length, breadth, area;
	length=Number(document.getElementById("inputLength").value);
	breadth=Number(document.getElementById("inputBreadth").value);
	area=length*breadth;
	document.getElementById("areaResult").innerHTML=area;
}


function findDiaCirAreOfCircle() {
	var radius, diameter, cicumference, area;
	radius=Number(document.getElementById("inputRadius").value);
	diameter = 2*radius;
	circumference = 2 * 3.14 * radius;
	area = 3.14 * (radius * radius);
	document.getElementById("circleResult").innerHTML = "Diameter = " + diameter + "<br>" + "Circumference = " + circumference + "<br>" + "Area = " + area;
}


function convertCentimeter() {
	var cm, meter, km;
	cm=Number(document.getElementById("centimeter").value);
	meter = cm / 100;
	km = cm / 100000;
	document.getElementById("convertResult").innerHTML = "In Meter = " + meter + "m" +"<br>" + "In Kilometer = " + km + "km";
}


function convertTempCelsToFahr() {
	var celsius, fahrenheit;
	celsius=Number(document.getElementById("celsius").value);
	fahrenheit = (celsius * 9 / 5) + 32;
	document.getElementById("tempConvertResult").innerHTML = "Temp. in Fahrenheit = " + fahrenheit + "<sup>o</sup>" + "F";
}


function convertTempFahrToCels() {
	var celsius, fahrenheit;
	fahrenheit=Number(document.getElementById("fahrenheit").value);
	celsius = (fahrenheit - 32) * 5 / 9;
	document.getElementById("tempConverterResult").innerHTML = "Temp in Celsius = " + celsius + "<sup>o</sup>" + "C";
}


function convertDays() {
	var days, years, weeks;
	days=Number(document.getElementById("days").value);
	years = (days / 365);
	weeks = (days % 365) / 7;
	document.getElementById("daysConvertResult").innerHTML = "Years = " + years + "<br>" + "Weeks = " + weeks;
}


function findThirdAngle() {
	var a, b, c;
	a=Number(document.getElementById("firstAngle").value);
	b=Number(document.getElementById("secondAngle").value);
	c = 180 - (a + b);
	document.getElementById("angleResult").innerHTML = "Third Angle = " + c + "<sup>o</sup>";
}


function findAreaOfTriangle() {
	var base, height, area;
	base=Number(document.getElementById("base").value);
	height=Number(document.getElementById("height").value);
	area = (base * height) / 2;
	document.getElementById("findAreaResult").innerHTML = "Area of Triangle = " + area;
}


function findExamResult() {
	var eng, phy, chem, math, comp;
	var total, average, percentage;
	eng=Number(document.getElementById("eng").value);
	phy=Number(document.getElementById("phy").value);
	chem=Number(document.getElementById("chem").value);
	math=Number(document.getElementById("math").value);
	comp=Number(document.getElementById("comp").value);
	total = eng + phy + chem + math + comp;
	average = total / 5.0;
	percentage = (total / 500.0) * 100;
	document.getElementById("resultArea").innerHTML = "Total Marks = " + total + "<br>" + "Average = " + average + "<br>" + "Percentage = " + percentage + "%";
}


function findSimpleIntrest() {
	var principle, time, rate, si;
	principle=Number(document.getElementById("principle").value);
	time=Number(document.getElementById("time").value);
	rate=Number(document.getElementById("rate").value);
	si = (principle * time * rate) / 100;
	document.getElementById("siResult").innerHTML = "Simple Intrest = " + "Rs." + si;
}


function printOddNumbers() {
	var n;
	n=Number(document.getElementById("oddLimit").value);
	for(var i=1; i<=n; i++) {
		if(i%2!=0) {
			console.log(i);
		}
	}
}


function findSumOfNaturalNo() {
	var n, sum=0;
	n=Number(document.getElementById("naturalNumber").value);
	for(var i=1; i<=n; i++) {
		sum += i;
		document.getElementById("additionResult").innerHTML = "Sum of Natural Numbers = " + sum;
	}
}


function findSumOfEvenNumber() {
	var n, sum=0;
	n=Number(document.getElementById("evenNumberLimit").value);
	for(var i=2; i<=n; i+=2) {
		sum += i;
		document.getElementById("evenAdditionResult").innerHTML = "Sum of Even Numbers = " + sum;
	}
}


function findSumOfOddNumber() {
	var n, sum=0;
	n=Number(document.getElementById("oddNumberLimit").value);
	for(var i=1; i<=n; i+=2) {
		sum += i;
		document.getElementById("oddAdditionResult").innerHTML = "Sum of Odd Numbers = " + sum;
	}
}


function findMaximumNumber() {
	var num1, num2, max;
	num1=Number(document.getElementById("firstNumber").value);
	num2=Number(document.getElementById("secondNumber").value);
	if(num1 > num2) {
		max = num1;
	}
	if (num2 > num1) {
		max = num2;
	}
	document.getElementById("maximumResult").innerHTML = "Maximum Number = " + max;
}


function findGreaterNumber() {
	var input1, input2, input3, maximum;
	input1=Number(document.getElementById("firstInputNumber").value);
	input2=Number(document.getElementById("secondInputNumber").value);
	input3=Number(document.getElementById("thirdInputNumber").value);
	if(input1 > input2) {
		if(input1 > input3) {
			maximum = input1;
		}
		else {
			maximum = input3;
		}
	}
	else {
		if(input2 > input3) {
			maximum = input2;
		}
		else {
			maximum = input3;
		}
	}
	document.getElementById("greaterResult").innerHTML = "Maximum Number = " + maximum;
}


function checkPositiveNegative() {
	var num, value;
	num=Number(document.getElementById("givenInput").value);
	if(num > 0) {
		value = num + " is a Positive Value";
	}
	if(num < 0) {
		value = num + " is a Negative Value";
	}
	if(num == 0) {
		value = num + " is Zero";
	}
	document.getElementById("checkValueResult").innerHTML = value;
}


function checkDivisibility() {
	var num, div;
	num=Number(document.getElementById("inputNumber").value);
	if((num % 5 == 0) && (num % 11 == 0)) {
		div = num + " is divisible by 5 and 11";
	}
	else{
		div = num + " is not divisible by 5 and 11";
	}
	document.getElementById("checkDivisResult").innerHTML = div;
}


function checkLeapYear() {
	var inputYear, result;
	inputYear=Number(document.getElementById("inputYear").value);
	if(((inputYear % 4 == 0) && (inputYear % 100 !=0)) || (inputYear % 400==0)) {
		result = inputYear + " is a Leap Year";
	}
	else {
		result = inputYear + " is not a Leap Year";
	}
	document.getElementById("leapYearResult").innerHTML = result;
}


function checkAlphabetCharacter() {
	var inputChar, result;
	inputChar=document.getElementById("inputCharacter").value;
	if((inputChar >= 'a' && inputChar <= 'z') || (inputChar >= 'A' && inputChar <= 'Z')) {
		result = inputChar + " is an Alphabet.";
	}
	else {
		result = inputChar + " is not an Alphabet.";
	}
	document.getElementById("checkCharecterResult").innerHTML = result;
}


function checkVowelConsonant() {
	var inputChar, result;
	inputChar=document.getElementById("anyInput").value;
	if(inputChar=='a' || inputChar=='e' || inputChar=='i' || inputChar=='o' || inputChar=='u' || 
		inputChar=='A' || inputChar=='E' || inputChar=='I' || inputChar=='O' || inputChar=='U') {
		result = inputChar + " is Vowel.";
	}
	else if((inputChar >= 'a' && inputChar <= 'z') || (inputChar >= 'A' && inputChar <= 'Z')) {
		result = inputChar + " is Consonant.";
	}
	else {
		result = inputChar + " is not an Alphabet."
	}
	document.getElementById("vowelConsonantResult").innerHTML = result;
}


function checkSpecialCharacter() {
	var inputChar, result;
	inputChar=document.getElementById("anyCharacter").value;
	if((inputChar >= 'a' && inputChar <= 'z') || (inputChar >= 'A' && inputChar <= 'Z')) {
		result = inputChar + " is an Alphabet.";
	}
	else if(inputChar >= '0' && inputChar <= '9') {
		result = inputChar + " is a Digit.";
	}
	else {
		result = inputChar + " is a Special Character.";
	}
	document.getElementById("anyCharCheckResult").innerHTML = result;
}


function checkUpperLowerCase() {
	var inputChar, result;
	inputChar=document.getElementById("newCharacter").value;
	if(inputChar >= 'A' && inputChar <= 'Z') {
		result = inputChar + " is Upper Case.";
	}
	else if(inputChar >= 'a' && inputChar <= 'z') {
		result = inputChar + " is Lower Case."
	}
	else {
		result = inputChar + " is not an Alphabet."
	}
	document.getElementById("newCharacterResult").innerHTML = result;
}


function checkTriangleValid() {
	var angle1, angle2, angle3, sum, result;
	angle1=Number(document.getElementById("angle1").value);
	angle2=Number(document.getElementById("angle2").value);
	angle3=Number(document.getElementById("angle3").value);
	sum = angle1 + angle2 + angle3;
	if(sum == 180 && angle1 != 0 && angle2 != 0 && angle3 != 0) {
		result = "Triangle is valid.";
	}
	else {
		result = "Triangle is not valid";
	}
	document.getElementById("triangleCheckResult").innerHTML = result;
}


function checkTriangleBySides() {
	var side1, side2, side3, result;
	side1=Number(document.getElementById("side1").value);
	side2=Number(document.getElementById("side2").value);
	side3=Number(document.getElementById("side3").value);
	if((side1 + side2) > side3) {
		if((side2 + side3) > side1) {
			if((side1 + side3) > side2) {
				result = "Triangle is valid";
			}
			else {
				result = "Triangle is not valid";
			}
		}
		else {
			result = "Triangle is not valid";
		}
	}
	else {
		result = "Triangle is not valid";
	}
	document.getElementById("triangleSideCheckResult").innerHTML = result;
}



function checkTriangleTypeBySide() {
	var side1, side2, side3, result;
	side1=Number(document.getElementById("inputSide1").value);
	side2=Number(document.getElementById("inputSide2").value);
	side3=Number(document.getElementById("inputSide3").value);
	if(side1==side2 && side2==side3) {
		result = "It is an Equilateral Triangle.";
	}
	else if(side1==side2 || side1==side3 || side2==side3) {
		result = "It is an Isosceles Triangle.";
	}
	else {
		result = "It is a Scalene Triangle.";
	}
	document.getElementById("triangleTypeCheckResult").innerHTML = result;
}


function calculateProfitLoss() {
	var cp, sp, amt, result;
	cp=Number(document.getElementById("costPrice").value);
	sp=Number(document.getElementById("sellingPrice").value);
	if(sp > cp) {
		amt = sp - cp;
		result = "Rs." + amt + " = Profit.";
	}
	else if(cp > sp) {
		amt = cp - sp;
		result = "Rs." + amt + " = Loss!";
	}
	else {
		result = "No Profit no Loss";
	}
	document.getElementById("calculationResult").innerHTML = result;
}


function checkPerfectNumber() {
	var num, sum = 0, result;
	num=Number(document.getElementById("perfectNumber").value);
	for(i=1; i<num; i++) {
		if(num%i == 0) {
			sum += i;
		}
	}
	if(sum == num) {
		result = num + " is a Perfect Number."
	}
	else {
		result = num + " is not a Perfect Number."
	}
	document.getElementById("perfectNumberResult").innerHTML = result;
}


function printPerfectNumbers() {
	var end, sum;
	end=Number(document.getElementById("perfectNumberLimit").value);
	for(var i=1; i<=end; i++) {
		sum = 0;
	}
	for(var j=1; j<i; j++) {
		if(i % j == 0) {
			sum += j;
		}
	}
	if(sum == i) {
		console.log(sum);
	}
}


var a;
console.log('The value of a is ' + a);

console.log('The value of b is ' + b);
var b;

//console.log('The value of c is' +c);

/* let x;
console.log('The value of x is ' + x);

/* console.log('The value of y is ' + y);
let y; */

var n = null;
console.log(n * 32);

/* if (true) {
  var x = 5;
}
console.log(x);

if (true) {
  let y = 5;
}
console.log(y); */

x=40;
console.log(x);
var x;

var myvar = 'my value';
(function() {
  console.log(myvar);
  var myvar = 'local value';
})();

/* console.log(p);
let p = 3; */

foo();
function foo() {
	console.log('bar');
}

/* baz();
var baz = function() {
	console.log('bar2');
} */

/* function f() {};
const f = 5; */

var x = 1;
{
  var x = 2;
}
console.log(x);

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
console.log("Today is " + day);