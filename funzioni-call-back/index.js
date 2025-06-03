function conCallback(callback) {
    const operazione = 2 + 2;
    console.log("Risultato somma:", operazione);
    callback();
}
 function chiamoCallback () {
    console.log("Callback esaguita");
 }

 conCallback(chiamoCallback);
