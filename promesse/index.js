// Esercizio Creare una promessa semplice

function promessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("La promessa si è risolta dopo 2 secondi");
        }, 2000);
    });
}

promessa().then((messaggio) => {
    console.log(messaggio);
})

// Esercizio Gestione di una promessa con catch

function promessa1(condizione) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condizione) {
                resolve("La promessa si è risolta dopo 2 secondi");
            } else {
                reject("Errore: promessa riufiutata")
            }
        }, 2000);
    });
}

promessa1(false)
    .then((messaggio) => {
    console.log(messaggio);
})
    .catch((errore) => {
    console.error(errore);
});

// Esercizio Promessa con finally

function promessa2(esito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (esito) {
                resolve("Operazione riuscita");
            } else {
                reject("Operazione fallita");
            } 
        }, 1000);
    })
    .then(risultato => {
        console.log("Risposta", risultato);
    })
    .catch(errore => {
        console.error("Errore", errore);
    })
    .finally(() => {
    console.log("Blocco finally eseguito: questa azione viene eseguita sempre");
  });
}

promessa2(true);

promessa2(false);

// Esercizio Catena di promesse semplici

function nuovaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}

nuovaPromessa()
.then(numero => {
    console.log(`Valore iniziale: ${numero}`);
    return numero * 2;
})
.then(risultatoMoltiplicazione => {
    console.log(`Dopo moltiplicazione: ${risultatoMoltiplicazione}`);
    return risultatoMoltiplicazione + 3;
})
.then(risultatoFinale => {
        console.log(`Risultato finale: ${risultatoFinale}`);
    })

// Esercizio Catena di promesse con condizioni

function altraPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(4);
        }, 1000);
    });
}

altraPromessa() 
.then(numero => {
    console.log(`Numero ricevuto: ${numero}`);
    return numero;
})
 .then(numero => {
    if (numero % 2 === 0) {
      return numero * 2; 
    } else {
      return numero + 1;
    }
  })
  .then(risultato => {
    console.log(`Risultato finale: ${risultato}`);
    return risultato;
  })

  // Esercizio Catena di promesse con gestione degli errori --- FINIRE ----

  function promessaCasuale() {
    return new Promise((resolve, reject) => {
        const valoreCasuale = Math.random();
        if (valoreCasuale > 0.5) {
            resolve(`✅ Successo: ${valoreCasuale.toFixed(2)}`);
        } else {
            reject(`✅ Successo: ${valoreCasuale.toFixed(2)}`);
        }
  });
}

promessaCasuale()
.then(risultato => {
    console.log(risultato)
})