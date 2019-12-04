function findPasswords(start, end) {
    let passwords = 0;
    for (current = start; current <= end; current++) {
        const currentArray = splitNum(current);
        let hasDouble = false;
        let hasDecrease = false;
        let previousDigit;
        currentArray.forEach(digit => {
            if (!hasDouble && digit === previousDigit) {
                hasDouble = true;
            }
            if (!hasDecrease && digit < previousDigit) {
                hasDecrease = true;
            }
            previousDigit = digit
        });
        if (hasDouble && !hasDecrease) {
            passwords++;
        }
    }
    return passwords;
}

function splitNum (n) {
  var digits = [n % 10];
  n = Math.floor(n / 10);
  return n == 0 ? digits : (
    splitNum(n).concat(digits)
  );
}

console.log(findPasswords(125730, 579381));
