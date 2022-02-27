// 5. сортировка массива

let array = [1,34,56,78,9,34,566];

// по возрастанию

function sortArrayAscending(array) {
    let sortedArrayAscending = array.sort((a,b) => a - b);
    console.log(sortedArrayAscending);
    return sortedArrayAscending
}
sortArrayAscending(array);

// по убыванию

function sortArrayDescending(array) {
    let sortedArrayDescending = array.sort((a,b) => b - a);
    console.log(sortedArrayDescending);
    return sortedArrayDescending
}
sortArrayDescending(array);