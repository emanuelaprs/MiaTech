const person = {
    nome: "Giorgio",
    età: 30,
};

const newProperty = {
    ...person,
    cittadinanza: "italiana"
};

console.log(person);
console.log(newProperty);