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