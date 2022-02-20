// числа разбивки целые
let num = 15;
let a = num;
let parts = 3;
let partsArr = [];
let randSum = 0;

for (let i = 1; i < parts; i++) {
    let rand = Number((Math.random() * a).toFixed(0));
    partsArr.push(rand);
    randSum += rand;
    a = a - rand;
}
partsArr.push(Number((num - randSum).toFixed(0)));
console.log(partsArr);

// числа разбивки дробные с 2-мя знаками после запятой
let num1 = 15;
let a1 = num;
let parts1 = 3;
let partsArr1 = [];
let randSum1 = 0;

for (let i = 1; i < parts; i++) {
    let rand1 = Number((Math.random() * a1).toFixed(2));
    partsArr1.push(rand1);
    randSum1 += rand1;
    a1 = a1 - rand1;
}
partsArr1.push(Number((num1 - randSum1).toFixed(2)));
console.log(partsArr1);