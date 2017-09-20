/*jshint esversion: 6 */

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


/*****************.REDUCE (callback function) **********************/

//reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce //it to a single value.

var numbers = [2,4,5,7,8,9];
var sum = numbers.reduce(function(runningTotal, num) {
  return runningTotal += num;


});

console.log(sum); // sum is 35

//

var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
// sum is 6


function largestOfFour(arr) {
  var newArr = arr.map(function(x){
    return x.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });

  });
   return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// returns [5,27,39,1001]



/*****************FOREACH (callback function)**********************/

//forEach() method executes a provided function once for each array element

var numbers = [2,4,5,7,8,9];

numbers.forEach(function(num) {

 console.log(num);

});


/*****************.MAP (callback function)*********************/

//The map() method creates a new array with the results of calling a provided function on every element in this array.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


var numbers = [2,4,5,7,8,9];

var squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares);

// outputs [4, 16, 25, 49, 64, 81]

/*****************.SORT (callback function)*********************/
//The sort() method sorts the elements of an array in place and returns the array.

var min = function(list){
   list.sort((a,b) => a > b ? 1 : -1);
    return list[0];
};

var max = function(list){
   list.sort((a,b) => a > b ? -1 : 1);
    return list[0];
};

min([-52, 56, 30, 29, -54, 0, -110]);
max([-52, 56, 30, 29, -54, 0, -110]);


/*****************FOR LOOPS**********************/

// print all odd numbers between 300 and 333

for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// fizz buzz question
// print 1 to 100 any num / by 3 print fizz, / 5 buzz and both fizzbuzz

for (var i = 1; i <= 100; i++) {
  var words = "";

 if (i % 3 === 0 && i % 5 === 0)  {
	words += "FizzBuzz";
 } else if (i % 3 === 0) {
   words += "Fizz";
 } else if(i % 5 === 0) {
   words += "Buzz";
 } else {
   words += i;
 }
 console.log(words);
}
/*****************WHILE LOOPS**********************/

// PRINT EVEN NUMBERS BETWEEN 10 AND 40

var count  = 10;
while(count <= 40){
console.log(count);
count+=2;
}

// PRINT ALL ODD NUMBERS BETWEEN 300 333

var count  = 300;
while(count <=333){
    if(count % 2 === 0){
      console.log(count);
    }
    count += 1;
}

/*****************FUNCTIONS**********************/

// Replace - with _ within a string

function kebabToSnake(str) {
    //replace all '-' with '_'
    var newStr = str.replace(/-/g , "_");
    //return str
    return newStr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
   return words.join(' ');
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
    var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
    var greeting = 'Hello ' + name + '!';
  return greeting;
}

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
    var area = length * width;
  return area;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
    var prismed = length * width * height;
  return prismed;
}
/*****************REVERSE A STRING **********************/
// This splits the string, reverses it and joins it again

function FirstReverse(str) {

  // code goes here
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  console.log(joinArray);
}
// keep this function call here
FirstReverse("hello");

/*****************FUNCTIONS + IF ELSE**********************/

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
    } else if(num % 3 === 0) {
      return 'fizz';
    }else if(num % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  }

function colorOf(r,g,b){
  var red = r.toString(16);
  if (red.length === 1) red = "0" + red;
  var green = g.toString(16);
  if (green.length === 1) green = "0" + green;
  var blue = b.toString(16);
  if (blue.length === 1) blue = "0" + blue;
  return "#" + red + green + blue;
}

colorOf(255,0,0); // outputs '#ff0000'
// turns numbers to a hex code string


function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers


  if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

function personAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;

if(age >= 16) {
  console.log("you can drive");
} else {
  console.log("you are not old enough to drive");
}
}
personAge(2011);



//find the middle of a random odd or even string

function mid(str) {
  var middle = Math.floor(str.length / 2);
  if(str.length % 2 === 0){

  return str[middle - 1] + str[middle];
} else {
  return str[middle];
}

}

console.log(mid('computer'));


//access array items

function uefaEuro2016(teams, scores){
  // your code...
  if(scores[0] === scores[1]) {
  return 'At match ' + teams[0] + ' - ' + teams[1] + ', teams played draw.';
  } else if(scores[0] > scores[1]) {
  return 'At match ' + teams[0] + ' - ' + teams[1] + ', '  + teams[0] + ' won!';
} else if(scores[1] > scores[0]) {
return 'At match ' + teams[0] + ' - ' + teams[1] + ', '  + teams[1] + ' won!';
}

}

uefaEuro2016(['Germany', 'Ukraine'], [2, 0]);

/*****************FUNCTIONS + FOR LOOP**********************/

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var average = 0;
  for (var i = 0; i < testScores.length; i++) {
  average = average + testScores[i];
  }
  average = average / testScores.length;
  return average;
}

// LOOP OVER ARRAY, PUSH ELEMENT INTO EMPTY ARRAY

function pickIt(arr){
  var odd=[],even=[];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1) {
    odd.push(arr[i]);
    } else {
    even.push(arr[i]);
    }
  }
  return [odd,even];
}

pickIt(6,9);

// LOOP IN A LOOP :O
console.log('******************************');
var twoDimensionArray = [
    ['Amul', 'Amanda', 'Harriet'],
    ['Anisa', 'Mauro', 'Matty'],
    ['Jonnie', 'Emily', 'Nick']
];
for( var i = 0; i < twoDimensionArray.length; i++ ){
    var namesArr = twoDimensionArray[i];
    for( var x = 0; x < namesArr.length; x++ ){
        console.log( twoDimensionArray[i][x] + ' is in array ' + i +
            ' in the twoDimensional array and has index ' + x + ' in its own array');
    }
}


//function with a for loop, if statement, break and continue

function grabDoll(dolls){
  var bag=[];

  for(var i = 0; i < dolls.length; i++) {

    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else
      continue;

    if(bag.length === 3) break;
  }

  return bag;
}

/*****************FUNCTIONS + IF ELSE + FOR **********************/

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var largestNum = 0;
  for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestNum) {
  largestNum = numbers[i];
  }
  }
  return largestNum;
}

/*****************FUNCTIONS + OBJECTS**********************/

function makeCat(name, age) {
  //create a new object with a name property with the value set to the name argument
  //add an age property to the object with the value set to the age argument
  //add a method called meow that returns the string 'Meow!'
  //return the object
    var newCat = {
      name: name,
      age: age,
      meow:function () {
        return 'Meow!';
      }
    };
    return newCat;
}

function newUser(name, email, password) {
  //create a new object with properties matching the arguments passed in.
  //return the new object
  var newObj = {
    name: name,
    email: email,
    password: password
  };
  return newObj;
}

var languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};
function greet(language) {
    for(var key in languages){
        if(key === language){
            return languages[key];
        }
    }
    return "Welcome";
}

/*****************FUNCTIONS INSIDE FUNCTIONS**********************/

function addCalculateDiscountPriceMethod(storeItem) {
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  //example:
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)
  storeItem.calculateDiscountPrice = function () {
    var discount = storeItem.price * storeItem.discountPercentage;
    storeItem.discountPrice = storeItem.price - discount;
    return storeItem.discountPrice;
    };
  return storeItem;
  }


/*****************FUNCTIONS PIZZA ORDER**********************/

// pizza order function

var orderCount=0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
	orderCount=orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount*8.97;
}

function getTax() {
  return getSubTotal(orderCount) * 0.20;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin crust');
takeOrder('pepperoni', 'hand-tossed');
takeOrder('sausage', 'deep dish');
takeOrder('chicken', 'thin crust');
takeOrder('meatballs', 'hand-tossed');
takeOrder('anchovies', 'thin crust');

console.log('Sub-Total: £' + getSubTotal(orderCount).toFixed(2));
console.log('Tax: £' + getTax().toFixed(2));
console.log('Total: £' + getTotal().toFixed(2));



/* -----------------CALCULATE BILL -------------------------
The function takes a bill, a VAT percent and a tip percent
and returns the total bill, formatted as a currency string.
---------------------------------------------------------- */


function calculateBill (bill, VATrate, TipRate) {
  var tip = (TipRate / 100) * bill;
  var vat = (VATrate / 100) * bill;

  return '£' + (bill + tip + vat).toFixed(2);
}

var result = calculateBill(88, 18, 15);

console.log('The total bill in this example is: ' + result);
