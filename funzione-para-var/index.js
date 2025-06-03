
function somma(...numeri) {
    let totale = 0;
    for (let numero of numeri) {
        totale += numero;
    }
    return totale;
}

console.log(somma(2, 2));
console.log(somma(2, 2, 4));
console.log(somma(2, 2, 4, 1));
