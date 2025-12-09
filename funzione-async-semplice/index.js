// ESERCIZIO - funzione asincrona semplice

function promessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa si risolve dopo due secondi");
        }, 2000);
    });
}

async function aspettaPromessa() {
    const messaggio = await promessa();
    console.log(messaggio)
}

aspettaPromessa()

// ESERCIZIO - Gestione degli errori con try e catch

async function expectedPromise(boolean) {
    try {
        const response = await new Promise((resolve, reject) => {
            if (boolean) {
                resolve("Promessa risolta!");
            } else {
                reject("Promessa rifiutata!");
            }
        });

        console.log(response);
    } catch(error) {
        console.error("Errore catturato", error);
    }
}

expectedPromise(true);
expectedPromise(false);