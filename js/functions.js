//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var outcome  = num - 5;
  return outcome;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if(x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if(num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if(num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var answer = x + y;
  return answer;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var minus = x - y;
  return minus;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var div = x / y;
  return div;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var multi = x * y;
  return multi;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var mod = x % y;
  return mod;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 == 0) {
        return true;
      }
        return false;
}



function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (num % 2 == 1) {
        return true;
      }
        return false;
}

function square(num) {
  //square num and return the new value
  //code here
  var squ = num * num;
  return squ;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cubed = num * num * num;
  return cubed;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  if (exponent === 0) {
    return 1;
  }
  return num * raiseToPower(num, exponent - 1);
}



function roundNumber(num) {
  //round num and return it
  //code here
  var rounded = num;
  return Math.round(rounded);
}

function roundUp(num) {
  //round num up and return it
  //code here
  var roundedUp = num;
  return Math.ceil(roundedUp);
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var newStr = str + '!';
  return newStr;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangled = base / 2 * height;
  return triangled;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circled = radius * radius * Math.PI;
  return Math.round(circled);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var prismed = length * width * height;
  return prismed;
}

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if(x > y ) {
    return x;
  } else if (y > x) {
    return y;
  } else if(x === y){
    return x;
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'

  if (language === 'German') {
    return 'Guten Tag!';
  } else if(language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
      }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num === 5 || num === 10) {
    return true;
  } else {
    return false;
  }

}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num > 20 && num < 50) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  //return num % 1 === 0;
  if (Math.floor(num) || num === 0) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }

  }


function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers

  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  //outside of loop
  return num > 1;
}



function returnFirst(arr) {
  //return the first item from the array
return arr[0];

}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length -1];

}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;

}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  //return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
return arr;
}






function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;

}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');

}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  if(arr.indexOf(item) === 0) {
    return true;
  } else {
    return false;
  }

}


function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
return total;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var total = 0;
  for(var i = 0; i < testScores.length; i++) {
    total = total + testScores[i];
  }
var result  = total / testScores.length;
return result;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var newNums = numbers.sort(function(x,y) {
    if(x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  return newNums[newNums.length -1];

}

//////////////////////// calculate age function /////////////////

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  console.log(age);
}

calculateAge(1964);

//////////////// function wrapping an if statement /////////////////

function personAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;

if(age >= 16) {
  console.log("you can drive");
} else {
  console.log("you are not old enough to drive");
}
}
personAge(2011);

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

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
