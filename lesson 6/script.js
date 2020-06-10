// Create an array genre with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and so that “Classics” becomes the first value in the new array.
// Prepend Rap and Reggae to the array.
// Output the array changes in every steps on the console and it should look like this:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll
let genre = ["Jazz", "Blues"]
console.log(genre)
genre.push = "Rock-n-Roll"
console.log(genre)
genre[Math.floor((genre.length)/2)] = "Classics"
console.log(genre)
genre.shift()
console.log(genre)
genre.unshift("Rap", "Reggae")
console.log(genre)