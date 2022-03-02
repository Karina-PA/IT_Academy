// 3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа.
//  Затем извлеките квадратный корень из этих чисел.

let array = [1, -2, 3, 0, 4, -5, 6, -11];

function filterArray (array) {
    let filteredArray = array.filter(num => num > 0);
    console.log(filteredArray);
    let sqrtArray = filteredArray.map ((number) => {
        return Math.sqrt(number)
    })
    console.log(sqrtArray);
}

filterArray(array);