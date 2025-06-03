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