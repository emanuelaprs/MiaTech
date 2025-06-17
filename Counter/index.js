function createCounter() {
    let count = 0;
    return {
        increment: function createCounter() {
            count += 1;
            return count;
        },
        decrement: function createCounter() {
            count -= 1;
            return count;
        }
    };
}

const object = createCounter()

console.log(object.increment());

console.log(object.decrement());






console.log(createCounter.increment);

console.log(createCounter.decrement);