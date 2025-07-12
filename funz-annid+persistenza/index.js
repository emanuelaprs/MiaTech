
// Esercizio Funzioni annidate

function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

// Esercizio Persistenza delle variabili locali

function outerFunction(x, initialValue) {
    let result = initialValue;
     function innerFunction(y) {
        return y + result;
    }
    return innerFunction;
}