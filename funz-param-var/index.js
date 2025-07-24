
// Esercizio Funzione con parametri variabili

function somma(...numeri) {
    return numeri.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}


console.log(somma(1, 2, 3));