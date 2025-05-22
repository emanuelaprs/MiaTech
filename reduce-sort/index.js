const expenses = [30, 45, 15, 23];


const total = expenses.reduce ((accumulator, current) => {
        return accumulator + current;
    }, 0);

console.log(total);


const words = ["banana", "apple", "cherry", "date"];

words.sort();

console.log(words);
