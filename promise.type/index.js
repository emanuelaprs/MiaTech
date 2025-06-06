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

// Esercizio Utilizzare Promise.allSettled 

function promessaRisolta1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promessa 1 risolta');
        }, 1000);
    });
}

function promessaRisolta2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promessa 2 risolta');
        }, 2000);
    });
}

function promessaRigettata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promessa rifiutata');
        }, 1500);
    });
}

Promise.allSettled([promessaRisolta1(), promessaRisolta2(),promessaRigettata()])
.then(risultati => {
    risultati.forEach((result, index) => {
         if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} risolta con valore:`, result.value);
      } else {
        console.log(`Promise ${index + 1} rifiutata con motivo:`, result.reason);
      }
    });
});