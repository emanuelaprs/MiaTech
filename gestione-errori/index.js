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