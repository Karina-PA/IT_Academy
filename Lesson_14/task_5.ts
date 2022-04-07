// 5. сортировка массива

let array5: number[] = [1, 34, 56, 78, 9, 34, 566];

// по возрастанию

function sortArrayAscending(array5: number[]): number[] {
  let sortedArrayAscending: number[] = array5.sort((a, b) => a - b);
  console.log(sortedArrayAscending);
  return sortedArrayAscending;
}
sortArrayAscending(array5);

// по убыванию

function sortArrayDescending(array5: number[]) {
  let sortedArrayDescending: number[] = array5.sort((a, b) => b - a);
  console.log(sortedArrayDescending);
  return sortedArrayDescending;
}
sortArrayDescending(array5);
