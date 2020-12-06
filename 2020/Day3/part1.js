const fs = require('fs');
const file = fs.readFileSync('2020/Day3/input.txt', 'utf-8');
const data = file.split('\r\n');

function solve(input, step) {
    var horizontal = 0 - step;
    return input.filter(element => {
        horizontal += step;
        horizontal -= (horizontal >= element.length ? element.length : 0);
        return (element.charAt(horizontal) === '#');
    }).length;
}

console.log(solve(data, 3));