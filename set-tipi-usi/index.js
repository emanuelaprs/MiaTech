
// Esercizio Utilizzare setTimeout

function stampaMessaggio() {
    console.log("Messaggio visualizzato dopo 3 secondi");
}

setTimeout(stampaMessaggio, 3000);

// Esercizio Utilizzare drtInterval

function stampaNuovoMessaggio() {
    console.log("Messaggio visualizzato ogni 2 secondi");
}

setInterval(stampaNuovoMessaggio, 2000);

// Esercizio interrompere setInterval con clearInterval

function stampaTerzoMessaggio() {
    console.log("Messaggio visualizzato ogni secondo");
}

const intervallo = setInterval(stampaTerzoMessaggio, 1000);

setTimeout(function () {
    clearInterval(intervallo);
    console.log("Stop intervallo dopo 5 secondi.");
}, 5000);
