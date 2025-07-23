
// Esercizio Estrazione proprietà di base - oggetto

let person = {
    name: "Alda",
    surname: "Merini",
    job: "poetess",
};

let {name, surname} = person;

console.log(name);
console.log(surname);

// Esercizio Destructuring con nomi di variabili separate

let {name: firstName, surname: secondName} = person;

console.log(firstName);
console.log(secondName);

