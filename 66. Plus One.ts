function plusOne(digits: number[]): number[] {
    // //convert to array
    // let stringNumber = digits.join("")
    // //add one value

    // let newNumber = (BigInt(stringNumber) + BigInt(1)) + ""
    // //convert to array
    // let stringArray = Array.from(newNumber)
    // //convert element to numbers
    // let result = stringArray.map(val => +val)
    // return result 1234.  4 + 1
    let digit = 0
    let acarreo = 1
 
    for(let x = digits.length-1; x>=0 ; x--){
        digit = digits[x]
        let result = digit + acarreo
        
        if((result/10) >= 1){
            let modul = result % 10
            digits[x] = modul
            acarreo = Math.floor(result/10)
            if(x == 0 && acarreo> 0){
                digits.unshift(acarreo); 
            }
        }else{
            digits[x] = result
           return digits
        }
       
    }
    return digits
};