// 2. найти максимальное значение числа в массиве

function getMaxNumberInArray (array) {
    let maxNumber = Math.max.apply(null, array);
    console.log(maxNumber);
    return maxNumber
}
let array = [1,3,3,78,54,7];
getMaxNumberInArray(array);