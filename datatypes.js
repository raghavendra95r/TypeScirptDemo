"use strict";
// let  n ame ="john";
let name1 = "John";
console.log(name1);
let name2 = name1.toUpperCase();
console.log(name2);
let age;
age = 35;
console.log(age);
// age="45"
let isValid = true;
console.log(isValid);
let empList = ["ram", "sham", "bheem"];
console.log(empList.map((emp) => emp.toUpperCase()));
let number = [1, 2, 3, 4, 5, 6, 78, 98];
console.log(number.filter((num) => num % 2));
let sum = number.reduce((acc, num) => acc + num);
console.log(sum);
