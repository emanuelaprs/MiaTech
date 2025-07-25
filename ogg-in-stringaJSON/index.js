
// Eserizio Conversione di un oggetto in una stringa JSON

const person = {
    name: "Rosa",
    age: 30,
    city: "Palermo"
};

const personJSON = JSON.stringify(person);

console.log(personJSON);