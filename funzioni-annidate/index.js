function outerFunction(x) {
    function innerFunction (y) {
        return x + y;
    }
    return innerFunction;
}


// esercizio persistenza delle variabili usando le funzioni annidate sopra

function outerFunction(x, initialValue) {
    let result = initialValue;
    function innerFunction (y) {
        return y + result;
    }
    return innerFunction;
    }