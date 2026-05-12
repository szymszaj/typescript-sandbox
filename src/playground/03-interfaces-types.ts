interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  readonly createdAt: Date;
}

const user: User = {
  id: 1,
  name: "Szymon",
  email: "szymon@example.com",
  createdAt: new Date(),
};
console.log(user);

interface Admin extends User {
  role: "admin" | "superadmin";
  permissions: string[];
}

const admin: Admin = {
  id: 2,
  name: "Admin",
  email: "admin@example.com",
  createdAt: new Date(),
  role: "admin",
  permissions: ["read", "write", "delete"],
};
console.log(admin.permissions);

type Point = {
  x: number;
  y: number;
};

type Color = "red" | "green" | "blue";
type ID = string | number;

type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Product = Point &
  WithTimestamps & {
    name: string;
    price: number;
  };

interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "cześć",
  world: "świat",
  goodbye: "do widzenia",
};
console.log(translations["hello"]);

interface Formatter {
  (value: string): string;
}

const toUpper: Formatter = (s) => s.toUpperCase();
const toLower: Formatter = (s) => s.toLowerCase();

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

console.log(area({ kind: "circle", radius: 5 }));
console.log(area({ kind: "rectangle", width: 4, height: 3 }));
console.log(area({ kind: "triangle", base: 6, height: 4 }));
