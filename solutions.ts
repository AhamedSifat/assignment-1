
//problem 1
const arr: number[]= [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers(arr);

//problem 2

const value: string='typescript';
 const reverseString = (str: string): string=>  {
    return str.split('').reverse().join('');
 }
 console.log(reverseString(value));

 //problem 3

 const stringOrNumber: string | number = 'Hello';

 const checkType = (input: string | number): string => {
    if (typeof input === 'string') {
        return 'string';
    }
    return 'number';
    }
console.log(checkType(stringOrNumber));

//problem 4
const user = { id: 1, name: "John Doe", age: 21 };
const getProperty= <T, K extends keyof T> (obj: T, key: K) :T[K] => {
    return obj[key];
}
console.log(getProperty(user, 'name'));

//problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface bookwithIsRead extends Book {
    isRead: boolean;
}

const toggleReadStatus = (book: Book, isRead: boolean= true): bookwithIsRead => {
    return { ...book, isRead };

}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));
