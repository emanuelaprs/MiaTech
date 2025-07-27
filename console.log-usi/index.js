
// Esercizio Utilizzare console.log

let number = 8;

let text  = "Domenica in famiglia!";

let schedule = ["lunedì", "mercoledì", "venerdì"];

let person = {
    name: "Asia",
    age: 20,
    city: "Verona"
};

console.log(number);
console.log(text);
console.log(schedule);
console.log(person);

// Esercizio Utilizzare console.error e console.warn

let statoDaControllare= "Errore";

if (statoDaControllare === "errore") {
    console.error("Si è verificato un errore!");
} else if (statoDaControllare === "avvertenza") {
    console.warn("Avvertenza: info da consultare");
} else {
    console.log("Niente da dichiarare");
}

// Esercizio Utilizzare console.table e console.group

const persone = [
  { nome: 'Enea', eta: 30 },
  { nome: 'Joe', eta: 32 },
  { nome: 'Giulia', eta: 28 }
];

console.table(persone);

console.group('Dettagli persona 1');
console.log(persone[1]);
console.groupEnd();
