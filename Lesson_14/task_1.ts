// 1. поменять массив в обратном порядке
let array1: any = [1, 3, 7, 'cat', 6];

function changeArray(array1: any): any {
  let changedArray: any = array1.reverse();
  console.log(changedArray);
  return changedArray;
}

changeArray(array1);
