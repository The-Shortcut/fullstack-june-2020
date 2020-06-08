// object example
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// }

// alert(user.name)
// alert(user.age)

// delete user.age

// alert(user["likes birds"])
// alert(user["age"])

// delete user["likes birds"]
// alert(user["likes birds"])

// Exercise objects solution
// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name

// // Computed properties examples
// let fruit = prompt("Which fruit to buy", "apple")

// let bag = {
//     [fruit + "Computers"]: 5
// }

// alert(bag.appleComputers)

// Property names limitations example
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }

// alert(obj.for + obj.let + obj.return)

// Property value shorthand
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }

// function makeUser(name, age) {
//     return {
//         name,
//         age: 30,
//     }
// }

// let user = makeUser("John")
// alert(user.name)
// alert(user.age)

// Property existence "in" operator
// let user = { name: "John", age: 30}
// alert("age" in user)
// alert("Non existent" in user)

// let obj = {
//     test: undefined
// }

// alert(obj.test) // undefined
// alert("test" in obj) // value undefined but true

// "for...in" loop examples
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// }

// for (let key in user) {
//     alert(key)
//     alert(user[key])
// }

// "for..in" order example
// let codes = {
//     "+49": "Germany",
//     "+50": "Finland",
//     "+41": "Switzerland",
//     "+30": "Norway",
// }

// for (let code in codes) {
//     alert(code)
// }

// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.age = 25

// for (let key in user) {
//     alert(key)
// }

// Salaries exercise solution
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0
// for (let key in salaries) {
//     sum = salaries[key] + sum
// }

// alert(sum)

// Manipulate property value exercise

// let navigation = {
//     width: 200,
//     height: 300,
//     title: "My navigation",
// }

// function multiplyNumber(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] = obj[key] * 2
//         }
//     }
// }

// multiplyNumber(navigation)
// console.log(navigation)

