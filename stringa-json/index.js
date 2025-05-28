
// Esercizio Converti un oggetto in una stringa JSON

const person = {
    nome: "Iole",
    età: 85,
    hobby: "scrittura"
};

const stringaJson = JSON.stringify(person);

console.log(stringaJson);