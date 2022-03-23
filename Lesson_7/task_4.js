// 4. даны два 4-х значных числа с неповторяющимися цифрами, надо определить сколько
// цифр в этих числах совпадают по значению и позиции и сколько только по значению

function compareItem (firstNumber, secondNumber) {
    let sameItem = 0;
    let sameItemAndPosition = 0;
    let firstNum = String(firstNumber);
    let secondNum = String(secondNumber);

    for (let i = 0; i < firstNum.length; i++) {
        if (firstNum[i] === secondNum[i]) {
            sameItemAndPosition++
        }
        for (let j = 0; j < secondNum.length; j++) {
            if (firstNum[i] === secondNum[j]) {
                sameItem++
            }
        }
    }
    console.log(sameItemAndPosition, sameItem);
}

compareItem(2645, 2542);