/**
 * Esercizio 1 javascript
 */

function createGreeting (saluto, nome, titolo) {
    var classico = saluto + nome + titolo;
    var template = `Buongiorno, ${saluto} Ugo, ${nome} Ragioniere, ${titolo}`;
    return [classico, template];
}

console.log(createGreeting);

    
