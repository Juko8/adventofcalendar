const fs = require('fs');
const file = fs.readFileSync('2020/Day1/input.txt', 'utf-8');
const data = file.split('\r\n').map(Number);

function solve (array) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 2020) {
                return array[i] * array[j];
            }
        }
    }
    return;
}

console.log(solve(data));