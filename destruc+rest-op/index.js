
// Esercizio Destructuring array con rest operator

const numbers = [5, 10, 15, 20, 25];

const [primo, secondo, ...resto] = numbers;

console.log(primo);
console.log(secondo);
console.log(resto);

// Esercizio Destructuring oggetto con rest operator

const person = {
    name: "Paola",
    surname: "Di Chiara",
    age: 50,
    city: "Palermo",
};

const {name, surname, ...rest} = person;

console.log(name);
console.log(surname);
console.log(rest);


