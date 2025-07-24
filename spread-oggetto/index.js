
// Esercizio Copia di un oggetto con proprietà aggiuntive

const person = {
    name: "Martina", 
    age: 17,
};

const personCopy = {
    ...person,
    city: "Palermo",
};

console.log(person);

console.log(personCopy);

