// let  n ame ="john";

let name1: String = "John";
console.log(name1);

let name2 = name1.toUpperCase();
console.log(name2);

let age: number;
age = 35;
console.log(age);

// age="45"
let isValid: boolean = true;
console.log(isValid);

let empList: Array<string> = ["ram", "sham", "bheem"];
console.log(empList.map((emp) => emp.toUpperCase()));
let number: Array<number> = [1, 2, 3, 4, 5, 6, 78, 98];
console.log(number.filter((num) => num % 2));

let sum = number.reduce((acc, num) => acc + num);
console.log(sum);
