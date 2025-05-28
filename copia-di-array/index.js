// Copia di Array

const numbers = [1, 2, 3, 4, 5];

const copiaNumbers = [...numbers];

numbers.push(6);

console.log(numbers);

console.log(copiaNumbers);

// Unire due array

const numeri1 = [1, 2, 3, 4];
const numeri2 = [5, 6, 7, 8];

const unioneNumeri = [...numeri1, ...numeri2];

console.log(unioneNumeri);