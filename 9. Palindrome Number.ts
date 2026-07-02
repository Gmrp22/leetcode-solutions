function isPalindrome(x: number): boolean {
    if (x < 0) return false
    // let actualNumber = String(x);
    // let len = actualNumber.length

    // for(let x=0; x< (len >> 1) ; x++){
    //     if(!(actualNumber.charAt(x) == actualNumber.charAt(len-x-1)) ){
    //         return false
    //     }
    // }
    // return true
    let div = 1
    //121
    //
    while ((x / div) >= 10) {
        div *= 10;
    }
    while (x >= 10 || div > 1) {
        let left = Math.floor(x / div)
        let right = x % 10
        if (left != right) return false
        x = Math.floor((x % div) / 10)
        div = Math.floor(div / 100)

    }

    return true
};