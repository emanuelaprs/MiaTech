
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


// Esercizio Gestione degli errori in una catena di promesse 

function promessaCasuale() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.random();
            console.log("Numero generato:", numero);

            if (numero >= 0.5) {
                resolve("Operazione riuscita");
            } else {
                reject("Errore!");
            }
        }, 1000);
    });
}

promessaCasuale()
  .then((risultato) => {
    console.log("Fase 1 completata:", risultato);
    return promessaCasuale();
  })
  .then((risultato) => {
    console.log("Fase 2 completata:", risultato);
    return promessaCasuale();
  })
  .then((risultato) => {
    console.log("Fase 3 completata:", risultato);
  })
  .catch((errore) => {
    console.error("Errore catturato nella catena:", errore);
  })
  .finally(() => {
    console.log("Catena di promesse terminata.");
  });