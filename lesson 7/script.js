// // String methods and properties examples
// // let str = "Hello!"

// // console.log(str.toUpperCase())

// // let single = 'single-quote'
// // let double = "double-quote"
// // let backticks = `backticks` 

// // function sum(a,b) {
// //     return a+b
// // }

// // alert(`1 + 2 = ${sum(1, 2)}`)

// // let guestlist = `Guests:
// // - John
// // - Pete
// // - Mary
// // `
// // alert(guestlist)

// // console.log(`Myn`.length)

// // let str = "hi"

// // // str[0] = 'H'
// // str = 'H' + str[1]
// // console.log(str)

// // includes, startswith, endsWith example
// // console.log("Widget with id".includes("Widget"))
// // console.log("Hello".includes("Bye"))

// // console.log("Widget".startsWith("Wid"))
// // console.log("Widget".endsWith("get"))

// // String exercise solution
// // let mailSubject = prompt("Subject: ", "")

// // checkSpam = () => {
// //     let lowercaseMessage = mailSubject.toLowerCase()
// //     let messageCheck = lowercaseMessage.includes("million") || lowercaseMessage.includes("virus")
// //     return (messageCheck ? "It is a spam" : "Here is your mail")
// // }

// // alert(checkSpam())

// // Array examples
// // let arr = new Array()
// // let arr = []

// // let fruits = ['Apple', 'Orange', 'Pears']

// // // console.log(fruits[0])
// // // console.log(fruits[2])

// // fruits[2] = 'Bananas'
// // // console.log(fruits)

// // fruits[3] = 'Lemon'
// // // console.log(fruits)
// // console.log(fruits.length)

// // let arr = ['Apple', {name: 'John'}, true, function() {alert('Hello')},]

// // alert(arr[1].name)
// // arr[3]()

// // Array methods
// // pop, push
// // let fruits = ["Apple","Orange", "Pears"]
// // let fruits = ["Apple","Orange"]
// // console.log(fruits)
// // // console.log(fruits.pop("Pears"))
// // console.log(fruits.push("Bananas"))
// // console.log(fruits)
// // // shift method
// // let fruits = ["Apple","Orange", "Pears"]
// // console.log(fruits.shift())
// // console.log(fruits)

// // unshift method
// // let fruits = ["Orange", "Pears"]
// // console.log(fruits)
// // console.log(fruits.unshift("Apple"))
// // console.log(fruits)

// // Array exercise solution
// // let genre = ["Jazz", "Blues"]
// // console.log(genre)
// // genre.push("Rock-n-Roll")
// // console.log(genre)
// // genre[Math.floor(genre.length/2)] = "Classics"
// // console.log(genre)
// // genre.shift()
// // console.log(genre)
// // genre.unshift("Rap", "Reggae")
// // console.log(genre)

// // Loops in Arrays
// // let fruits = ["Apple", "Orange", "Pear"]

// // // for (let i = 0; i < fruits.length; i++) {
// // //     console.log(fruits[i])
// // // }

// // for (let fruit of fruits) {
// //     console.log(fruit)
// // }
// // Multidimensional arrays
// // let matrix = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ]

// // console.log(matrix[1][1])

// // Array exercise 2 solution
// // Write a function findSum() that:
// // Keeps asking the user for values using prompt and stores the values in the 
// // numbers array.
// // P.S. A zero 0 is a valid number. Don’t stop the input on zero
// // Finishes asking when the user enters a non-numeric value, an empty string, 
// // or presses “Cancel”.
// // Calculates and returns the sum of array items.
// // Show the sum of array values on alert window

// function findSum() {
//     let numbers = []

//     while (true) {
//         let value = prompt("Input a number: ", 0)
//         if (value === "" || value === null) break
//         numbers.push(+value)
//     }

//     let sum = 0
//     for (let number of numbers) {
//         sum = sum + number
//     }
//     return sum
// }

// alert(findSum())
