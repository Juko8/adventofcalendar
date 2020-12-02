const fs = require('fs');
const file = fs.readFileSync('2020/Day2/input.txt', 'utf-8');
const data = file.split('\r\n').map(string => {
    splitString = string.split(" ");
    return { length: splitString[0].split("-"), key: splitString[1].charAt(0), password: splitString[2] }
});

function solve(input) {
    return input.filter(e => {
        const char1 = e.password.charAt(parseInt(e.length[0]) - 1);
        const char2 = e.password.charAt(parseInt(e.length[1]) - 1);
        if (e.key === char1 && e.key === char2) {
            return false;
        } else if (e.key !== char1 && e.key !== char2) {
            return false;
        } else {
            return true;
        }
    });
}

console.log(solve(data).length);