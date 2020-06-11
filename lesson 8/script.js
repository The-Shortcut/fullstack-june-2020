// delete operator Array example
// let arr = ["John", "Pete", "Anne"]
// console.log(arr.length)
// delete arr[1]
// console.log(arr)
// console.log(arr.length)

// splice array
// let arr = ["I", "study", "Javascript"]

// // arr.splice(1, 1)
// // console.log(arr)

// // arr.splice(0, 3,"Let's", "workout")
// // console.log(arr)

// arr.splice(2, 0, "complex", "language")
// console.log(arr)

// Negative index
// let arr = [1,2,5]
// arr.splice(-1, 0, 3, 4)
// console.log(arr)

// slice array
// let arr = ["t", "e", "s", "t"]
// // console.log(arr.slice(1,3))
// console.log(arr.slice(-2))

// concat example
// let arr = [1, 2]
// // console.log(arr.concat([3,4]))
// let arrayLike = {
//     0: "Something",
//     length: 1
// }
// console.log(arr.concat(arrayLike))

//forEach example
// ["John", "Pete", "Anne"].forEach(console.log)
// ["John", "Pete", "Anne"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in [${array}]`)
// })

// indexOf, lastIndexOf, includes example
// let arr = [1, 0, false]

// console.log(arr.indexOf(0))
// console.log(arr.indexOf(false))
// console.log(arr.includes(1))

// find and findindex examples
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Anne"}
// ]

// let user = users.find(item => item.id == 1)
// console.log(user.name)

// filter example
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Anne"}
// ]

// let user = users.filter(item => item.id < 2)
// console.log(user.length)

// Filter exercise solution
// function rangeFruits(fruits, a, b) {
//     return fruits.filter(item => (a <= item && item <= b))
// }

// function rangeNumbers(numbers, a, b) {
//     return numbers.filter(item => (a <= item && item <= b))
// }
// let fruits = ["apple", "banana", "cantaloupe", "durian", "jackfruit"]
// let numbers = [3, 2, 4, 5, 8, 9, 1]

// let smallNumbers = rangeNumbers(numbers, 1, 5)
// let bigFruits = rangeFruits(fruits, "c", "z")

// console.log(numbers)
// console.log(smallNumbers)
// console.log(fruits)
// console.log(bigFruits)

// map example
// let lengths = ["John", "Peter", "Ann"].map(item => item.length)
// console.log(lengths)

// sort example
// function compare(a, b) {
//     if (a > b) return 1
//     if (a == b) return 0
//     if (a < b) return -1
// }
// let arr = [1, 15, 2]
// arr.sort(function(a,b) {return a-b})
// console.log(arr)

// split and join example
// split example
//let names = "John, Pete, Anne"

// let splitName = names.split(", ")

// for(let name of splitName) {
//     console.log(`A message to ${name}`)
// }

// join example
// let names = ["John, Pete, Anne"]

// let joinName = names.join(";")
// console.log(joinName)

// reduce example
// let arr = [1, 2, 3, 4, 5]
// let result = arr.reduce((sum, current) => sum + current, 0)
// console.log(result)

// Sort slice exercise solution
// function copySorted(webTech) {
//     return webTech.slice().sort()
// }

// let webTech = ["HTML", "CSS", "Javascript"]
// let orderedWebTech = copySorted(webTech)

// console.log(orderedWebTech)
// console.log(webTech)

// Sort by age and extract name from object exercise solution
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [ pete, john, mary ];
  
  let sorted = sortByAge(arr); // Sort by age
  console.log(arr)
 
  let names = users.map(user => user.name)
  console.log(names)
