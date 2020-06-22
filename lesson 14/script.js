
// let User = class {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     ['say' + 'Hi']() { // non-enumerable
//         console.log(this.name)
//     }

//     get name() {
//         return this._name
//     }

//     set name(value) {
//         if ( value.length < 4 ) {
//             alert("Name is short.")
//             return
//         }
//         this._name = value
//     }

// }

// // User.prototype

// let user = new User("John")
// console.log(user.name)

// user = new User("Mj")

// // user.sayHi()


// class User {
//     name = "John"

//     sayHi() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// new User().sayHi()

// Exercise 1 solution
// class Clock {
//     constructor({template}) {
//         this.template = template
//         let timer
//     }

//     render() {
//         let date = new Date();
    
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         let output = this.template
//           .replace('h', hours)
//           .replace('m', mins)
//           .replace('s', secs);
    
//         console.log(output);
//       }

//       stop () {
//         clearInterval(this.timer);
//       }

//       start () {
//         this.render();
//         this.timer = setInterval(()=>this.render(), 1000);
//       }
// }

//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


// Class inheritance example
// class Animal {
//     constructor(name) {
//         this.speed = 0
//         this.name = name
//     }

//     run(speed) {
//         this.speed = speed
//         console.log(`${this.name} runs with speed ${this.speed}`)
//     }

//     stop() {
//         this.speed = 0
//         console.log(`${this.name} stands still`)
//     }


// }

// let animal = new Animal("My animal")

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name)
//         this.earLength = earLength
//     }

//     hide() {
//         console.log(`${this.name} hides!`)
//     }

//     stop() {
//         super.stop()
//         this.hide()
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 10)

// animal.run(3)
// animal.stop()
// rabbit.run(5)
// rabbit.stop()

// Static properties and methods example
// class User {
//     static staticMethod() {

//     }
// }

// class Article {
//     constructor(title, date) {
//         this.title = title
//         this.date = date
//     }

//     static publisher = "Publisher"

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date
//     }
// }

// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2018, 0, 1)),
//     new Article("JS", new Date(2019, 11, 1))
// ]

// articles.sort(Article.compare)

// console.log(articles[0].title)

// Exercise 2 solution
class Animal {
    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
       super(name)
       this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);

