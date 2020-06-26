export class Math {
    constructor() {
        this.sum = function(x, y) {
            return x + y
        }
        this.sub = function(x, y) {
            return x - y
        }
    }

    findSum(a, b) {
        return this.sum(a, b)
    }

    findSub(a, b) {
        return this.sub(a, b)
    }
}