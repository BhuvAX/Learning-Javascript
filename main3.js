// ## Asynchronous JavaScript
// ## Timeouts and Intervals
	function greet() {
		console.log('Hello world')
	}
	setTimeout(greet, 2000)

	// with parameter

	function greet(name) {
		console.log(`Hello ${name}`)
	}
	setTimeout(greet, 2000, 'Bhuv')	

	// If we want to cancel the setTimeout
	// we can use clearTimeout(timeoutId)
	function greet() {
		console.log('Hello world')
	}
	const timeoutId = setTimeout(greet, 2000)
	clearTimeout(timeoutId)
	// setInterval function example
	function greet() {
		console.log('The interval message')
	}
	//setInterval(greet, 2000)

// ## Callbacks

 	function greet(name) {
 		console.log(`My name is ${name}`)
 	}

 	function greetMe(greetFn) {
 		const name = 'Bhuvanesh'
 		greetFn(name)
 	}

 	greetMe(greet)

// ## Promise
// A promise is an object in JS
// With three states - pending, fulfilled, rejected
// To overcome the callback situation we can use promise

const promise = new promise((resolve, reject) => {
  setTimeout(() => {
  	resolve('Promise done')
  }, 5000)
})

const promise = new promise((resolve, reject) => {
  setTimeout(() => {
  	reject('Promise not statisfied')
  }, 5000)
})

const onFullfillment = (result) => {
	console.log(result)
}
const onRejection = (error) => {
	console.log(error)
}
promise.then(onFullfillment)
promise.catch(onRejection)

