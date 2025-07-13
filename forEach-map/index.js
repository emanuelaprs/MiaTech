
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(numero) {
    console.log(numero * 2);
});

let squaredNumbers = numbers.map(function(numero) {
    return numero * numero;
});

console.log(squaredNumbers);