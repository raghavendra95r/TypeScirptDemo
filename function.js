"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));
// Optional parameter
let sub = (a, b) => a - b;
console.log(sub(5, 3));
let sub1 = (a, b, c) => c ? a - b - c : a - b;
console.log(sub1(5, 3));
// REquired parameter
let mul = (a, b, c = 10) => a * b * c;
console.log(mul(5, 3));
let mul1 = (a, b, c = 10) => a * b * c;
console.log(mul1(5, 3, 5));
// Rest Parameters
let add2 = (a, b, ...c) => a + b + c.reduce((a, b) => a + b, 0);
let c = [1, 2, 3, 4, 5, 6];
console.log(add2(2, 3, ...c));
// Generic function
function getItem(item) {
    return new Array().concat(item);
}
let concatNumber = getItem([1, 2, 3, 4, 5]);
console.log(concatNumber);
let concatString = getItem(["a", "b", "c", "d", "e", "f"]);
console.log(concatString);
