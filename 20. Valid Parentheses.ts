function isValid(s: string): boolean {
    let symbols = {
        ']': '[',
        '}': '{',
        ")": "(",
    }
    let openers = "([{"

    if (s.length % 2 == 1) return false
    let sArray = s.split('')
    let stack = []
    for (let x = 0; x < s.length; x++) {
        let key = s[x]

        if (openers.includes(key)) {
            stack.push(key)
        } else {
            console.log(symbols[key])
            if (stack.pop() != symbols[key]) return false
        }

    }


    return stack.length == 0

};

