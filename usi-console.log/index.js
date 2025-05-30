// Esercizio Utilizzare console.log

let numero = 17;

let testo = "Buon Compleanno!";

let appuntamento = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];

let persona = {
    nome: "Luna",
    età: 10
};

console.log(numero);
console.log(testo);
console.log(appuntamento);
console.log(persona);

// Esercizio Utilizzare console.error e console.warm

let controllo = "Errore";

if (controllo === "Errore") {
    console.error ("Si è verificato un errore!");
} else if (controllo === "Attenzione") {
    console.warn("Attenzione: valutazione problema");
} else {
    console.log("Tutto in regola!");
}

// Ho provato variare let controllo per visionare le varie possibilità ( tutto ok!)


// Esercizio Utilizzare console.table e console.group

const utenti = [
    { nome: "Paola", cognome: "Rossi", età: 68 },
    { nome: "Ignazio", cognome: "Bianchi", età: 69 },
    { nome: "Alberto", cognome: "Verdi", età: 58 }
];

console.table(utenti);

console.group("Dettagli utente 1");
console.log(utenti[0]);
console.group("Messaggio");
console.log("Questo è un gruppo di cugini");
console.groupEnd();
console.log("Fine script");
console.groupEnd();


