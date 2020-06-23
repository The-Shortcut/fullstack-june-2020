// class CoffeeMachine {
//     _waterAmount = 0
// }

// class Rabbit {}

// let rabbit = new Rabbit()

// console.log(rabbit instanceof CoffeeMachine)

// let arr = [1,2,3]

// console.log(arr instanceof Array)
// console.log(arr instanceof Object)

// let sayHiMixin = {
//     sayHi() {
//         console.log(`Hello ${this.name}`)
//     },

//     sayBye() {
//         console.log(`Bye ${this.name}`)
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// Object.assign(User.prototype, sayHiMixin)

// new User("Dude").sayHi()

// Exercise 1 solution
// function Book() {
//     this.author = "author"
//     this.published = "published"
// }

// const Author = {
//     name: "name",
//     books: "books"
// }

// const Publisher = new function() {
//     this.authors = "authors"
//     this.books = "books"
// }

// class Review {
//     constructor() {
//         this.rating = 'rating'
//         this.user = 'user'
//     }
// }

// Exercise 2 solution
// class Employee {
//     constructor(firstname, lastname) {
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     fullname() {
//         return `${this.firstname} ${this.lastname}`
//     }

//     sendEmail() {
//         return `Email sent to ${this.firstname}.${this.lastname}@company.com`.toLowerCase()
//     }

// }

// let newEmployee = new Employee("Firstname", "Lastname")
// console.log(newEmployee.fullname())
// console.log(newEmployee.sendEmail())

// Exercise 3 solution
const prices = {
    Strawberries: 1.50,
    Banana: 0.50,
    Mango: 2.50,
    Blueberries: 1.00,
    Raspberries: 1.00,
    Apple: 1.75,
    Pineapple: 3.50
}

class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients
        this.cost = ingredients.reduce((sum, ingredient) => sum + prices[ingredient], 0)
    }

    getCost() {
        return `$${this.cost.toFixed(2)}`
    }

    getPrice() {
        return `$${this.cost * 1.5.toFixed(2)}`
    }

    getName() {
        if(this.ingredients.length === 1) return `${this.ingredients[0].replace("berries", "berry")} Smoothie`
        return `${this.ingredients.map(ingredient => ingredient.replace("berries", "berry")).sort().join(" ")} Fusion`
    }

}

let smoothie = new Smoothie(["Strawberries"])
let fusion = new Smoothie(["Banana", "Strawberries"])

console.log(smoothie.getName())
console.log(smoothie.getPrice())
console.log(smoothie.getCost())

console.log(fusion.getName())
console.log(fusion.getPrice())
console.log(fusion.getCost())
