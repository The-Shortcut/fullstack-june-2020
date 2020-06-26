let area = function(length, width) {
    let a = length * width
    alert(`Area of the rectangle is ${a} square unit`)
}

let perimeter = function(length, width) {
    let p = 2 * (length + width)
    alert(`Perimeter of the rectangle is ${p} unit`)
}

export {area, perimeter}