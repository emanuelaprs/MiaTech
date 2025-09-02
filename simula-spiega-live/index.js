
// Condizioni in Javascript

// Cosa sono? -> strutture che eseguono istruzioni in base al valore di una condizione: true o false.
// Si verifica una ipotesi.

// Quali sono? -> if, else if e else.

// if -> se condizione è true.

let number = 8;

if(number > 0) {
    console.log("Il numero è positivo");
}

// se la condizione risulta falsa, javascript ignora l'istruzione.


// if...else -> se condizione if è false.

let age = 17;

if (age >= 18) {
    console.log("Sei maggiorenne")
} else {
    console.log("Sei minorenne");
}

// if...else if...else -> più di una condizione sequenziali.

let score = 6;

if (score >= 8) {
    console.log("Promosso con successo")
} else if (score >= 6) {
    console.log("Promosso, ma la prossima volta impegnati di più!")
} else {
    console.log("Bocciato: ritenta!");
}

/**
 * Operatori logici -> combinano le condizioni.
 * 
 * && -> and = true se entrambe vere.
 * || -> or = true se almeno una è vera.
 * ! -> not = inverte valore.
*/

// Esercizio - puoi guidare solo se hai 18 anni E hai la patente.

let eta = 18;
let patenteSi = true;

if (eta >= 18 && patenteSi || test == false) {
  console.log("Comgratulazioni, puoi guidare!");
} else {
  console.log("Prendi il bus!");
}

// non c'è un limite nell'uso degli operatori logici

// Priorità lettura delle condizioni -> la lettura di javascript va da sinistra verso destra.
//MA possiamo definire l'ordine di priorità con le parentesi tonde -> chiudo tra parentesi le ipotesi a cui do priorità.