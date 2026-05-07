const arr: number[] = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const evenNumbers = filterEvenNumbers(arr);

const value: string = "typescript";

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const stringOrNumber: string | number = "Hello";

const checkType = (input: string | number): string => {
  if (typeof input === "string") {
    return "string";
  }
  return "number";
};

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface bookwithIsRead extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book, isRead: boolean = true): bookwithIsRead => {
  return { ...book, isRead };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

class Person {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

class Student extends Person {
  constructor(name: string, age: number, grade: string) {
    super(name, age, grade);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set(arr2);
  return arr1.filter((num) => set.has(num));
};