const person = {
    name: "Ugo",
    age: 45,
    job: "Ragioniere"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
    }