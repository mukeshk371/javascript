/* Create an Array */
console.log('-----------------Array (1)----------------------');
var names = ['Neeraj', 'Rajesh'];
console.log('Length of Array = ' + names.length);

/* Access (index into) an Array item */
console.log('-----------------Array (2)----------------------');
var first = names[0];
var last = names[names.length - 1];
console.log('Index-0 = ' + names[0]);
console.log('Index-1 = ' + names[1]);

/* Loop over an Array */
console.log('-----------------Array (3)----------------------');
names.forEach(function(item, index, array) {
    console.log('Print Item :- ' + item);
    console.log('Print Index :- ' + index);
    console.log('Print Item & Index :- ' + item, index);
});

/* Add new item at end in an Array */
console.log('-----------------Array (4)----------------------');
console.log(names);
var newLength = names.push('Mukesh');
console.log(names);

/* Remove from the end of an Array */
console.log('-----------------Array (5)----------------------');
console.log(names);
var last = names.pop();
console.log(names);

/* Remove from the front of an Array */
console.log('-----------------Array (6)----------------------');
console.log(names);
var first = names.shift();
console.log(names);

/* Add to the front of an Array */
console.log('-----------------Array (7)----------------------');
console.log(names);
var newLength = names.unshift('Alok');
console.log(names);

/* Find the index of an item in the Array */
console.log('-----------------Array (8)----------------------');
names.push('Manoj');
console.log(names);
var pos = names.indexOf('Manoj');
console.log('Index of Manoj :- ' + pos);
console.log('Index of Rajesh :- ' + names.indexOf('Rajesh'));
console.log('Index of Alok :- ' + names.indexOf('Alok'));

/* Remove an item by index position */
console.log('-----------------Array (9)----------------------');
console.log(names);
var removedItem = names.splice(pos, 1);
console.log(removedItem);
console.log(names);

/* Remove items from an index position */
console.log('-----------------Array (9)----------------------');
var cities = ['Delhi', 'Mumbai', 'Kolkata', 'Banglore', 'Hyderabad'];
console.log(cities);
var pos = 1;
var n = 3;
var removedItem = cities.splice(pos, n);
console.log(cities);
console.log(removedItem);

/* Copy an Array */
console.log('-----------------Array (10)----------------------');
var copyNames = names.splice();
console.log(names);
var copyCities = cities.slice();
console.log(cities);

/* Implementing all codes */
console.log('-----------------Array (11)----------------------');
var states = ['Bihar', 'Odisha', 'Maharastra', 'Rajasthan', 'Telangana', 'Jharkhand'];
console.log(states);

var newState = states.push('Karnataka');
console.log(states);

console.log('Index of Bihar :- ' + states.indexOf('Bihar'));
console.log('Length of Array :- ' + states.length);

var first = states[0];
var last = states[states.length - 1];
var last = states.pop();
console.log(states);
var first = states.shift();
console.log(states);

console.log('-----------------Array (12)----------------------');
var list = ['one', 'two', 'three', 'four', 'five'];
console.log('Original List :-');
console.log(list);
for (var i = 0; i < list.length; i++) {
    if (list[i] === 'one') {
        list.splice(i, 1);
    }
}
console.log('New List :-');
console.log(list);

/* Remove last element of an array */
console.log('-----------------Array (13)----------------------');
var colors = ['Red', 'Yellow', 'Blue', 'Green', 'Pink', 'White'];
removeLastElementOfArray(colors);

function removeLastElementOfArray(inputArray) {
    for (var i = 0; i < colors.length; i++) {}
    colors.length = colors.length - 1;
    console.log(colors);
}

/* Find even numbers from the array */
console.log('-----------------Array (14)----------------------');
console.log('Even Numbers are :-');
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findEvenNumbersFromArray(inputArray);

function findEvenNumbersFromArray(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        if ((inputArray[i]) % 2 == 0) {
            console.log(inputArray[i]);
        }
    }
}

/* Find odd numbers from the array. */
console.log('-----------------Array (15)----------------------');
console.log('Odd Numbers are :-');
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findOddNumbersFromArray(newArray);

function findOddNumbersFromArray(inputArray) {
    for (var i = 0; i < newArray.length; i++) {
        if ((newArray[i]) % 2 != 0) {
            console.log(newArray[i]);
        }
    }
}

console.log('-----------------Array (16)----------------------');
var inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inputNumbers);
for (var i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] % 2 == 0) {
        inputNumbers.splice(i, 1);
    }
}
console.log(inputNumbers);

console.log('-----------------Array (17)----------------------');
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);
for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
        number.splice(i, 1);
    }
}
console.log(number);

console.log('-----------------Array (18)----------------------');
var newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeFirstElementOfArray(newNumber);

function removeFirstElementOfArray(inputArray) {
    for (var i = 0; i < newNumber.length; i++) {
        newNumber[i] = newNumber[i + 1];
    }
    newNumber.length = newNumber.length - 1;
    console.log(newNumber);
}

console.log('-----------------Array (19)----------------------');
var a = 6;
var b = 10;
swapTwoGivenValues(a, b);

function swapTwoGivenValues(a, b) {
    var temp = a;
    a = b;
    b = temp;
    console.log('a :-');
    console.log(a);
    console.log('b :-');
    console.log(b);
}

console.log('-----------------Array (20)----------------------');
var newNumber2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newNumber2);
reverseArrayElements(newNumber2);

function reverseArrayElements(inputArray) {
    for (var i = 0; i < newNumber2.length / 2; i++) {
        var temp = newNumber2[i];
        newNumber2[i] = newNumber2[newNumber2.length - (i + 1)];
        newNumber2[newNumber2.length - (i + 1)] = temp;
    }
    console.log(newNumber2);
}

console.log('-----------------Array (21)----------------------');
var newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newNumber);
removeTwoElementsFromArray(newNumber);

function removeTwoElementsFromArray(inputArray) {
    for (var i = 1; i < newNumber.length; i++) {
        newNumber[i] = newNumber[i + 1];
    }
    for (var i = 3; i < newNumber.length; i++) {
        newNumber[i] = newNumber[i + 1];
    }
    newNumber.length = newNumber.length - 2;
    console.log(newNumber);
}

console.log('-----------------Array (22)----------------------');
var newNumber3 = [1, 2, 3, 4, 5, 6, 7];
var startIndex = 2;
swapArrayElementsFrom(newNumber3, startIndex);

function swapArrayElementsFrom(inputArray, startIndex) {
    var endIndex = newNumber3.length - 1;
    var lengthToReverse = 1 + endIndex - startIndex;
    var distanceFromEnd = 0;
    console.log(newNumber3);
    for (var i = startIndex; i < startIndex + ((lengthToReverse) / 2); i++) {
        var temp = newNumber3[i];
        var indexToSwap = endIndex - distanceFromEnd;
        newNumber3[i] = newNumber3[indexToSwap];
        newNumber3[indexToSwap] = temp;
        distanceFromEnd++;
    }
    console.log(newNumber3);

}

console.log('-----------------Array (23)----------------------');
var myArray = [90, 40, 10, 9, 70, 80];
findMaximumValueOfArray(myArray);

function findMaximumValueOfArray(inputArray) {
    var maxValue = myArray[0];
    for (var i = 0; i < myArray.length; i++) {
        if (maxValue < myArray[i]) {
            maxValue = myArray[i];
        }
    }
    console.log(maxValue);
}

console.log('-----------------Array (24)----------------------');
var inputNumber = [100, 22, 333, 4, 5, 6, 7, 8, 9, 10];
var startIndexValue = 3;
var maxIndex = findMaximumOfArrayFrom(inputNumber, startIndexValue);
console.log(maxIndex);

function findMaximumOfArrayFrom(inputArray, startIndex) {
    var maximumValue = inputArray[startIndex];
    var maxIndex = startIndex;
    for (var i = startIndex; i < inputArray.length; i++) {
        if (maximumValue < inputArray[i]) {
            maximumValue = inputArray[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log('-----------------Array (25)----------------------');
var givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var firstIndex = 2;
var secondIndex = 5;
//swapFunction(givenArray, firstIndex, secondIndex);

var swapFunction = function swapTwoElementsFromArray(inputArray, firstIndex, secondIndex) {
    var temp = firstIndex;
    firstIndex = secondIndex;
    secondIndex = temp;
}
console.log(givenArray);

console.log('-----------------------Array (26)----------------------');

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.displayName = function() {
        console.log("Name is " + this.name);
    };
}
var person1 = {};
person1.name = {
    name: "",
    displayName: function() {
        console.log("Name is " + name)
    }
};
person1.name.firstName = "xyz";
person1.name.lastName = "abc";
person1.age = 20;
person1.sex = "F";
console.log(person1.name['firstName']); //name.firstName);
var person2 = new Person("Mukesh", "22", "M");
person2.displayName();
var person3 = new Person("Rajesh", 27, "M");
person3.displayName();

console.log('-----------------------Array (27)----------------------');
var state = {};
state.name = "Bihar";
state.capital = "Patna";
state.location = "Eastern India";
state.cm = "Nitish Kumar";
console.log(state);

console.log('-----------------------Array (28)----------------------');
var bihar = {
    name: "Bihar",
    capital: "Patna",
    location: "Eastern India",
    cm: "Nitish Kumar"
};
console.log(state);
console.log(state.name + " is a state which is located in " + state.location);
console.log(state.capital + ' is the capital of ' + state.name);
console.log(state.cm + ' is the Chief Minister of ' + state.name);

console.log('-----------------------Array (29)----------------------');
function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function() {
        console.log(this);
        console.log(this.type + " written by " + this.author);
    }
}
var book1 = new Book("Bharat Ek Khoj", "Pd. Jawahar Lal Nehru.");
book1.getDetails();
var book2 = new Book("Godan", "Munshi Premchand");
book2.getDetails();
var book3 = new Book("Maila Anchal", "Phanishwar Nath Renu");
book3.getDetails();

console.log('-----------------------Array (30)----------------------');
function State(name, capital, location, cm) {
    this.name = name;
    this.capital = capital;
    this.location = location;
    this.cm = cm;
    this.displayStateDetails = function() {
        console.log(this);
        console.log(this.name + " is a state which is located in " + this.location);
        console.log(this.capital + ' is the capital of ' + this.name);
        console.log(this.cm + ' is the Chief Minister of ' + this.name);
    }
}
var state1 = new State("Bihar", "Patna", "Eastern part of India", "Nitish Kumar");
state1.displayStateDetails();
var state2 = new State("Maharastra", "Mumbai", "Western part of India", "Devendra Fadnavis");
state2.displayStateDetails();

console.log('-----------------------Array (31)----------------------');
var man = function(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
};
var mukesh = new man('Mukesh', 23, 'Bihar');
var sanjay = new man('Sanjay', 25, 'Maharastra');
var rajeev = new man('Rajeev', 29, 'Telangana');

function ageDifference(man1, man2) {
    var difference = man1.age - man2.age;
    console.log(man1.name, man1.age);
    console.log(man2.name, man2.age);
    console.log('Age difference between ' + man1.name + ' and ' + man2.name + ' = ' + difference);
}
ageDifference(mukesh, sanjay);

console.log('-----------------------Array (32)----------------------');
var city = function(name, state, language) {
    this.name = name;
    this.state = state;
    this.language = language;
    this.getCityDetails = function() {

        return this.name + " is located in the Indian state of " + this.state + ". " + this.language + " are the main language.";
    }
};
var delhi = new city("New Delhi", "Delhi", "Hindi & English");
console.log(delhi.getCityDetails());
var mumbai = new city("Mumbai", "Maharastra", "Hindi, Marathi & English");
console.log(mumbai.getCityDetails());
var kolkata = new city("Kolkata", "West Bengal", "Bengali, Hindi & English");
console.log(kolkata.getCityDetails());

console.log('-----------------------Array (33)----------------------');
var circle = {
    radius: 10,
    area: function() {
        return "Area of The Circle = " + (3.141 * this.radius * this.radius);
    }
};
console.log("Radius = "+circle.radius);
console.log(circle.area());
