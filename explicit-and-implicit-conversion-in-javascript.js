// Original issue: "5" is a string. JavaScript automatically converts it to a number when using the '-' operator,
// but it's clearer and safer to convert it explicitly.
let result = Number("5") - 2; 
console.log("The result is: " + result); // Output: 3

// Original issue: Boolean("false") returns true because any non-empty string is truthy in JavaScript.
// Instead of converting to Boolean, we directly check the string value.
let isValid = ("false" === "true"); 
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("Not valid."); // Output: Not valid.
}

// Original issue: "25" is a string, so adding 5 to it results in string concatenation: "255".
// We use Number() to convert it to a proper number before addition.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); // Output: Total Age: 30



//  Implicit Type Conversion - automatic
let number = 10;
let stringMessage = "The number is " + number; 
console.log(stringMessage); // Output: The number is 10

//  Explicit Type Conversion 
let userInput = "123";
let numericValue = Number(userInput); 
console.log(numericValue); // Output: 123
console.log(typeof numericValue); // Output: number

// Edge Case: NaN
let wrongInput = "hello";
let failedConversion = Number(wrongInput);
console.log(failedConversion); // Output: NaN
console.log(isNaN(failedConversion)); // Output: true

// Edge Case: null
let nullValue = null;
let convertedNull = Number(nullValue); 
console.log(convertedNull); // Output: 0
console.log(typeof convertedNull); // Output: number