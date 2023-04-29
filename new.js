var mangoPrice = "500.50";
var quantity = 9;
var mangoPrice = parseFloat(mangoPrice);
var remainder = mangoPrice % quantity;
console.log(remainder);

var firstName = "Ahammed";
var lastName = "Robin";
var fullName = firstName + " " + lastName;
console.log(fullName);

var price = 50;
var quantity = 10;
var totalPrice = price / quantity;
console.log(totalPrice);

var a = 10;
var b = 20;
var c = a + b;

console.log(a + " + " + b + " = " + c);
console.log(a + " + " + b + " = " + (a - b));
console.log(a + " + " + b + " = " + a * b);
console.log(a + " + " + b + " = " + a / b);

var a = 10;
var b = 10.5;
var c = "robin";
var d = true;
var u;
var n = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof u);
console.log(typeof n);

var num1 = "0.1";
var num2 = 0.2;
var sum = parseFloat(num1) + num2;
console.log(sum.toFixed(2));

var x = 10;
x = x + 10;
var y = 25;
y = y - 5;
console.log(x + y);

var love = 100;
love--;
console.log(love);

var momGiving = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;

var returningMoney = momGiving - totalPrice;
console.log(returningMoney);

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;

var total = mathematics + biology + chemistry + physics + bangla;
var average = total / 5;

console.log(average.toFixed(2));

var firstLine = "I am going to be";
var lastLine = "an awesome web developer";

var fullLine = firstLine + " " + lastLine;

console.log(fullLine);

var sarahNumber = 119;
var dividedNumber = 5;

var result = sarahNumber % dividedNumber;

// console.log(result);

var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(vowels.length);


var numbers = [5, 10 , 15, 20, 25];
console.log(numbers[2]);
numbers[3] = 22;
var element = numbers[3];
console.log(element);


var positionIndex = numbers.indexOf(25);
console.log(positionIndex);

var friendsAge = [18 , 19, 22, 21, 25];
friendsAge.pop();
friendsAge.push(100);
friendsAge.unshift(50);
friendsAge.shift();

console.log(friendsAge);