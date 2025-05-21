const person = {
    nome: "Fernando",
    cognome: "Pessoa",
    professione: "poeta"
};

const { nome, cognome } = person;

console.log(nome);
console.log(cognome);

// Esercizio Destructuring con nomi di variabili diversi

const { nome: firstName, cognome: surName } = person;

console.log(firstName);
console.log(surName);
