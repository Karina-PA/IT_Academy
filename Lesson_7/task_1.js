// 1. поменять массив в обратном порядке

function changeArray (array) {
    let changedArray = array.reverse();
    console.log(changedArray);
    return changedArray
}
let array = [1, 3, 7, 'cat', 6];
changeArray(array);