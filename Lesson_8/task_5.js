// 5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.

function sumOfNumbers (number) {
    let sum = number.toString().split('').reduce((a, b) => {
        return +a + +b
    });
    if (sum > 9) {
        return sumOfNumbers(sum)
    }
    console.log(sum);
    return sum
}

sumOfNumbers(4751);
sumOfNumbers(55555);