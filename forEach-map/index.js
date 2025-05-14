const numbers = [1, 2, 3, 4, 5];

function double(array) {
    array.forEach((item) => {
        console.log(item * 2);
    })
}

console.log(numbers);
double(numbers);

function squared(array) {
    return array.map((item) => {
        return item ** 2;
    })
}

console.log(numbers);
squared(numbers);