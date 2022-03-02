// 1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function getNumberOfCall () {
    let count = 1;
    return function () {
        console.log(count);
        return count++
    }
}

let counter = getNumberOfCall();

counter();
counter();
counter();