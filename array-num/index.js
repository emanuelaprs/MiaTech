
// Esercizio Array di numeri

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Esercizio Somma i numeri

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("La somma è:", sum);

// Esercizo Array reverse

let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);