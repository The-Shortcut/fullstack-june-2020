// Exercise 1 solution
// function doSomething(isGoingToResolve = true) {
//     return new Promise((resolve, reject) => {
//         if (isGoingToResolve) {
//             resolve("something")
//         } else {
//             reject("something else")
//         }
//     }).then(response => {
//         console.log("in my function")
//         return response
//     }).catch(error => {
//         console.log("in my function", error)
//         return error
//     })
// }

// Exercise 2 solution
// const a = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of a()'), 1000); // 1s delay
// });

// const b = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of b()'), 500); // 0.5s delay
// });

// const c = () => new Promise(resolve => {
//     setTimeout(() => resolve('result of c()'), 1100); // 1.1s delay
// });

// Exercise 3 solution
// const a = () => new Promise( resolve => {
//     setTimeout( () => resolve( 'result of a()' ), 1000 ); 
// } );

// const b = () => new Promise( resolve => {
//     setTimeout( () => resolve( 'result of b()' ), 500 ); 
// } );

// const c = () => new Promise( resolve => {
//     setTimeout( () => resolve( 'result of c()' ), 1100 ); 
// } );

// Create an async function function doJobs which takes three variables
// resultA to run promise function a, resultB to run promise function B, and 
// resultC to run promise function c sequentially awaiting one after another
// and returns an array with values of all three variables
// async function doJobs() {
//     try {
//         const resultA  = await a()
//         const resultB = await b()
//         const resultC = await c()
//         console.log([resultA, resultB, resultC])
//     } catch {
//         console.log(err)
//     }
// }

// doJobs() returns promise result or errors in this code block
// doJobs()

// normal flow part of script which outputs first
// console.log( 'I am a sync operation!' );
// console.log('Second to run')


// resolve once all a(), b(), c() resolves and gets a data object { key: 'I am plain data!' }
// Promise.all([a(), b(), c(), { key: 'I am plain data!' }])
//     .then(data => console.log('success: ', data))

// /* Expected output
// success:  [
//   'result of a()',
//   'result of b()',
//   'result of c()',
//   { key: 'I am plain data!' }
// ] */


// doSomething()
//     .then(response => console.log("in my main call", response))
//     .catch(error => console.log("in my main call", error))

// Chaining example
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000)
// }).then(function(result) {
//     console.log(result)
//     return result * 2
// }).then(function(result) {
//     console.log(result)
//     return result * 2
// }).then(function(result) {
//     console.log(result)
//     return result * 2
// })

// Promise static methods examples
// const promise1 = Promise.resolve('Promise 1 complete')
// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise 2 complete')
//     }, 2000)
// })

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

// Promise.all([promise1, promise2, "Data"])
//     .then(res => console.log(res))

// Promise.race([promise1, promise2])
//     .then(res => console.log(res))

// Promise practical example
// const hasMeeting = true
// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: "Marketing Meeting",
//             location: "Google Meet",
//             time: "1:30 PM"
//         }
//         resolve(meetingDetails)
//     } else {
//         reject(new Error("Meeting room booked"))
//     }
// })

// const addToCalendar = meetingDetails => {
//     const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`
//     return Promise.resolve(calendar)
// }

// meeting
//     .then(addToCalendar)
//     .then(res => {
//         console.log('Meeting scheduled')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

// async function myMeeting() {
//     try {
//         const meetingDetails = await meeting
//         const message = await addToCalendar(meetingDetails)
//         console.log(message)
//     } catch(err) {
//         console.log(err.message)
//     }
// }

// myMeeting()