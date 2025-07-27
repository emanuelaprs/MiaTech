
// Esercizio Stringa semplice con template literals

const nome = "Calogero";
const cognome = "Acquapazza";

const nomeCompleto = `${nome} ${cognome}`;

console.log(nomeCompleto);

// Esercizio Stringa multilinea con template literals

const nome1 = "Valentina";
const cognome1 = "Rossi";
const età = 35;
const città = "Milano";

const persona = `
Nome: ${nome1}
Cognome: ${cognome1}
Età: ${età}
Città: ${città}
`;

console.log(persona);


// Esercizio Funzione e template literals

function funzionePersona(persona) {
    return `Ciao, mi chiamo ${persona.nome2} ${persona.cognome2} e ho ${persona.età2} anni.`;
}

const oggettoEsempio = {
    nome2: "Esmeralda",
    cognome2: "Nanni",
    età2: 25
}

const stringaFormattata = funzionePersona(oggettoEsempio);

console.log(stringaFormattata);