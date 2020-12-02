const fs = require('fs');
const file = fs.readFileSync('2020/Day2/input.txt', 'utf-8');
const data = file.split('\r\n').map(string => {
    splitString = string.split(" ");
    return { length: splitString[0].split("-"), key: splitString[1].charAt(0), password: splitString[2] }
});

function solve(input) {
    return input.filter(e => {
        const occurrences = (e.password.match(new RegExp(e.key, "g")) || [] ).length;
        if (occurrences < e.length[0] || occurrences > e.length[1]) {
            return false;
        } else {
            return true;
        }
    });
}

console.log(solve(data).length);