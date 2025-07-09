// Esercizio Dichiarazioni variabili

let number;

number = 9;

console.log(number);

const nameVar = "Martina";

console.log(nameVar);

// Esercizio Cambio valore

let age = 5;

console.log(age);

age = 8;

console.log(age);

// Esercizio Ridefinizione di variabili

let numero = 10;

{
    let numero = 20;
    console.log(numero);
}

console.log(numero);

// Esercizio Scoping delle variabili

let outside = 25;

{
    let inside = 50;
    console.log(inside);
    console.log(outside);
}

console.log(outside);
console.log(inside);