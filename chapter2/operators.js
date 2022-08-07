// arithmetic operators can be used to perform operation with numbers

//Addition
let nr1 = 12;
let nr2 = 14;
let result = nr1 + nr2;
console.log(result);

let str1 = "Hello ";
let str2 = "Marcio";
let result2 = str1 + str2;
console.log(result2);

//addition exercise
let myName = "Marcio";
let myAge = 20;
let canIcode = true;
console.log(`Hello, my name is ${myName}, I am ${myAge} and I can code JavaScript: ${canIcode}`);

//subtraction
let numb1 = 20;
let numb2 = 4;
let strg1 = "Hi";
let numb3 = 3;
let result3 = numb1 - numb2;
let result4 = strg1 - numb3;
console.log(result3, result4);// 16 NaN

//multiplication
// we multiply by using *
let numb4 = 10;
let numb5 = 5;
let result5 = numb4 * numb5;
console.log(result5);

let numb6 = "Hi";
let numb7 = 5;
let result6 = numb6 * numb7;
console.log(result6); // NaN

// Division --> we divide with the / character
let divnumb = 10;
let divnumb2 = 5;
let divresult = divnumb / divnumb2;
console.log(divresult);

// Exponentiation
let exponumb = 2;
let exponumb2 = 3;
let exporesult = 2 ** 3;
console.log(exporesult);

// Modulus %
let moduNumb = 8;
let moduNumb2 = 2;
let moduresult = moduNumb % moduNumb2;
console.log(`${moduNumb} % ${moduNumb2} = ${moduresult}`); // 0

// increment and decrement
let increNumb = 4;
increNumb++; // postfix unary operator
console.log(increNumb);

let decreNumb = 3;
decreNumb--;// prefix unary operator
console.log(decreNumb);

// assignment operators --> x += 5 means x = x + 5

let x = 2;
x += 2;
console.log(x); 