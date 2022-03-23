// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет 
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который 
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с 
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
// а затем найдет сумму полученных чисел и выведет на экран.

function getNum1 () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(Math.floor (Math.random() * (5 - 1 + 1) + 1))
        }, 3000) 
    })
}

function getNum2 () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(Math.floor (Math.random() * (10 - 6 + 1) + 6))
        }, 5000) 
    })
}

async function sumOfNumbers () {
    let firstNumber = await getNum1();
    let secondNumber = await getNum2();
    console.log (`First number = ${firstNumber}, second number = ${secondNumber}`);
    console.log (firstNumber + secondNumber)
}

sumOfNumbers();