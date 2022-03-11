// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой 
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью 
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandom () {
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000)
}

let firstPromise = new Promise ((resolve, reject) => {
    let random = getRandom();
    setTimeout (() => {
        resolve (random)
    }, random)
})
let secondPromise = new Promise ((resolve, reject) => {
    let random = getRandom();
    setTimeout (() => {
        resolve (random)
    }, random)
})
let thirdPromise = new Promise ((resolve, reject) => {
    let random = getRandom();
    setTimeout (() => {
        resolve (random)
    }, random)
})

Promise.all ([firstPromise, secondPromise, thirdPromise])
    .then (array => {
        console.log(array);
        let sumOfArray = array.reduce (function (a,b) {
            return a + b;
        })
        console.log(sumOfArray);
    })
