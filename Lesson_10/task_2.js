// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой 
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3. 
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат 
// его работы на экран.

function getRandom () {
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1)
}

let firstPromise = new Promise ((resolve) => {
    setTimeout (() => {
        resolve (1)
    }, getRandom())
})
let secondPromise = new Promise ((resolve) => {
    setTimeout (() => {
        resolve (2)
    }, getRandom())
})
let thirdPromise = new Promise ((resolve) => {
    setTimeout (() => {
        resolve (3)
    }, getRandom())
})

Promise.race ([firstPromise, secondPromise, thirdPromise])
    .then (value => console.log(value))