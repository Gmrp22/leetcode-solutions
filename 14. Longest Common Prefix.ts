function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    let answer = "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) return answer;
        }
        answer += ch;
    }
    return answer;
};