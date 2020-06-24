// function loadScript(src) {
//     //creates a script tag and appends to the page
//     // this causes the script with given src to start loading and run when complete
//     let script = document.createElement('script')
//     script.src = src
//     document.head.append(script)

//     script.onload = () => callback(script)
// }

// loadScript('/script.js'), function(script) {
//     console.log(`Cool the ${this.src} is loaded, let's load something else`)

//         loadScript('/script2.js'), function(script) {
//             console.log(`Cool the ${this.src} is loaded, let's load something else`)
// }

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// })

// Basics of then
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 2000)
// })

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// )

// catch example
// If we are interested only in errors .then(null, errorHandlingFunction)
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// })

// promise.catch(console.log)

// new Promise((resolve, reject) => {
//     // do something which takes time, and calls resolve/reject
//     // runs
// })

// .finally(() => stop loading something)
// .then(result => show result, err => show error)

// Exercise 1
// let greetHi = name => console.log(`Hi ${name}`)
// let greetBye = name => console.log(`Bye ${name}`)

// let userInfo = (firstName, lastName, callback) => {
//     const fullName = `${firstName} ${lastName}`
//     callback(fullName)
// }

// userInfo("Pete", "Walker", greetHi)
// userInfo("Pete", "Walker", greetBye)

// Exercise 2
// function delay(ms) {
//   // your code
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
// delay(3000).then(() => console.log('runs after 3 seconds'));

// Exercise 3 
// let promise = new Promise((resolve, reject) => {
//     let animal = "dog"
//     setTimeout(() => {
//         if (animal === "dog") {
//             resolve("It's a dog!")
//         }
//         if (animal !== "dog") {
//             reject("It's NOT a dog")
//         }
//     }, 1000)
// })

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// )


// Exercise 4
let result = ""

let promise = new Promise((resolve) => {
    resolve(console.log("success"))
})

promise.then(val => result = val)
