// Assigning property??
// let user = {}; // For some reason the semi-colon matters here
// [user.name, user.lastname] = "John Walker".split(' ')
// console.log(user.lastname)

// let firstname = "John"
// let lastname = "Walker"

// [firstname, lastname] = [lastname, firstname]
// console.log(`${lastname} ${firstname}`)

// ...rest pattern
// let [user1, user2, ...rest] = ["JOhn", "Anne", "Pete", "Mary", "Joe"]
// console.log(rest)

// object destructuring
// let navbar = {
//     title: "Menu",
//     width: 100,
//     height: 50
// }

// let{title: name, width, height} = navbar

// console.log(name)

// let navbar = {
//     title: "Menu"
// }

// let {width: w = 100, height = 50} = navbar

// console.log(w)

// ...rest for objects
// let navbar = {
//     title: "Menu",
//     width: 100,
//     height: 50
// }

// let {title, ...rest} = navbar

// console.log(rest.height)

// nested destructuring
// let navbar = {
//     width: 100,
//     height: 50,
//     colors: {
//         box: "Yellow",
//         buttons: "Red"
//     }
// }

// let {
//     title = "Menu",
//     colors: {
//         box,
//         buttons
//     }
// } = navbar

// console.log(box)

// Destructuring exercise solution
// let user = {
//     name: "John",
//     years: 30
//   };
// let {name, years: age, isAdmin = false} = user  
// console.log(name)
// console.log(age)
// console.log(isAdmin)

// Destructuring exercise 2 solution 
// const webTechObj = {
//     browser : {
//         markup: 'HTML',
//         styling: 'CSS',
//         programming: {
//             browser: 'JavaScript',
//             general: 'Python', 
//             framework: {
//                 javascript: ['React', 'Angular'],
//                 python: ['django', 'flask']
//             }
//         }
//     },
//     server: ['Java','nodeJS']
// }
 
// const { browser: {markup}, browser: {styling}, browser: {programming: {browser}}, browser: {programming: {framework: {javascript:[react]}}} , server: [,node]} = webTechObj
 
 
// console.log(`JS Fullstack: ${markup}, ${styling}, ${browser} ${node} and ${react}` )

// JSON.stringify
// let student = {
//     name: "John",
//     age: 30,
//     isAdmin: false,
//     courses: ['html','css','js']
// }

// let json = JSON.stringify(student)

// //console.log(typeof json)
// console.log(json)

// let room = {
//     number: 23
// }

// let meetup = {
//     title: "Conference",
//     participants: ["John", "Anne"]
// }

// meetup.place = room
// room.occupied = meetup

// console.log(JSON.stringify(meetup))

// replacer function example

// let obj = {
//     organization: "TS",
//     model: "box",
//     week: 45,
//     transport: "car",
//     month: 7
// }
// // function replace(key, value) {
// //     if (typeof value == "string") {
// //         return undefined 
// //     } 
// //     return value
// // }

// console.log(JSON.stringify(obj, ['week', 'month'], 8))

// toJSON()

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number
//     }
// }

// let meetup = {
//     title: "Conference",
//     room
// }

// console.log(JSON.stringify(room))
// console.log(JSON.stringify(meetup))

// JSON.parse example
// let numbers = "[0, 1, 2, 3]"
// numbers = JSON.parse(numbers)
// console.log(numbers)
// let userData = `{
//     "name": "John",
//     "age": 35,
//     "isAdmin": false,
//     "friends" : [1,2,3]
// }`

// console.log(JSON.parse(userData))

// JSON exercise
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//    occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
//   };
  
//   // circular references which can cause error without replacer function
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
//   // Fix error with 
//   function replacer(key, value) {
//       return (key != "" && value == meetup) ? undefined : value
//   }
  
//   console.log( JSON.stringify(meetup, replacer))