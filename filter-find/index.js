const students = [
    {name: "Greta", grade: 78 },
    {name: "Sonia", grade: 62 },
    {name: "Luca", grade: 56 }
];

const passedStudens = students.filter((item) => {
    return item.grade >= 60;
})

console.log(passedStudens);

const lastStudent = students.find ((item) => {
    return item.grade < 60;
})

console.log(lastStudent);
