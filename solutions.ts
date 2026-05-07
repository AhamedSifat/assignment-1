const arr: number[]= [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers(arr);