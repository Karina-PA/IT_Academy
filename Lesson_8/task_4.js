// 4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию 
// и не используя цикл.

let array = [1, 45, 345, 4, 7, 3, 78];
let i = 0;

function outputNumbers (array) {
    console.log(array[i]);
    if ((array.length - 1) > i) {
        i++;
        outputNumbers(array);
    }
}
outputNumbers(array);