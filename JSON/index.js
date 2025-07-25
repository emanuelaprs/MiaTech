
// Eserizio Conversione di un oggetto in una stringa JSON

const person = {
    name: "Rosa",
    age: 30,
    city: "Palermo"
};

const personJSON = JSON.stringify(person);

console.log(personJSON);

// Esercizio Conversione di una stringa JASON in un oggetto

const stringJSON = '{"nome": "Sergio", "eta": 84, "citta": "Roma"}';

const object = JSON.parse(stringJSON);

console.log(object);

// Esercizio Manipolazione di dati JSON

const listaPersoneJSON = '[{"nome":"Roberto","eta":45},{"nome":"Anna","eta":30}, {"nome":"Elisa","età":27}]';


const listapersoneOggetti = JSON.parse(listaPersoneJSON);

listapersoneOggetti.push({nome: "Mauro", età: "27"});

const listaPersoneAggiornataJSON = JSON.stringify(listapersoneOggetti);

console.log(listaPersoneAggiornataJSON);