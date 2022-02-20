let playerOneSum = 0;
let playerTwoSum = 0;

for (let i = 0; i < 3; i++) {
    playerOneSum += Math.round(Math.random()*(6 - 1) + 1);
    console.log(`First player score is ${playerOneSum}`);
    playerTwoSum += Math.round(Math.random()*(6 - 1) + 1);
    console.log(`Second player score is ${playerTwoSum}`);
}

if (playerOneSum > playerTwoSum) {
    console.log('First player won!');
} else if (playerOneSum < playerTwoSum) {
    console.log('Second player won!');
} else if (playerOneSum === playerTwoSum) {
    console.log('Draw!');
}