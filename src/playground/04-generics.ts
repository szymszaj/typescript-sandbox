class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log("peek:", numStack.peek());
console.log("pop:", numStack.pop());
console.log("size:", numStack.size);

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));

function pair<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}
console.log(pair("name", "Szymon"));
console.log(pair(1, true));

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Szymon", age: 25, city: "Warsaw" };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface UserData {
  id: number;
  name: string;
}

const response: ApiResponse<UserData> = {
  data: { id: 1, name: "Szymon" },
  status: 200,
  message: "OK",
};
console.log(response.data.name);

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = filterArray(nums, (n) => n % 2 === 0);
const words = ["apple", "banana", "cherry", "date"];
const longWords = filterArray(words, (w) => w.length > 5);
console.log("evens:", evenNums);
console.log("longWords:", longWords);
