let intNr = 1;
let decNr = 15.5;
let expNr=  2e3;
console.log(expNr);

//BigInt is recognize by the postfix n
let bigNr = 1475834855836383n;

//let result = intNr + bigNr
// I gotcha, when using bigInt know that you'll only be able to operate with bigInt

// Boolean
let bool1 = true;
let bool2 = false;

// A new data type called--> symbol
//symbol returns false when variables are equal in type and value

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two strings are the same", sym1 === sym2);

//Undefined--> used to variables that has not been assigned a value
let unassigned;
console.log(unassigned); //undefined

//NULL--> used to say that the variable is empty or has an unknown value. Better to use when the value is empty or unknown
let empty = null;
//TIP--> Never use undefined to declare something is empty or is unknown.
let lastName;
let betterOption = null;
console.log("Null:",lastName === betterOption);

// working out the type of variable

let str = "Hello";
let nr = 1;

console.log("str", typeof(str));
console.log("nr", typeof(nr));

//conversion data types--> there are 3 convertion methods ways to convert data types:
//String(), Number(), Boolean()

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof(nrToStr));

let StrToNr = 12;
StrToNr = Number(StrToNr);
console.log(StrToNr, typeof(StrToNr));

let strToBool = "everything here will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof(strToBool));

let nr1 = 2;
let nr2 = "2";
console.log(nr1 +  Number(nr2));

//more practice
let myNum = 1000;
console.log(myNum, "is a:", typeof(myNum));

let myName = "Joe";
console.log(myName, "is a:", typeof(myName));