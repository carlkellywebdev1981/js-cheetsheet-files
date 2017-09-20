// LOOPING FOR A SET AMOUNT OF TIMES
console.log('******************************');
for ( var i = 0; i < 10; i++ ){
    console.log(i);
}

// COUNTDOWN LOOP
console.log('******************************');
for ( var i = 10; i > 0; i-- ){
    console.log(i);
}

// LOOPING OVER ARRAYS
console.log('******************************');
var namesArray = ['Amul', 'Amanda', 'Harriet', 'Anisa', 'Mauro', 'Matty', 'Jonnie'];
for( var i = 0; i < namesArray.length; i++ ){
    console.log( namesArray[i] + ' has index ' + i + ' in the namesArray' );
}

// LOOPING OVER OBJECTS
console.log('******************************');
var namesObject = {
    one: 'Amul',
    two: 'Amanda',
    three: 'Harriet',
    four: 'Anisa',
    five: 'Mauro',
    six: 'Matty',
    seven: 'Jonnie'
};

for( var key in namesObject ){
    console.log( namesObject[key] + ' has key ' + key + ' in the namesObject' );
}

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



console.log("print all even numbers between 10 and 40");

for(var i = 10; i < 41; i+=1) {
    if(i % 2 === 0) {
    console.log(i);

    }
}



console.log("print all odd numbers between 300 and 333");

for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50");

for(var i = 5; i <= 50; i++ ){
    if(i % 5 === 0 && i % 3 === 0) {
      console.log(i);  
    }
    
}