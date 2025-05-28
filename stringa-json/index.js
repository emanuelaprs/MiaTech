
// Esercizio Converti un oggetto in una stringa JSON

const person = {
    nome: "Iole",
    età: 85,
    hobby: "scrittura"
};

const stringaJson = JSON.stringify(person);

console.log(stringaJson);

// Esercizio Converti una stringa JSON in un oggetto

const jsonString = '{"nome": "Emilia" , "età": 87, "città": "Roma"}';

const object = JSON.parse(jsonString);

console.log(object)
