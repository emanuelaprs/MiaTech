
// Esercizio Copia di un array

const numbers = [1, 2, 3, 4, 5];

const arrayCopy = [...numbers];

numbers.push(6);

console.log(numbers);

console.log(arrayCopy);

// Esercizio Unione di due array

const numeriA = [1, 2, 3];

const numeriB = [4, 5, 6];

const unioneArray = [...numeriA, ...numeriB];

console.log(unioneArray);