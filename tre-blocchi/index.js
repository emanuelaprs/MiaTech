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

