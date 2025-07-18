/**
 * Scrivi un programma in JavaScript che simuli una lotteria: il sistema genera una combinazione casuale di 6 numeri tra 1 e 10  
 * (senza ripetizioni), la confronta con una combinazione vincente preimpostata, e comunica quanti numeri sono stati indovinati.
 * 
 * INIZIO COMMENTO EMANUELA
 * Prima di tutto devo impostare una combinazione di numeri vincente.
 * Devo,poi, generare una combinazione casuale di 6 numeri compresi tra 1 e 10.
 * Questi numeri, uno ad uno, vanno confrontati con i numeri della combinazione vincente. Quando i numeri corrispondono, allora avremo un valore True; se i numeri non corrispondo, sarà False.
 * Alla fine mi serve stampare solo i numeri con valore true.
 * FINE COMMENTO EMANUELA
 * 
 * Per generare numeri casuali utilizza Math.random():
 * 
 * // Numero casuale da 1 a 10
 * const numeroCasuale = Math.round(Math.random() * 10);
 * 
 * Requisiti minimi
 * 1. Funzione generaCombinazione()
 * 2. Genera e restituisce un array contenente 6 numeri casuali, compresi tra 1 e 10.
 * 3. I numeri non possono ripetersi.
 * 4. Combinazione vincente predefinita
 * 5. Usa un array di 6 numeri tra 1 e 10, ad esempio:
 * 
 * const combinazioneVincente = [3, 7, 1, 9, 5, 6]; X
 * Funzione contaIndovinati(giocata, vincente)
 * 
 * 6. Riceve due array: la giocata casuale e quella vincente.
 * 7. Conta e restituisce il numero di numeri presenti in entrambe le combinazioni (non importa la posizione).
 */

// Array contenente la combinazione vincente (di confronto)
const winningCombination = [3, 7, 1, 9, 5, 6];

// Funzione che mi restituisce i numeri random da 1 a 10
function generatedRandomNumber() {
  //math.round arrotonda all'intero il numero che gli passiamo;
  //math.random genera un numero casuale tra 0 e 1;
  //moltiplico il numero casuale +10 per ottenere un numero tra 0 e 10;
  return Math.round(Math.random() * 10);
}

//funzione che genera un array di 6 numeri che non si ripetono;
function generateCombination() {
  // array vuoto che devo riempire di 6 numeri;
  const numbers = [];
  /** 
   * dovendo generare più di un numero casuale, decido di avvalermi di un ciclo.
   * scelgo while perché non so quanti cicli sono necessari.
   * cosa so?
   * 1. Mi servono 6 numeri, diversi l'uno dall'altro;
   * 2. Il contenitore di numeri è l'array numbers;
   * 3. Devo controllare che il numero generato non sia nell'array;
   */
  while(numbers.length < 6) {
    // number = numero casuale generato a ogni ciclo di while;
    const number = generatedRandomNumber();
    // se non incluso nell'array, lo posso pushare nel nuovo array;
    if (!numbers.includes(number)) {
      // pusho i numeri;
      numbers.push(number);
    }
  }
  // restituisco l'array numbers con la combinazione;
  return numbers;
}


// Funzione che controlla se ogni numero è incluso nella combinazione vincente;
function compareCombination(combination) {
    // Array vuoto dove andranno i numeri che corrispondo ai numeri vincenti;
  const guessedNumbers = [];
  // Con For confronto i numeri della combinazione randomica con quelli vincenti;
  for(let i = 0; i < combination.length; i++) {
    // Se c'è una corrispondenza, il numero viene pushato dentro l'array vuoto che ho creato guessedNumbers;
    if(winningCombination.includes(combination[i])) {
      guessedNumbers.push(combination[i]);
    }
  }
  // restituisco l'array con i numeri che corrispondono;
  return guessedNumbers;
}

console.log(winningCombination);

// Viene generata la combinazione di numeri random
const combination = generateCombination();
console.log(combination);

// Ecco i numeri che corrispondono;
const result = compareCombination(combination);
console.log(result);

// Esercitazione  1 Manni

//Scrivi una funzione in JavaScript che stampi i numeri da 1 a 100, seguendo queste regole:
//Per ogni numero multiplo di 3, stampa "Fizz" al posto del numero.
//Per ogni numero multiplo di 5, stampa "Buzz" al posto del numero.
//Per i numeri che sono multipli sia di 3 che di 5, stampa "FizzBuzz".
//In tutti gli altri casi, stampa semplicemente il numero.

function stamp() {
  for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i);
    } else if (i % 5 === 0) {
      console.log("Buzz", i);
    } else if (i % 3 === 0) {
      console.log("Fizz", i);
    } else {
      console.log(i);
    }
  }
}

//stamp();

// Esercitazione  2 Manni

// Scrivi una funzione che riceve una stringa e restituisce quante vocali contiene

function contaVocali(string) {
  let arrayString = string.split("");
  console.log(arrayString);
  //  ------ CONTINUA ESERCIZIO ------
}

contaVocali("Esercitazione");