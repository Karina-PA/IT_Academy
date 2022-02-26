let day = 1;
let startDate = new Date(2000, 0, day);
let finishDate = new Date();
let result = 0;

while (startDate < finishDate) {
    if (startDate.getDate() === 13 && startDate.getDay() === 5) {
        result++;
    }
    day++;
    startDate = new Date(2000, 0, day);
}
console.log(result);