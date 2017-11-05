function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  if (exponent === 0) {
  return 1;
}
return num * raiseToPower(num, exponent - 1);
}

console.log(raiseToPower(2,10));

// my way

const power = (num, counter) => {
  for (let i = 1; i < counter; i++) {
    num *= 2 // num = num * 2

  }
  console.log(num);
}
power(2,8);

//eloquent js way

var power = function(base, exponent) {
  var result = 1;
    for (var count = 0; count < exponent; count++)
    result *= base;
    return result;
};

console.log(power(2, 10));

function sumOfNumbers(num) {
    while(num >= 1) {
      return num + sumOfNumbers(num - 1);
    }
    return num;
}
console.log(sumOfNumbers(5));

function sumOfNumbers(num) {
    if (num === 1) {
        return num;
    } else {
        return num + sumOfNumbers(num - 1);
    }
}

console.log(sumOfNumbers(5));
