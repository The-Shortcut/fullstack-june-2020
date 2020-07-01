// Object properties examples
// let user = {
//     name: "John",
//     toString() {
//         return this.name
//     }
// }
// let user = {}

// Object.defineProperty(user, "toString", {
//     writable: false
//     enumerable: false
// })

// for (let key in user) console.log(key)


// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log( JSON.stringify(descriptor, null, 2))

// user.name = "Pete"
// console.log(user.name)

// getters setters
// let obj = {
//     get propName(value) {

//     },

//     set propName(value) {

//     }
// }

// let user = {
//     firstName: 'Pete',
//     lastName: 'Walker',
// }

// Object.defineProperty(user, 'fullName', {
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },

//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(' ')
//     }
// })

// user.fullName = 'John Smith'

// // console.log(user.fullName
// console.log(user.firstName)
// console.log(user.lastName)

// for (let key in user) console.log(key)

let user = {
    get name() {
        return this._name
    },

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short, need at least 4 chars')
            return
        }
        this._name = value
    }
}

user.name = 'Pete'
console.log(user.name)

user.name = 'Son'
console.log(user.name)