const person = {
    nome: "Giovanni",
    cognome: "Verdi",
    età: 40,
    città: "Perugia"
};

const {nome, età, ...resto} = person;

console.log(nome);
console.log(età);
console.log(resto);
