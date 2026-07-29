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



function lengthOfLongestSubstringBetter(s: string): number {
    if (!s) return 0
    let substring = new Map()
    //miMap.set(valor, clave);
    substring.set(s[0], 0)
    let finalLen = substring.size
    let izq = 0
    let der = 0

    for (let x = 1; x < s.length; x++) {
        der = x
        let currentChar = s[x]
        if (substring.has(currentChar)) {
            izq = Math.max(izq, substring.get(currentChar) + 1)
            substring.set(currentChar, x)
        }
        else {

            substring.set(currentChar, x)
        }

        let longitudActual = der - izq + 1;

        if (longitudActual > finalLen) {
            finalLen = longitudActual;
        }
    }


    return finalLen
};


