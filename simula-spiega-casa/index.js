// Promise e Fetch

// Contesto -> Codice asincrono

// Cosa è una promise? -> "Ti prometto che ti darò un risultato" -> il risultato = successo o fallimento del codice async.

/**
 * Tre stati di una promise:
 * - Pending
 * - Fulfilled
 * - Rejected
 * 
*/

/**
 * Gestione dei risultati
 * - Metodo .then
 * - Metodo .catch
 * 
*/

function simulatedCall() {
    return new Promise((resolve, reject) => {
        const wait = 5000;
        setTimeout(() => {
            const random = Math.random();
            console.log(random);
            if (random > 0.3) {
                resolve("Risposta ricevuta dopo" + wait + "ms");
            } else {
                reject ("Errore!");
            }
        }, wait);
    });  
}

simulatedCall()
    .then(response => {
        console.log("Successo", response);
    })
    .catch(error => {
        console.error("Errore", error);
    });

// Cosa è Fetch? -> Richieste http in modo asincrono 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json()) // trasforma la risposta in JSON
.then(data => { // lavora con i dati ricevuti
    const evenIds = data.filter(user => user.id % 2 === 0);
    console.log("Utenti con ID pari:", evenIds);
})
.catch(error => console.error(error)); // gestisce errori