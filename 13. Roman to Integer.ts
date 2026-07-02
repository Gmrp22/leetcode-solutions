function romanToInt(s: string): number {
    let romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000

    }
    let number = 0
    for (let i = 0; i < s.length; i++) {
        let actualValue = romanNumbers[s[i]];
        if (romanNumbers[s[i - 1]] < actualValue) {
            number = number - romanNumbers[s[i - 1]] + (actualValue - romanNumbers[s[i - 1]])

        }
        else {
            number = number + actualValue
        }
    }
    return number
};

let test = romanToInt('MLXIV')
console.log(test, '////')