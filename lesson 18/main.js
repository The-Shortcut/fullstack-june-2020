// import * as hi from './sayHi.js';
// // const sayHi = require('./sayHi')

// alert(sayHi); // function...
// sayHi('John'); // Hello, John!
// sayHi('Pete')

// let modulePath = prompt('Which module to load')
// import(modulePath) 
//     .then(obj => <module object>)
//     .catch(err => <loading error, if no such modules>)

// let module = await import(modulePath)

// Create a file called math.js which exports a class called Math
// The class constructor contains this.sum with a function to add two arguments, 
// and this.sub with a function to subtract value of two arguments
// The class also contains findSum(a,b) method which returns the sum()
// And findSub(a,b) method which returns the sub()
// main.js file imports the Math class and creates a new math class
// It calls the functions findSum() and findSub() with given arguments and provides 
// output using browser alert
// Link the main.js on an HTML doc and run the file using liveserver
import {Math} from './math.js'

let math = new Math()

alert(math.findSum(1,2))
alert(math.findSub(1,2))