function funzionePersona(persona) {
    return `Nome: ${persona.nome}, Età: ${persona.età}, Città: ${persona.città}`;
}

const chiamaPersona = {
    nome: "Giorgia",
    età: 32,
    città: "Palermo"
};

const stringaPersona = funzionePersona(chiamaPersona);
console.log(stringaPersona);