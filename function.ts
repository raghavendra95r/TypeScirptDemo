function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 5));

// Optional parameter
let sub = (a: number, b: number) => a - b;
console.log(sub(5, 3));

let sub1 = (a: number, b: number, c?: number): number =>
  c ? a - b - c : a - b;
console.log(sub1(5, 3));

// REquired parameter
let mul = (a: number, b: number, c = 10) => a * b * c;
console.log(mul(5, 3));

let mul1 = (a: number, b: number, c = 10): number => a * b * c;
console.log(mul1(5, 3, 5));

// Rest Parameters
let add2 = (a: number, b: number, ...c: number[]): number =>
  a + b + c.reduce((a, b) => a + b, 0);
let c = [1, 2, 3, 4, 5, 6];
console.log(add2(2, 3, ...c));

// Generic function

function getItem<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}

let concatNumber = getItem<number>([1, 2, 3, 4, 5]);
console.log(concatNumber);

let concatString = getItem<string>(["a", "b", "c", "d", "e", "f"]);
console.log(concatString);
