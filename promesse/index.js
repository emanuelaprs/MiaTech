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
