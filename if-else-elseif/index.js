let score = parseInt(prompt("Inserisci il tuo voto"));

if (score >= 90 && score <= 100) {
    console.log("voto ottimo");
} else if (score >= 70 && score <= 89) {
    console.log("voto buono");
} else if (score >= 60 && score <= 69) {
    console.log("voto sufficiente");
} else if (score <= 59) {
    console.log("voto insufficiente");
}