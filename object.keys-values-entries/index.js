
// Esercizio Object.keys()

let student = {
    name: "Andrea",
    age: 18,
    grade: "4B",
    school: "Liceo Scientifico",
}

let key = Object.keys(student);

console.log(key);

// Esercizio Object.values()

let value = Object.values(student);

console.log(value);

// Esercizio Object.entries()

let entry = Object.entries(student);

console.log(entry);

for (let [key, value] of entry) {
    console.log(`${key}: ${value}`)
}