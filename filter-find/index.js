
let students = [
    {name: "Giorgio", grade: 75},
    {name: "Amelia", grade: 63},
    {name: "Emma", grade: 58 },
];

let passedStudents =  students.filter((item) => {
    return item.grade >=60;
});

console.log(passedStudents);

let lastStudents = students.find((item) => {
    return item.grade < 60;
});

console.log(lastStudents);