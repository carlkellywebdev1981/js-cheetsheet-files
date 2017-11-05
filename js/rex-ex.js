let arr = /z/;
console.log(arr.test(['abcderfz'])); //searches for a 'z'

let num = /[0-9]/;
console.log(num.test(12345456)); //any digit from 0 - 9

let neighbor = /neighbou?r/;
console.log(neighbor.test('neighbovr'));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;// {5,} = five or more times
console.log(dateTime.test('30-1-2003 8:45'));

let cartoonCrying = /boo+(hoo+)+/i; //i makes it case insensitive
console.log(cartoonCrying.test('Boohoooohoohoooo'));

let match = /\d+/.exec('one two 100');// match returns null if no match + returns an object of info about match otherwise
console.log(match); // an array of details
console.log(match.index); // 8

let pattern = /y/g;
pattern.lastIndex = 3; // starts the match from index 3
let matched = pattern.exec('xyzzy');
console.log(matched.index); // 4
console.log(pattern.lastIndex); // prints the index after the match is found

let fruit = 'Banana';
console.log(fruit.match(/an/g)); // global match returns an array of matches

let input = 'A string with 3 numbers in it... 42 and 88';
let number = /\b(\d+)\b/g;
let matching;
while (matching = number.exec(input)) // loops the string as many times as there are numbers
console.log('Found', matching[1], 'at', matching.index); // outputs the number + numbers index
