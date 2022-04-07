// 3. записать в массив ряд фибаначи начиная с N члена с длинной массива M

let number: number = 6;
let lengtOfhArray: number = 7;
let array3: number[] = [];

createArray(array3, number, lengtOfhArray);
console.log(array3);

function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createArray(array3: number[], n: number, m: number): any {
  let nextN: number = fib(n);
  for (let y = 0; y < m; y++) {
    array3.push(nextN);
    nextN = fib(n + 1);
    n++;
  }
}
