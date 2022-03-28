// 6. удалить из массива все повторяющиеся элементы

let array6: any = [1, 4, 'ball', 4, 65, 1, 'rock', 'ball', 65];

function removeCopyFromArray(array6: any): any {
  let filteredArray: any = array6.filter((item: any, index: any) => array6.indexOf(item) === index);
  console.log(filteredArray);
  return filteredArray;
}
removeCopyFromArray(array6);
