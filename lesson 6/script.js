// console.log("This is a JS file")

// Object reference example
// let user = { name: "John"}

// let admin = user
// admin.name = "Pete"

// alert(admin.name)

// Object comparison example
// let a = {}
// let b = {}

// alert(a == b)

// Object cloning for..in
// let user = {
//     name: "John",
//     age: 30
// }

// let clone = {}

// for(let key in user) {
//     clone[key] = user[key]
// }

// clone.name = "Pete"

// alert(user.name)
// alert(clone.name)


// Object.assign() example
// let user = {name : "John", age: 30}
// let clone = Object.assign({}, user)
// alert(clone.name)
// console.log(clone)

// Nested cloning
// let user = {
//     name: "John",
//     sizes: {
//         height: 172,
//         width: 50
//     }
// }

// let clone = Object.assign({}, user)

// alert(user.sizes.height)

// Exercise object cloning
// let user = {
//     name: "John",
//     age: 30
// }

// let superUser = {
//     isAdmin: true
// }

// let adminUser = Object.assign({}, user, superUser)
// console.log(adminUser)

// Method examples
// let user = {
//     name: "John",
//     age: 30
// }
// user.sayHi = function() {
//     alert("Hello! " + this.name)
// }
// user.sayHi()

// "this" is not bound example
// let user = {name: "John"}
// let admin = {name: "Admin"}

// let sayHi = function sayHi() {
//     alert(this.name)
// }

// user.sayHi = sayHi
// admin.sayHi = sayHi

// user.sayHi()
// admin.sayHi()

// Arrow function no "this" example
// let user = {
//     name: "John",
//     sayHi() {
//         let arrow = () => alert(this.name)
//         arrow()
//     }
// }

// user.sayHi()

// Calculator Object "this" solution
// Create an object calculator with three methods
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// multiply() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };
// calculator.read();
// alert( ‘Sum of a and b is: ‘ + calculator.sum() );
// alert( ‘Product of a and b is: ‘ + calculator.multiply() );

// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     multiply() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// alert("Sum of a and b is: " + calculator.sum() );
// alert("Product of a and b is: " + calculator.multiply() );


// Constructor function example
// function User(name) {
//     this.name = name,
//     this.isAdmin = false
// }

// let user = new User("Jack")

// alert(user.name)
// alert(user.isAdmin)

// Methods in constructor
// function User(name) {
//     this.name = name,
//     this.sayHi = function() {
//         alert("My name is: " + this.name)
//     }
// }

// // Making changes to constructor outside the constructor
// User.prototype.sayBye = function () {
//     alert(this.name + " says bye")
// }

// let john = new User("John")
// // john.sayHi()
// john.sayBye()

// Find perimeter solution
function GeoShape(name, sides, sideLength) {
    this.name = name,
    this.sides = sides,
    this.sideLength = sideLength
}

GeoShape.prototype.findPerimeter = function() {
    let perimeter = this.sides * this.sideLength 
    console.log(perimeter)
}

let square = new GeoShape("square", 4, 6)
square.findPerimeter()

let triangle = new GeoShape("triangle", 3, 5)
triangle.findPerimeter()



