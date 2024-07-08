// Advanced JavaScript

// ## Nested function scope

// let a = 10
// function outer() {
// 	let b = 20
// 	function inner() {
// 		let c = 30
// 		console.log(a, b, c)
// 	}
// 	inner()
// }
// outer()

// ## Closure

function outer() {
	let counter = 0
	function inner() {
		counter ++
		console.log(counter)
	}
	//inner() // now here if we return inner then this will become closure
    return inner
}
outer()

const fn = outer()
fn()
fn()

// Function Currying 

function sumCurrying(a, b, c) {
	return a + b + c
}
console.log(sumCurrying(2,3,4))

// sum(2, 3, 4) sum(2)(3)(4)
// function curry(fns) {
//    return function(a) {
//    	  return function(b) {
//    	  	return function(c) {
//    	  		return fns(a, b, c)
//    	  	}
//    	  }
//    }
// }

//  const currySum = curry(sum)
//  console.log(currySum(2)(4)(1))

// const add2 = currySum(2)
// const add4 = add4(4)
// const add1 = add1(1)
// console.log(add1)

// ##this keyword

// const persons = {
// 	name: 'Bhuv',
// 	sayMyName: function() {
// 		console.log(`My name is ${this.name}`)
// 	},
// }

// persons.sayMyName()

// function anotherPerson(name) {
//   this.name = name
// }

// const p1 = new anotherPerson('Bhuv')
// const p2 = new anotherPerson('Sharma')
// console.log(p1.name, p2.name)

//## Prototype

// function newPerson(fname, lname) {
// 	this.firstname = fname
// 	this.lastname = lname
// }

// const per1 = new newPerson('B', 'Sharma')
// const per2 = new newPerson('Bhuvanesh', 'Sharma')

// newPerson.prototype.getFullName = function() {
// 	return this.firstname + ' ' + this.lastname
// }

// console.log(per1.getFullName())
// console.log(per2.getFullName())

class newPerson {
	constructor(fName, lName) {
		this.firstName = fName
		this.lastName = lName
	} 
	sayMyName() {
		return this.firstName+ ' '+ this.lastName
	}
}

const classP1 = new newPerson('Bhuv', 'Sharma')
console.log(classP1.sayMyName())

// ## class extends

class SuperHero extends newPerson {
	constructor(fName, lName) {
  	  super(fName, lName)
	  this.isSuperHero = true
	}
	fightCrime() {
		console.log('fighthing crime')
	}
}

const superMan = new SuperHero('Bruce', 'Banner')
console.log(superMan.sayMyName())

// ## Iterables and iterators

const obj = {
	[Symbol.iterator]: function() {
		let step = 0
		const iterator = {
			next: function() {
				step++
				if(step === 1) {
				  return {value: 'Hello', done: false}	
				} else if (step === 2) {
				  return {value: 'World', done: false}	
				}
				return {value: undefined, done: true}
			}
		}
		return iterator
	}
}

// for (const word of obj){
//   console.log(word)
// }

// ##Generators

function normalFunction() {
  console.log('hello')
  console.log('world')
}

//normalFunction()

function* generatorFunction() {
  yield 'Hello'
  yield 'World'
}

const generatorObject = generatorFunction()
for(const word of generatorObject) {
	console.log(word)
}