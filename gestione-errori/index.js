// Esercizio Gestione degli errori con catch

function promessaRifiutata() {
    return new Promise((resolve, reject) => {
        reject(new Error('Errore: promessa rifiutata'));
    });
}

promessaRifiutata()
.catch(error => {
    console.log(error.message);
})

// Esercizio Gestione degli errori con then e catch

function promessaBool(boolValue) {
    return new Promise((resolve, reject) => {
        if (boolValue) {
            resolve ('Promessa risolta!');
        } else {
            reject('Promessa rifiutata: errore!');
        }
    });
}

 promessaBool(true)
 .then(result => console.log('Successo:', result))
 .catch(error => console.log('Errore:', error));

 promessaBool(false)
 .then(result => console.log('Successo:', result))
  .catch(error => console.log('Errore:', error));

  // Esercizio Gestione degli errori in una catena di promesse ---FINIRE--

  function PromessaCasuale() {
    return new Promise((resolve, reject) => {

    })
  }