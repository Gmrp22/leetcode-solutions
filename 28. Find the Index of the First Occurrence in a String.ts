function strStr(haystack: string, needle: string): number {
    if (!haystack.includes(needle)) return -1
    let position = 0
    let subWord = ""
    let arrayLetters = Array.from(haystack)
    for (let x = 0; x < arrayLetters.length; x++) {
        let element = haystack.slice(x, needle.length + x)
        if (element == needle) {
            position = x
            break
        }
    }
    return position
};

