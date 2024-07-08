// Single line comment
console.log('hello world');

// Variables
let age = 25
console.log(age)

const salary = 20000
//salary = 5000

// Data types
// Strings
const name = 'Bhuv'
const language = 'Javascript'

// Nubmer, float
const total = 0
const PIE = 3.14

// Booleans
const isPrimeNumber = true
const isNewUser = false

// Undefined
let result
console.log(result)

const res = undefined

// Null
const data = null

// BigInt type
const person = {
    firstname : 'Bhuv',
    lastname : 'sharma',
}
console.log(person.firstname);

// Array type
const evenNumber = [2,4,6,8,10];
console.log(evenNumber[2]);
console.log(Boolean(' '));

/* Multi line comment
 * Operators
 * Assigment operators 
 * Arithmetic operators
 * Logical operators
 * String operators
 * Other operators
 */
let x = 5
let y = 10
console.log(x + y)
console.log(x - y)
console.log(x * y)

console.log(x === y) // false
console.log(x !== y) // true
console.log(x > y) // false
console.log(x < y) // true
console.log(x >= y) // false
console.log(x <= y) // true

const isValidAnd = x > 20 && 8 > y
console.log(isValidAnd) // false

const isValidOr = x > 20 || 15 > y
console.log(isValidOr) // true
//ternary operator

const isEven = 10 % 2 === 0 ? true : false
const isEvenString = 10 % 2 === 0 ? 'Is even' : 'Is odd'
console.log(isEvenString) // true

const var1 = 10
const var2 = '10'
console.log(var1 == var2) // true
console.log(var1 === var2) // false

// function

function add(a, b) {
	return a + b
}

const sum = add(25, 10)
console.log(sum)

// arrow functions
const arrowSum = (a, b) => {
	return a + b
}
const sumArr = arrowSum(20, 10)
console.log(sumArr)

// another example of arrow function
const arrowSumShort = (a, b) => a + b
const sumShort = arrowSum(20, 30)
console.log(sumShort)

// Scope variable - Block scope, Function Scope, Global scope
// Block scope
 if(true) {
 	const myName = 'Bhuv'
 	console.log(myName) // This will work as this in under scope
 }
 //console.log(myName) // throws an error

// Function scope

function testFn() {
	const myName = 'Bhuvanesh'
	console.log(myName)
} 
testFn()

// Global Scope

const myNum = 100
if(true) { 	
 	console.log(myNum) // This will work as this in under scope
 }
 
