// Esercizio Funzione di base con callback

function conCallback(callback) {
    const operazione = 2 + 2;
    console.log("Risultato somma:", operazione);
    callback();
}
 function chiamoCallback () {
    console.log("Callback esaguita");
 }

 conCallback(chiamoCallback);

 // Esercizio Funzione con callback e passaggio di parametri

 function eseguiOperazione(valore, callback) {
    const risultato = valore * 2;
    callback(risultato);
 }

 function mostraRisultato(risultato) {
    console.log("Ecco il risultato:", risultato);
 }
 
 eseguiOperazione(5, mostraRisultato);

  // Esercizio Callback annidati

  function somma (a, b, callback) {
    const risultato = a + b;
    console.log(`Somma: ${a} + ${b} = ${risultato}`);
    callback(risultato);
  }

  function moltiplica (numero, callback) {
    const risultato = numero * 2;
    console.log(`Moltiplicazione: ${numero} * 2 = ${risultato}`);
    callback(risultato);
  }

  somma(3, 4, function(sommaRisultato) {
  moltiplica(sommaRisultato, function(moltiplicaRisultato) {
    console.log(`Risultato finale: ${moltiplicaRisultato}`);
  });
});