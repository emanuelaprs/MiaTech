// Esercizio Utilizzare Promise.all

function promessaVeloce() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa veloce (500)");
        }, 500);
    });
}

function promessaLenta() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa lenta (300)");
        }, 300);
    });
}

Promise.all([promessaVeloce(), promessaLenta()])
.then((risultati) => {
    console.log("Entrambe le promesse sono risolte:");
    console.log(risultati[0]);
    console.log(risultati[1]);
})

// Esercizio Utilizzare Promise.race

function promessaSvelta() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promessa svelta completata');
        }, 1000);
    });
}

function promessaCalma() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promessa calma completata');
        }, 2000);
    });
}

Promise.race([promessaSvelta(), promessaCalma()])
.then((risultato) => {
    console.log(risultato);
})
.catch((errore) => {
    console.error(errore);
});