function lengthOfLastWord(s: string): number {
    s = s.trim()
    s = s.replace(/\s+/g, ' ').trim();
    let words = s.split(' ')
    let len = words.length

    return words[len - 1].length
};