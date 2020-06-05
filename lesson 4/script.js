// // OR || examples
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
// Most of the time, OR || is used 
// in an if statement to test if any of the given conditions is true.
// For example:
let time = 9
let checkOffice = (time < 10 || time > 18) ? "The office is closed" : "Office open"
alert(checkOffice)
//We can pass more conditions:
let time = 12
let isWeekend = true
let checkOffice = (time < 10 || time > 18 || isWeekend) ? "The office is closed" : "Office open"
alert(checkOffice)
// && AND examples
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
// && practical example
let hour = 12
let minute = 30
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' )
}
// ! NOT examples
alert( !true ); // false
alert( !0 ); // true
// double !! example
alert( !!"non-empty string" ); // true
alert( !!null ); // false
// Exercise: Logical operators
let userName = prompt("Who's there?", '');

if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
//While loop examples
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
// do...while loop examples
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
// For loop example
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }
// For loop algorithm breakdown
// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

// For loop inline variable declaration alternative
let i = 0;
for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}
alert(i); 
// For loop skipping parts example
// Without begin part
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
//We can also remove the step part:
let i = 0;
for (; i < 3;) {
  alert( i++ );
} // This makes the loop identical to while (i < 3)
// Breaking loop
//For example, the loop below asks 
//the user for a series of numbers, “breaking” when no number is entered:
let sum = 0;
while (true) {
  let value = +prompt("Enter a number");
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );
// Loop continue directive examples
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
  }
// Loops exercise
// Nivedita's solution for loop exercise
const number = prompt("Enter number upto which you would like to fetch primes");
const primes = [];
for (i = 2; i < number; i++) {
    let prime = true;
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime === true) {
        primes.push(i);
    }
}
// if primes is empty handle
alert(primes);
// BREAK
//110 minutes
// Switch statement 
let a = 2 + 3

switch(a) {
    case 3:
        alert("Too small")
    case 4:
        alert("Correct")
    case 5:
        alert("Too large")
    default:
        alert("It's not correct")
}

// Switch type error example
let arg = prompt("Enter a value")

switch(arg) {
    case "0":
    case "1":
        alert ("One or zero")
        break;
    case "2":
        alert("Two")
        break;
    case 3:
        alert("Never executes")
        break;
    default:
        alert("An unknown value")
}

// Switch exercise solution
switch(a) {
    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2:
    case 3:
        alert("2,3")
        break;
}
