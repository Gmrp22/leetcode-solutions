function lengthOfLongestSubstring(s: string): number {
    if (!s) return 0
    let substring = s[0]
    let finalLen = substring.length

    for (let x = 1; x < s.length; x++) {
        let currentChar = s[x]
        let index = substring.indexOf(currentChar);

        if (substring.includes(currentChar)) {
            substring = substring.slice(index + 1);
            substring = substring + currentChar;

        }
        else {
            substring = substring + currentChar
        }
        if (substring.length > finalLen) {
            finalLen = substring.length
        }
    }



    return finalLen
};

