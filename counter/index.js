function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        }
    };
}

