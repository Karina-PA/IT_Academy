// 6. удалить из массива все повторяющиеся элементы

let array = [1, 4, 'ball', 4, 65, 1, 'rock', 'ball', 65];

function removeCopyFromArray (array) {
    let filteredArray = array.filter((item, index) => array.indexOf(item) === index);
    console.log(filteredArray);
    return filteredArray
}
removeCopyFromArray(array);