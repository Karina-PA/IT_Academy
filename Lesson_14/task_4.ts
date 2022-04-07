// 4. даны два 4-х значных числа с неповторяющимися цифрами, надо определить сколько
// цифр в этих числах совпадают по значению и позиции и сколько только по значению

function compareItem(firstNumber: number, secondNumber: number): any {
  let sameItem: number = 0;
  let sameItemAndPosition: number = 0;
  let firstNum: string = String(firstNumber);
  let secondNum: string = String(secondNumber);

  for (let i = 0; i < firstNum.length; i++) {
    if (firstNum[i] === secondNum[i]) {
      sameItemAndPosition++;
    }
    for (let j = 0; j < secondNum.length; j++) {
      if (firstNum[i] === secondNum[j]) {
        sameItem++;
      }
    }
  }
  console.log(sameItemAndPosition, sameItem);
}

compareItem(2645, 2542);
