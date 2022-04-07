// 2. найти максимальное значение числа в массиве

function getMaxNumberInArray(array2: number[]): number {
  let maxNumber: number = Math.max.apply(null, array2);
  console.log(maxNumber);
  return maxNumber;
}
let array2: number[] = [1, 3, 3, 78, 54, 7];
getMaxNumberInArray(array2);
