
let expenses = [25, 60, 10, 5];

let total = expenses.reduce ((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log(total);

let words = ["banana", "apple", "cherry", "date"];

words.sort();

console.log(words);