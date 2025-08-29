// Exercise 1: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  { id: 4, name: 'Monitor', price: 350, inStock: false },
  { id: 5, name: 'Headphones', price: 85, inStock: true },
];

// Svolgimento Esercizio 1  RIVEDERE!!-------------

const present = products
.filter(s => s.inStock)
.map(s => s.name.toUpperCase());

console.log(present);


// Exercise 2: Calculate the total value of all items in the shopping cart
// considering quantity and applying a 10% discount if total is over 100

const shoppingCart = [
  { item: 'Book', price: 15, quantity: 2 },
  { item: 'Pen', price: 2, quantity: 10 },
  { item: 'Notebook', price: 8, quantity: 3 },
  { item: 'Backpack', price: 45, quantity: 1 },
];

// Svolgimento Esercizio 2

let totalCart = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
}, 0);

if (totalCart > 100) {
    totalCart = totalCart - totalCart * 0.1;
}

console.log(totalCart);

// Exercise 3: Find the first user who is both active and has admin role
// Then check if there's at least one user from Italy

const users = [
  { id: 1, name: 'John', active: true, role: 'user', country: 'USA' },
  { id: 2, name: 'Maria', active: false, role: 'admin', country: 'Spain' },
  { id: 3, name: 'Luigi', active: true, role: 'admin', country: 'Italy' },
  { id: 4, name: 'Anna', active: true, role: 'user', country: 'Germany' },
];

// Svolgimento Esercizio 3

const activeUser = users.find((users) => {
    return users.active && users.role === "admin";
});

console.log(activeUser);

const italianStudents = users.some(user => user.country === "Italy");

console.log(italianStudents);


// Exercise 4: Sort students by grade (descending) and return the top 3 students

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 95 },
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 90 },
];


// Svolgimento Esercizio 4

const decrescentStudent = students.sort((a,b) => {
    return b.grade - a.grade;
})
 console.log(decrescentStudent);

const topStudents = students.filter((item) => {
    return item.grade >= 90;
})

console.log(topStudents);

const summitStudents = students.slice(0, 3);

console.log(summitStudents);

// Exercise 5: Extract all tags from all posts into a single array,
// removing duplicates and sorting alphabetically


const blogPosts = [
  { title: 'Post 1', tags: ['javascript', 'web', 'frontend'] },
  { title: 'Post 2', tags: ['nodejs', 'backend', 'javascript'] },
  { title: 'Post 3', tags: ['react', 'frontend', 'web'] },
  { title: 'Post 4', tags: ['mongodb', 'database', 'backend'] },
];

// Svolgimento Esercizio 5   

const newArrayTags = blogPosts.flatMap(post => post.tags);

console.log(newArrayTags);

const removedTags = [...new Set(newArrayTags)];

console.log(removedTags);

const alphaOrder = removedTags.sort(); 

console.log(alphaOrder);



// Exercise 6: Check if all temperatures are below freezing point (0°C)
// Then filter only the days with negative temperatures

const temperatures = [
  { day: 'Monday', temp: -2 },
  { day: 'Tuesday', temp: -5 },
  { day: 'Wednesday', temp: 1 },
  { day: 'Thursday', temp: -3 },
  { day: 'Friday', temp: 0 },
];

// Svolgimento Esercizio 6

// Uso some

// const belowZero = temperatures.some(below => below.temp < 0);

// console.log(belowZero)

// -- Uso every --

const underZero = temperatures.every(item => item.temp < 0 );

console.log(underZero);

const negativeDays = temperatures.filter(item => item.temp < 0);

console.log(negativeDays);

// Uso anche every al posto di some: è più corretto: si assicura che tutti gli elementi rispettino la condizione
// Every verifica se tutti gli elementi di un array soddisfano una condizione specificata tramite una funzione, restituendo un valore booleano
// Se la funzione restituisce true per tutti gli elementi: every restituisce true.
// Se anche un solo elemento non supera la condizione (funzione restituisce false): esecuzione si ferma e il metodo restituisce false.



// Exercise 7: Create a formatted string of email addresses separated by semicolons
// Format: "firstName.lastName@company.com"

const employees = [
  { firstName: 'John', lastName: 'Doe', department: 'IT' },
  { firstName: 'Jane', lastName: 'Smith', department: 'HR' },
  { firstName: 'Bob', lastName: 'Johnson', department: 'Sales' },
  { firstName: 'Alice', lastName: 'Brown', department: 'IT' },
];

const company = 'techcorp';

// Svolgimento esercizio 7

// Uso una concatenazione classica -- DEVO PROVARE LA VERSIONE COMPATTA

const emailList = employees.map(employee => employee.firstName + "." + employee.lastName + "@company.com");

console.log(emailList);

const emailString = emailList.join(";");

// Dentro le parentesi di .join c'è il separetor

console.log(emailString);

// Exercise 8: Group transactions by category and calculate total spent per category

const transactions = [
  { id: 1, category: 'Food', amount: 25 },
  { id: 2, category: 'Transport', amount: 15 },
  { id: 3, category: 'Food', amount: 30 },
  { id: 4, category: 'Entertainment', amount: 50 },
  { id: 5, category: 'Transport', amount: 20 },
  { id: 6, category: 'Food', amount: 15 },
];

// Svolgimento Esercizio 8
// Serve reduce, ma come si usa??! DA FARE ----------------------

const categories = transactions.reduce((acc, t) => {
  if (acc.hasOwnProperty(t.category)) {
    return acc[t.category] += t.amount;
  }
  return acc[t.category] = t.amount;
  // indice 0 --> {} --> {Food: 25}
  // indice 1 --> {Food: 25} -->{Food: 25, Transport:15}
  // indice 2 --> {Food: 25, Trasport:15} --> {Food: 55,  Transport:15}
  // indice 3 --> {Food: 55, Trasport:15 }
  // indice 4 -->
}, {}); 





// Exercise 9: Calculate the average age of users who have verified email

const userData = [
  { name: 'Tom', age: 25, emailVerified: true },
  { name: 'Lisa', age: 30, emailVerified: false },
  { name: 'Mike', age: 22, emailVerified: true },
  { name: 'Sarah', age: 28, emailVerified: true },
  { name: 'James', age: 35, emailVerified: false },
];

// Svolgimento Esercizio 9

const verifiedUsers = userData.filter(item => item.emailVerified);

console.log(verifiedUsers);

const totalAge = verifiedUsers.reduce((acc, veriUser) => acc + veriUser.age, 0);

console.log(totalAge);

const averageAge = totalAge / verifiedUsers.length;

console.log(averageAge);


// Exercise 10: Find the index of the task with id 3 and remove it from the array
// Then add a new task at that position

const tasks = [
  { id: 1, task: 'Study JavaScript', completed: true },
  { id: 2, task: 'Practice coding', completed: false },
  { id: 3, task: 'Read documentation', completed: false },
  { id: 4, task: 'Build project', completed: false },
];

const newTask = { id: 5, task: 'Review code', completed: false };

// Svolgimento Esercizio 10

const index = tasks.findIndex((item) => item.id === 3);

console.log(index);

tasks.splice(index, 1);

tasks.splice(index, 0, newTask);

console.log(tasks);

// Codice senza findIndex - più compatto!
// tasks.splice(2, 1, newTask);
// console.log(tasks)


// Exercise 11: Double the scores of all students who passed (score >= 60)
// and return only those with final score above 100

const examScores = [
  { student: 'Alex', score: 45 },
  { student: 'Beth', score: 65 },
  { student: 'Carl', score: 55 },
  { student: 'Dana', score: 70 },
  { student: 'Eric', score: 80 },
];

// Svolgimento Esercizio 11 ---- FARE ----

const passedStudents = examScores.filter(student => student.score >= 60);

console.log(passedStudents);

//const doubledScores = passedStudents.map(student => arudent.score * 2);

//console.log(doubledScores);

// Exercise 12: Flatten the nested array structure and filter out all numbers less than 5

const nestedNumbers = [
  [1, 2, [3, 4]],
  [5, [6, [7, 8]]],
  [9, 10],
  [[11, 12], 13],
];

// Svolgimento Esercizio 12 -----FARE ------



// Exercise 13: Sort books first by year (ascending), then by title (alphabetically)

const library = [
  { title: 'The Great Gatsby', author: 'Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Lee', year: 1960 },
  { title: '1984', author: 'Orwell', year: 1949 },
  { title: 'Animal Farm', author: 'Orwell', year: 1945 },
  { title: 'Brave New World', author: 'Huxley', year: 1932 },
  { title: 'Fahrenheit 451', author: 'Bradbury', year: 1953 },
];

// Svolgimento Esercizio 13 RIVEDEREEE

const booksForYear = library.sort((a, b) => a.year - b.year);

console.log(booksForYear);

// NON CAPISCO LA SECONDA PARTE

//const alphaBook = library.sort((a, b) => a.title - b.title);

//console.log(alphaBook);


// Exercise 14: Filter products that belong to any of the selected categories

const inventory = [
  { name: 'Shirt', category: 'Clothing', price: 30 },
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 80 },
  { name: 'Phone', category: 'Electronics', price: 600 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
  { name: 'Watch', category: 'Accessories', price: 200 },
];

const selectedCategories = ['Electronics', 'Clothing'];

// Svolgimento Exercise 14

// Uso del metodo filter per ottenere un nuovo array con solo i prodotti che appartengono ad una delle categorie selezionate
const filteredProducts = inventory.filter(item => selectedCategories.includes(item.category));

console.log(filteredProducts);

// includes verifica se item.category è presente in selectedCategories

// Exercise 15: Convert the array of key-value pairs into an object

const keyValuePairs = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York'],
  ['profession', 'Developer'],
  ['hobby', 'Photography'],
];

// Svolgimento Esercizio 15 

const person = Object.fromEntries(keyValuePairs);

console.log(person);

// Exercise 16: Add a 'hasDiscount' property to each product
// Set it to true if any of its tags includes 'sale' or 'promo'

const catalog = [
  { id: 1, name: 'Tablet', tags: ['electronics', 'sale'] },
  { id: 2, name: 'Chair', tags: ['furniture', 'office'] },
  { id: 3, name: 'Desk', tags: ['furniture', 'promo', 'office'] },
  { id: 4, name: 'Lamp', tags: ['lighting', 'home'] },
];


// Svolgimento Esercizio 16 

catalog.forEach(item => {
  item.hasDiscount = item.tags.includes('sale') || item.tags.includes('promo');
});

console.log(catalog);


// Exercise 17: Extract emails of active users older than 25 who joined after 2020
// Return them in lowercase

const accounts = [
  { email: 'John@EXAMPLE.com', age: 28, active: true, joinYear: 2021 },
  { email: 'MARY@example.COM', age: 24, active: true, joinYear: 2022 },
  { email: 'Bob@EXAMPLE.com', age: 30, active: false, joinYear: 2021 },
  { email: 'alice@Example.COM', age: 26, active: true, joinYear: 2019 },
  { email: 'TOM@example.com', age: 27, active: true, joinYear: 2023 },
];

// Svolgimento Esercizio 17 

const filteredUsers = accounts.filter(account => account.active === true && account.age > 25 && account.joinYear > 2020);

const emailAccounts = filteredUsers.map(account => account.email.toLowerCase());

console.log(emailAccounts);


// Exercise 18: Find the first month where all weeks had sales above 1000
// Return the month index and verify if all subsequent months also meet this criteria

const monthlySales = [
  { month: 'Jan', weeks: [800, 1200, 900, 1100] },
  { month: 'Feb', weeks: [1100, 1200, 1500, 1300] },
  { month: 'Mar', weeks: [1200, 1100, 1400, 1300] },
  { month: 'Apr', weeks: [900, 1000, 1100, 800] },
  { month: 'May', weeks: [1100, 1200, 1300, 1400] },
];


// Svolgimento Esercizio 18

const firstMonth = monthlySales.find(item => item.weeks.every (week => week > 1000));
console.log(firstMonth);

const monthIndex = monthlySales.findIndex(item => item === firstMonth);

console.log(monthIndex);

const verifiedMonth = monthlySales.filter(item => item.weeks.every(week => week > 1000));

console.log(verifiedMonth);


// Exercise 19: Calculate the total price for each order
// Apply discounts based on quantity: 5-9 items: 5%, 10+ items: 10%
// Return array of objects with orderId and finalPrice

const orders = [
  {
    orderId: 'A001',
    items: [
      { product: 'Widget', price: 10, quantity: 3 },
      { product: 'Gadget', price: 20, quantity: 2 },
    ],
  },
  {
    orderId: 'A002',
    items: [
      { product: 'Widget', price: 10, quantity: 5 },
      { product: 'Tool', price: 15, quantity: 6 },
    ],
  },
  {
    orderId: 'A003',
    items: [
      { product: 'Gadget', price: 20, quantity: 8 },
      { product: 'Tool', price: 15, quantity: 4 },
    ],
  },
];

// Svolgimento Esercizio 19

// Exercise 20: Process the log entries to find:
// 1. All unique user IDs who had errors
// 2. The most common action type
// 3. Average response time for successful requests (status 200)
// 4. List of actions sorted by timestamp (newest first)

const logs = [
  {
    userId: 101,
    action: 'login',
    status: 200,
    responseTime: 120,
    timestamp: '2024-01-10T10:00:00',
  },
  {
    userId: 102,
    action: 'upload',
    status: 500,
    responseTime: 450,
    timestamp: '2024-01-10T10:05:00',
  },
  {
    userId: 101,
    action: 'download',
    status: 200,
    responseTime: 200,
    timestamp: '2024-01-10T10:10:00',
  },
  {
    userId: 103,
    action: 'login',
    status: 200,
    responseTime: 100,
    timestamp: '2024-01-10T10:15:00',
  },
  {
    userId: 102,
    action: 'login',
    status: 401,
    responseTime: 80,
    timestamp: '2024-01-10T10:20:00',
  },
  {
    userId: 104,
    action: 'upload',
    status: 200,
    responseTime: 300,
    timestamp: '2024-01-10T10:25:00',
  },
  {
    userId: 101,
    action: 'logout',
    status: 200,
    responseTime: 50,
    timestamp: '2024-01-10T10:30:00',
  },
  {
    userId: 103,
    action: 'download',
    status: 404,
    responseTime: 150,
    timestamp: '2024-01-10T10:35:00',
  },
];
