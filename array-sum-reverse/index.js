let numbers = [1, 2, 3];
let somma = 0;

for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i]
}

console.log("la somma degli elementi è" + somma); 

// reverse

let reversed = [];

for (let i = numbers.length; i >= 0 ; i--) {
    reversed.push(numbers[i])
}

console.log(reversed);