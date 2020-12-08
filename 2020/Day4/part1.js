const fs = require('fs');
const file = fs.readFileSync('2020/Day4/input.txt', 'utf-8');
const data = file.split('\r\n');

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function passportBuilder(input) {
    var passports = [];
    var passport = {};
    input.forEach((line) => {
        if (line === '') {  
            passports.push(passport);
            passport = {};
        } else { 
            const fields = line.split(' ');
            fields.forEach((pair) => {
                const splitPair = pair.split(':');
                passport[splitPair[0]] = splitPair[1];
            });
        }
    });
    return passports;
}

function validatePassports(input) {
    return input.filter(passport => requiredKeys.every(key => key in passport));
}

console.log(passportBuilder(data).length);
console.log(validatePassports(passportBuilder(data)).length);