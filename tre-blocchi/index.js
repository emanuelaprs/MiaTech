// Esercizio Gestione di un errore semplice

function divisione(numeratore, denominatore) {
    try{
        if (denominatore === 0) {
            throw new Error("Errore: divisione non consentita");
        }
        let risultato = numeratore / denominatore;
        console.log(risultato);
    } catch (errore) {
        console.error(errore.message);
    }
}

// Esercizio Gestione di più tipi di errori

function operazioneStringa (input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('Errore: il valore non è una stringa');
        }
        const risultato = input.toUpperCase();
        console.log("Errore di tipo", risultato);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error(error.message);
        } else {
            console.error("Errore generico", error.message);
        }
    }
}