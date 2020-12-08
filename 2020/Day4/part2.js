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
    passports.push(passport);
    return passports;
}

function validatePassports(input) {
    return input.filter(passport => requiredKeys.every(key => {
        if (!(key in passport)) {
            return false;
        }
        console.log('Checking ', key);
        switch (key) {
            case 'byr': {
                return (+passport.byr >= 1920 && +passport.byr <= 2002);
            }
            case 'iyr': {
                return (+passport.iyr >= 2010 && +passport.iyr <= 2020);
            }
            case 'eyr': {
                return (+passport.eyr >= 2020 && +passport.eyr <= 2030);
            }
            case 'hgt': {
                if (passport.hgt.slice(-2) === 'in') {
                    return (+passport.hgt.slice(0, 2) >= 59 && +passport.hgt.slice(0, 2) <= 76);
                } else if (passport.hgt.slice(-2) === 'cm') {
                    return (+passport.hgt.slice(0, 3) >= 150 && +passport.hgt.slice(0, 3) <= 193)
                } else return false;
            }
            case 'hcl': {
                if (passport.hcl.charAt(0) !== '#') {
                    return false;
                } else return (passport.hcl.slice(1).length === 6);
            }
            case 'ecl': {
                return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(color => color === passport.ecl);
            }
            case 'pid': {
                return (typeof +passport.pid === 'number' && +passport.pid !== NaN && passport.pid.length === 9);
            }
        }
    }));
}

console.log(passportBuilder(data).length);
console.log(validatePassports(passportBuilder(data)).length);