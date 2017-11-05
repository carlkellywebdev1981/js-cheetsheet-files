/*var friends = ["paul", "mike", "leo"];
cosole.log(friends[0])//paul
//change an item in the array
friends[0] = "pablo";
//add an item to the end of an array
friends[3] = "chris";

//built in array commands
//push/pop, shift/unshift, indexOf, slice

//push add an arguement
var friends = ["paul", "mike", "leo"];
friends.push ("daz");
//will put daz into the array at the end, no arguement needed
friends.pop ()
//removes the last item from the array

//unshift
var friends = ["paul", "mike", "leo"];
friends.unshift ("daz");
//adds daz to the beginning of the array

//shift
var friends = ["paul", "mike", "leo"];
friends.shift ();
//removes index 0 from array

//indexOf
//this will find in an item is in the array
var colors = ["red", "green", "blue", "white"];
colors.indexOf ("blue"); // 2
colors.indexOf ("red"); // 0

var john = ['john', 'smith', '1990', 'designer', false];
if(john.indexOf('teacher') === -1) {
  console.log('john is NOT a teacher');
}
// if the element 'teacher' is not in the array it returns -1;
//

//slice
//this removes items in the array
var fruits ["banana", "apple", "orange", "lemon",];
//store ony citrus fruits in a new array
var citrus = fruits.slice(2,4); // orange and lemon

//nestled arrays/ borrowing into arrays
var nums = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [10,11,12,13,14,15],
];

nums [2] // 11,12,13,14,15
nums [1][2] // 7
nums [2][0] // 11

//for loops over an array
var colors = ["red", "green", "blue", "white"];
for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//this prints each array item to the console/ works to show comments on a post every time one is added etc

//forEach
//js built in way to iterating over an array
var colors = ["red", "green", "blue", "white"];
colors.forEach(function (placeHolder) {
    console.log(placeHolder);
});
//this prints each array item to the console
*/
//array problem set solutions

/*function printReverse(arr) {
    for(var i = arr.length -1; i >=0; i--) {
     console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);*/

//isUniform()
/*function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}*/

/*//sumArray()

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}
*/
// max()
/*function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
*/

//movies database
var movies = [
{title: "in bruges", hasWatched: true, rating: 5},
{title: "frozen", haatched: true, rating:5}
]

movies.forEach(function(movie){
var result = "you have ";
if(movie.hasWatched){
result += "watched";
}
else {
result += "not seen ";
}
result += "\"" + movie.title + "\" - ";
result += movie.rating + " stars";
console.log(result)
});
