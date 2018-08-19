/* (1) Check whether a given day is weekday or weekend. */
console.log('(1)');
var inputDay = 'monday';
switch (inputDay) {
    case 'monday':
        console.log(inputDay + ' is weekday.');
        break;

    case 'tuesday':
        console.log(inputDay + ' is weekday.');
        break;

    case 'wednesday':
        console.log(inputDay + ' is weekday.');
        break;

    case 'thursday':
        console.log(inputDay + ' is weekday.');
        break;

    case 'friday':
        console.log(inputDay + ' is weekend.');
        break;

    case 'saturday':
        console.log(inputDay + ' is weekend.');
        break;

    case 'sunday':
        console.log(inputDay + ' is weekend.');
        break;

    default:
        console.log(inputDay + ' is not a valid day.');
}

/* (2) Find addition, substraction, multiplication and division of two inputs. */
console.log('(2)');
var input01 = 20;
var input02 = 30;
var result = "/";
switch (result) {
    case "+":
        result = input01 + input02;
        console.log('Result = ' + result);
        break;

    case "-":
        result = input01 - input02;
        console.log('Result = ' + result);
        break;

    case "*":
        result = input01 * input02;
        console.log('Result = ' + result);
        break;

    case "/":
        result = input01 / input02;
        console.log('Result = ' + result);
}

/* (3) Print list of pass and fail candidates. */
console.log('(3)');
var name = "pass";
switch (name) {
    case "pass":
        console.log('Manoj, Vivek, Arvind, Pranav');
        break;

    case "fail":
        console.log('Sagar, Kailash, Pawan');
}

/* (4) Find area and perimeter of the rectangle */
console.log('(4)');
var inputLength = 30;
var inputBreadth = 40;
var find = "perimeter";
switch (find) {
    case "area":
        find = inputLength * inputBreadth;
        console.log('Area of the Rectangle = ' + find);
        break;

    case "perimeter":
        find = 2 * (inputLength + inputBreadth);
        console.log('Perimeter of the Rectangle = ' + find);
        break;

    default:
        console.log('Invalid input! Try again');
}

/* (5) Print the city details. */
console.log('(5)');
var cityName = "delhi";
switch (cityName) {
    case "delhi":
        console.log('Delhi is the National Capital of India.');
        console.log('It is the second largest city in India.');
        break;

    case "mumbai":
        console.log('Mumbai is the Finance Capital of India.');
        console.log('It is the largest city in India');
        break;

    default:
        console.log('Enter a valid name.');
}

/* (6) Print day of week */
console.log('(6)');
var week = 5;
switch (week) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter week number between 1-7.");
}

/* (7) Print number of days in a month */
console.log('(7)');
var month = "january";
switch (month) {
    case "january":
        console.log("31 days");
        break;
    case "fabruary":
        console.log("28/29 days");
        break;
    case "march":
        console.log("31 days");
        break;
    case "april":
        console.log("30 days");
        break;
    case "may":
        console.log("31 days");
        break;
    case "june":
        console.log("30 days");
        break;
    case "july":
        console.log("31 days");
        break;
    case "august":
        console.log("31 days");
        break;
    case "september":
        console.log("30 days");
        break;
    case "october":
        console.log("31 days");
        break;
    case "november":
        console.log("30 days");
        break;
    case "december":
        console.log("31 days");
        break;
    default:
        console.log("Invalid input! Please enter month name.");

}

/* (8) Check vowel or consonant. */
console.log('(8)');
var alphabet = "a";
switch (alphabet) {
    case 'a':
        console.log("Vowel");
        break;
    case 'e':
        console.log("Vowel");
        break;
    case 'i':
        console.log("Vowel");
        break;
    case 'o':
        console.log("Vowel");
        break;
    case 'u':
        console.log("Vowel");
        break;
    case 'A':
        console.log("Vowel");
        break;
    case 'E':
        console.log("Vowel");
        break;
    case 'I':
        console.log("Vowel");
        break;
    case 'O':
        console.log("Vowel");
        break;
    case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

/* (9) Find maximum between two numbers. */
console.log('(9)');
var numb01 = 20;
var numb02 = 30;
var result = numb01 > numb02;
switch (result) {
    case false:
        console.log(numb02 + ' is maximum.');
        break;
    case true:
        console.log(numb01 + ' is maximum.');
        break;
}

/* (10) Check whether number is even or odd */
console.log('(10)');
var num = 6;
switch (num % 2 == 0) {
    case true:
        console.log("Number is Even");
        break;
    case false:
        console.log("Number is Odd");
        break;
}

/* (11) Check positive negative or zero.*/
console.log('(11)');
var number = -10;
switch (number > 0) {
    case true:
        console.log(number + ' is positive.');
        break;
    case false:
        switch (number < 0) {
            case true:
                console.log(number + ' is negative.');
                break;
            case false:
                console.log(number + ' is zero.');
                break;
        }
        break;
}

/* (12) Check whether the input age is adult or teenager or child. */
console.log('(12)');
var inputAge = 2;
switch (inputAge > 19) {
    case true:
        console.log('Adult');
        break;
    case false:
        switch (inputAge >= 13) {
            case true:
                console.log('Teenager');
                break;
            case false:
                console.log('Child');
                break;
        }
        break;
}

/* (13) Check the type of a triangle through its sides. */
console.log('(13)');
var inputSide1 = 30;
var inputSide2 = 60;
var inputSide3 = 50;
switch (inputSide1 == inputSide2 && inputSide2 == inputSide3) {
    case true:
        console.log('It is an Equilateral Triangle.');
        break;
    case false:
        switch (inputSide1 == inputSide2 || inputSide1 == inputSide3 || inputSide2 == inputSide3) {
            case true:
                console.log('It is an Isosceles Triangle.');
                break;
            case false:
                console.log('It is a Scalene Triangle.');
                break;
        }
        break;
}


/* (14) Check whether the given year is leap year or not. */
console.log('(14)');
var year = 2076;
switch(((year % 4 == 0) && (year % 100 !=0)) || (year % 400==0)) {
	case true:
	console.log(year+' is a Leap Year.');
	break;
	case false:
	console.log(year+' is not a Leap Year');
	break;
}


/* (15) Check whether the input is alphabet or digit or special charecter. */
console.log('(15)');
var char = "12";
switch((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
	case true:
	console.log(char+' is an Alphabet.');
	break;
	case false:
	switch(char >= '0' && char <= '9') {
		case true:
		console.log(char+' is a Digit.');
		break;
		case false:
		console.log(char+' is a Special Charecter.');
		break;
	}
	break;
}


/* (16) Check whether the alphabet is of upper case or lower case */
console.log('(16)');
var inputChar = "A";
switch((inputChar >= 'A' && inputChar <= 'Z')) {
	case true:
	console.log(inputChar+' is Upper Case.');
	break;
	case false:
	switch((inputChar >= 'a' && inputChar <= 'z')) {
		case true:
		console.log(inputChar+' is Lower Case.');
		break;
		case false:
		console.log(inputChar+' is not an Alphabet.');
		break;
	}
	break;
}