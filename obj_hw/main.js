// 1. Створіть функцію яка клонує об'єкти
let obj = {
    name: "Ivan",
    age: "23"
};

function copyObj(obj) {
    return Object.assign({}, obj);
}

let newObj = copyObj(obj);
console.log(newObj); // {name:"Ivan",age:"23"};

// 2. Створіть функцію яка порівнює два об'єкти
let obj1 = {name: "Khrystyna"};
let obj2 = obj1;
let obj3 = {name: "Alina"};

function compareObj(obj1, obj2) {
    if(obj1 === obj2 ){
        return true;
    }else {
       return false;
    }
}
console.log(compareObj(obj1,obj2)); // true
console.log(compareObj(obj1,obj3)); // false

// 3. Створіть об'єкт, який містить список товарів в інтернет-магазині. Кожен товар повинен мати назву, ціну та кількість
// на складі. Реалізуйте функцію, яка приймає назву товару та кількість, і повертає загальну вартість замовлення.

const products = [{
    name: 'Banana',
    price: 50,
    inStock: 300,
},{
    name: 'Apple',
    price: 20,
    inStock: 100,
},{
    name: 'Lemon',
    price: 25,
    inStock: 400,
},{
    name: 'Pineapple',
        price: 80,
        inStock: 200,
},
]

function totalPrice(name, n) {
   let product = products.find((product)=>product.name === name);
   if (!product){
       return "This product is not available.";
   }else if(n > product.inStock){
       return "There is not enough product in stock!"
   }else {
       return product.price * n;
   }
}

console.log(totalPrice('Apple', 2)); //40
console.log(totalPrice('Lemon', 450)); //There is not enough product in stock!
console.log(totalPrice('Kiwi', 2)); //This product is not available.

// 4. Створити функцію-конструктор "Книга" з властивостями "назва", "автор" та "рік видання". Створити декілька об'єктів
// за допомогою цієї функції та вивести їх властивості у консоль.
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;

    return {
        name,
        author,
        year,
    }
}

let book1 = new Book("Never Eat Alone", "Keith Ferrazzi", 2014);
console.log(book1);

let book2 = new Book("Emotional intelligence", "Daniel Coleman", 2006);
console.log(book2);

// 5. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.
function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return n > 2;
}

console.log(isPrime(5)); //true
console.log(isPrime(12)); //false

// 6. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.
function factorial(number) {
    if (number < 0) {
        return "The factorial of a negative number is not defined!";
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(5)); // 120
console.log(factorial(-2)); // The factorial of a negative number is not defined!

// 7. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом
function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false

// 8. Напишіть функцію, яка приймає на вхід рядок та перетворює його в рядок з верхнім регістром.
function toUpperCase(string) {
    return string.toUpperCase();
}

console.log(toUpperCase('hello world!')); //HELLO WORLD!
console.log(toUpperCase('Hello 2023!')); //HELLO 2023!

// 9. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.
const arr = ["hello", "world", "hello", "have", "hello", "a", "good", "day!"];

function uniqueValues(array) {
    const uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueValues.indexOf(array[i]) === -1) {
            uniqueValues.push(array[i]);
        }
    }
    return uniqueValues;
}

console.log(uniqueValues(arr)); //['hello', 'world', 'have', 'a', 'good', 'day!']

// 10. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".
const date = new Date();

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours <= 12) {
        if (minutes < 10) {
            return `${hours}:0${minutes} AM`;
        } else {
            return `${hours}:${minutes} AM`;
        }
    } else {
        const formattedHours = hours % 12 || 12;
        if (minutes < 10) {
            return `${formattedHours}:0${minutes} PM`;
        } else {
            return `${formattedHours}:${minutes} PM`;
        }
    }
}

console.log(formatTime(date));
