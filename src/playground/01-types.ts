export {};

let userName: string = "Szymon";
let age: number = 25;
let isActive: boolean = true;

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("sum:", sum);

let person: [string, number] = ["Szymon", 25];
let [personName, personAge] = person;
console.log(`${personName} ma ${personAge} lat`);
console.log("name:", userName, "age:", age, "isActive:", isActive);

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let move: Direction = Direction.Up;
console.log("Kierunek:", move);

enum Status {
  Pending,
  Active,
  Inactive,
}
console.log("Status.Active:", Status.Active);

let anything: any = 42;
anything = "teraz string";

let unknownVal: unknown = "hello";
if (typeof unknownVal === "string") {
  console.log(unknownVal.toUpperCase());
}

function throwError(msg: string): never {
  throw new Error(msg);
}

let maybeNull: string | null = null;
maybeNull = "teraz ma wartość";

let optional: string | undefined;

const optLen = optional?.length;
console.log("optLen:", optLen);

const display = optional ?? "wartość domyślna";
console.log("display:", display);

const strLen = (unknownVal as string).length;
console.log("strLen:", strLen);
