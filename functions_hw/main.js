//task 2.1
alert("I’m JavaScript!");

//task 2.4
let admin;
let name;
name = "John";
admin = name;
alert(admin);
let planetEarth = "Earth";
let userName = "John";

//task 2.5
let name = "Ilya";

alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//task 2.6
result = prompt('What is your name?');
alert(result);

// task 2.8
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

let a = 2;
let x = 1 + (a *= 2);
a = 2;
x = 5;

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //"9px"
"$" + 4 + 5; //"$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "-9 5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; //-2

// task 2.9
5 > 4; // true
"apple" > "pineapple"; //false
"2" > "12"; //false
undefined == null; // true
undefined === null; //false
null == "\n0\n"; // false
null === +"\n0\n"; // false

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); //3

// task 2.10
let res = prompt("What's the “official” name of JavaScript?")

if (res === "ECMAScript") {
    alert("Right!")
}else {
    alert("You don't know? “ECMAScript”!")
}

let result = prompt("Please, write a number!")
if (result >= 1){
    alert(1)
}else if(result <= 0){
    alert(-1)
}else if(result === 0){
    alert(0)
}else {
    alert("Write a number!")
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : '';


// task 2.11
alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); // 1, undefined
alert( null || 2 && 3 || 4 ); // 3

if (age >= 14 && age <= 90){};
if (age <= 14 || age >= 90){};
if (!age >= 14 && !age <= 90){};

if (-1 || 0) alert( 'first' ); //-1
if (-1 && 0) alert( 'second' ); //0
if (null || -1 && 1) alert( 'third' ); //1

let result = prompt("Who's there?");

if (result === "Admin") {

    let res = prompt("Password?");

    if (res === "") {
        alert("Canceled");
    } else if (res === "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password");
    }
} else if (result === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}

// task 2.12
let i = 3;
while (i) {alert( i-- );} //1

let i = 0;
while (++i < 5) alert( i ); //4

let i = 0;
while (i++ < 5) alert( i ); //5

for (let i = 0; i < 5; i++) alert( i ); //4
for (let i = 0; i < 5; ++i) alert( i ); //4
for (let i =2; i<= 10; ++i) (i % 2 === 0) ? alert(i) : '';
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
let n = 10;
for (let i = 2; i <= n; i++){}

// task 2.13
if (browser === 'Edge' ) {
        alert( "You've got the Edge!" );
}else if (browser ==='Chrome' ||'Firefox'||'Safari'||'Opera'){
    alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );
}
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// task 2.15
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
   return (age > 18)|| confirm('Did parents allow you?');
}
 function min(a,b) {
    return (a > b) ? b : (b > a ) ? a : '';
 }
let a = prompt("Take a number 'a");
let b = prompt("Take a number 'b")

function pow(a,b) {
    return a * b
}
console.log(pow(a,b));

// task 2.17
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

// Additional
// - balance
// - getBalance
// - waterCount
// - waterPrice
// - sellWater
// - buyWater
// - coffeeCount
// - coffeePrice
// - sellCoffee
// - buyCoffee

const Shop = (function fn() {
    let balance = 0;
    let waterCount = 10;
    let coffeeCount = 10;
    let waterPrice = 2;
    let coffeePrice = 3;

    function getBalance() {
        return balance;
    }

    function sellWater(n) {
        if (n <= waterCount) {
            waterCount -= n;
            balance =  waterPrice + (balance * n);
            console.log('Thanks for visiting! Have a good day!');
        } else {
            console.log("we don't have water anymore!");
        }
    }

    function buyWater(n = 1) {
        sellWater(n);
    }

    function sellCoffee(n) {
        if (n <= coffeeCount) {
            coffeeCount -= n;
            balance =  coffeePrice + (balance * n);
            console.log('Thanks for visiting! Have a good day!');
        } else {
            console.log("we don't have coffee anymore!");
        }
    }

    function buyCoffee(n = 1) {
        sellCoffee(n);
    }

    return {
        getBalance: getBalance,
        buyWater: buyWater,
        byeCoffee: buyCoffee,
    }
})();

Shop.buyWater(1); //Thanks for visiting! Have a good day!
console.log(Shop.getBalance()); //2

Shop.buyWater(12); //we don't have water anymore!

Shop.buyWater(6); //Thanks for visiting! Have a good day!
Shop.byeCoffee(4); //Thanks for visiting! Have a good day!
console.log(Shop.getBalance()); //59
