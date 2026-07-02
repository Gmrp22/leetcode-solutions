function letterCombinations(digits: string): string[] {
    let phoneKeys: { [key: string]: string[] } = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z'],
    };
    if (!digits.length) return []
    if (digits.length == 1) {
        return phoneKeys[digits]
    }
    let combinations = []

    function backTrack(index, combination) {
        if (combination.length == digits.length) {
            combinations.push(combination)
            return
        }

        for (let x in phoneKeys[digits[index]]) {

            backTrack(index + 1, combination + phoneKeys[digits[index]][x])
        }
    }

    backTrack(0, '')



    return combinations
}
