const peopleList = '[{"nome": "Elisa", "età": 32}, {"nome": "Edoardo", "età": 33}, {"nome": "Giuseppe", "età": 3}]';

const people = JSON.parse(peopleList);

people.push({nome: "Anna", età: 1});

const newPeopleList = JSON.stringify(people);

console.log(newPeopleList);
