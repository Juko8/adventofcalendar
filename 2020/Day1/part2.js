const fs = require('fs');
const file = fs.readFileSync('2020/Day1/input.txt', 'utf-8');
const data = file.split('\r\n').map(Number);

function solve (array) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            for (k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === 2020) {
                    console.log(i, j, k);
                    return array[i] * array[j] * array[k];
                }
            }
        }
    }
    return;
}

console.log(solve(data));