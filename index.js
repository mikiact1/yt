console.log('Hello world');

let interestTate = 0.3;
let isMale = true;
let num = 10;

//objects

let person = {
   name: 'miki',
   age: 20,
   id: 161
}
console.log(person);
console.log(typeof person);

//array's

let selectedColors = ['red','blue','green',8,false];
console.log(selectedColors.unshift('jjj',));
console.log(selectedColors);
let x = typeof selectedColors;
console.log(x);

//functions
function greet() {
    console.log('Hello user how can I assist you?')
}

function greet1(name){
    console.log('Hello ' + name);
}
greet();
greet1("Miki")
greet1('Mathew')

//function to calculate something
function square(number){
    return number*number;
}
let sqr = square(3);
console.log(sqr);
console.log(square(2));