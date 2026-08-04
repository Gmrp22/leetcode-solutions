function reverse(x: number): number {
    let inverted = 0
    let negative = false

    while (x != 0) {
        let unit = x % 10 //4
        let temporal = Math.floor((x - unit) / 10) //3
        inverted = (inverted * 10) + unit //4 ??

        x = temporal // 3
    }

    if (inverted > Math.pow(2, 31) - 1 || inverted < -Math.pow(2, 31)) {
        return 0;
    }
    return inverted
};