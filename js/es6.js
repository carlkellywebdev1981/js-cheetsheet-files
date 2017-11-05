let firstName = 'Carl';
let lastName = 'Kelly';
const yearOfBirth = 1981;

const calcAge = (year) => {
  return 2016 - year;
}


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('C'));//true
console.log(n.endsWith('y')); //true
console.log(n.includes(' '));//true
console.log(`${firstName} `.repeat(5));//repeats 5 times

//concat strings
//console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth)) + ' years old. ';
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const years = [1990, 2011, 2004, 1965];

let years6 = years.map(el => 2017 - el);
console.log(years6);

//two arguements need to be wrapped in parenthises
years6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(years6);

//more than one line we need curly braces and implicit return
years6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(years6);
