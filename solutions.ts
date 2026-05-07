
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