const fs = require('fs');
const file = fs.readFileSync('2020/Day3/input.txt', 'utf-8');
const data = file.split('\r\n');

const slopes = [ 
    {r: 1, d: 1}, 
    {r: 3, d: 1}, 
    {r: 5, d: 1}, 
    {r: 7, d: 1}, 
    {r: 1, d: 2}
]

function solve(slopes, input) {
    return slopes.map((element) => {
        return runSlope(input, element.r, element.d);
    }).reduce((acc, element) => acc * element);
}

function runSlope(input, horiStep, vertStep) {
    var horizontal = 0 - horiStep;
    return input.filter((element, index) => {
        if (index % vertStep > 0) {
            return false
        }
        horizontal += horiStep;
        horizontal -= (horizontal >= element.length ? element.length : 0);
        return (element.charAt(horizontal) === '#');
    }).length;
}

console.log(solve(slopes, data));