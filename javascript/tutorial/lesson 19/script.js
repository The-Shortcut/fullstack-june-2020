// let animal = {
//     eats: true,
//     walk() {
//         // console.log('Animal walks')
//     }
// }

// function Rabbit(name) {
//     this.name = name
// }

// Rabbit.prototype = animal

// let rabbit = new Rabbit("White Rabbit")

// console.log(rabbit.eats)



// let rabbit = {
//     jumps: true,
//     __proto__: animal
//    walk()
// }

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }

// rabbit.walk = function() {
//     console.log('Rabbit hops')
// }

// rabbit.walk()


// console.log(rabbit.eats)
// console.log(rabbit.jumps)
// console.log(rabbit.walk())
// console.log(longEar.jumps)
// longEar.walk()

// Object.getPrototypeOf
// Object.setPrototypeOf

// let user = {
//     fullName: 
// }
// let admin = admin.fullName

// for(let prop in rabbit) console.log(prop)

// Exercise 1
// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };  

//   console.log(pockets.pen)
//   console.log(bed.glasses)
//   console.log(table.money)

// Native prototypes
// let obj = {}
// console.log(obj.__proto__ === Object.prototype)

// [1,2,3] // new Array()

// let arr = [1,2,3]
// console.log(arr.__proto__ == Array.prototype)
// console.log(arr.__proto__.__proto__ === Object.prototype)

// Prototype methods
// let animal = {
//     eats: true
// }

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// }) 

// console.log(rabbit.eats)
// console.log(rabbit.jumps)
// console.log(Object.getPrototypeOf(rabbit) === animal)

// Object.setPrototypeOf(rabbit, {})

// Exercise 2
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join()
        }
    }
})

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"
