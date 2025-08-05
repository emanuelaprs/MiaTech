
// Esercizio Gestione di un errore semplice

function divisione(numeratore, denominatore) {
    try {
        if (denominatore === 0) {
            throw new Error("ERRORE!");
        }
        let risultato = numeratore / denominatore;
        console.log(risultato);
    } catch (errore) {
        console.error(errore.message);
    }
}

divisione(10, 2);

divisione (5, 0);

// Esercizio Gestione di più tipi di errori

function lunghezzaStringa(stringa) {
    try {
        if (typeof stringa !== 'string') {
            throw new TypeError ("Stringa obbligatoria!");
        }
        
        let lunghezza = stringa.length;

        return lunghezza;
    } catch (errore) {
        if (errore instanceof TypeError) {
            console.error("Errore-tipo:", errore.message);
        } else {
            console.error("Errore generico:", errore.message);
        }
    }
}

console.log(lunghezzaStringa("Esercizio fatto"));

// Esercizio Uso di finally per eseguire codice indipendentemente dal risultato

try {
    let risultato = 10 / 0;
    if (risultato === Infinity) {
        throw new Error ("Divisione per zero non consentita!");
    }

    console.log("Risultato:", risultato);
} catch (errore) {
    console.log("Errore catturato:", errore.message);
} finally {
    console.log("Operazione completata.");
}