function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Cześć"}, ${name}!`;
}
console.log(greet("Szymon"));
console.log(greet("Szymon", "Hej"));

function createUser(name: string, role: string = "user"): object {
  return { name, role };
}
console.log(createUser("Szymon"));
console.log(createUser("Admin", "admin"));

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

const multiply = (a: number, b: number): number => a * b;
const square = (n: number) => n * n;

type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}
console.log(calculate(10, 3, subtract));
console.log(calculate(10, 2, divide));

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") return value.toUpperCase();
  return value.toFixed(2);
}
console.log(format("hello"));
console.log(format(3.14159));

function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("test"));
console.log(identity<number>(42));

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(first([10, 20, 30]));
console.log(first(["a", "b", "c"]));
