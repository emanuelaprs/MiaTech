// Esercizio Utilizzare setTimeout

function mostraMessaggio() {
    console.log("Il messaggio compare dopo tre secondi");
}

setTimeout(mostraMessaggio, 3000);

// Esercizio Utilizzare setInterval

function stampaMessaggio() {
    console.log("Il messaggio compare ogni due secondi");
}

setInterval(stampaMessaggio, 2000);

// Esercizio interrompere setInterval con clearInterval

function riprodurreMessaggio() {
    console.log("Il messaggio compare ogni secondo");
}

const intervallo = setInterval(riprodurreMessaggio, 1000);

setTimeout(() => {
    clearInterval(intervallo);
    console.log("Intervallo si interrompe dopo cinque secondi");
}, 5000);

