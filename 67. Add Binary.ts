function addBinary(a: string, b: string): string {
    let x = a.length -1
    let y = b.length -1
    let result = ''
    let acarreo = 0

    while(x >= 0 || y >= 0 || acarreo > 0){
        let aBit = 0; // Por defecto decimos que vale 0
        let bBit = 0; // Por defecto decimos que vale 0

        // 2. Si 'x' todavía es una posición válida dentro de la palabra 'a'
        if (x >= 0) {
            aBit = Number(a[x]);
        }

        // Si 'y' todavía es una posición válida dentro de la palabra 'b'
        if (y >= 0) {
            bBit = Number(b[y]);
        }
        x =x-1
        y =y-1
        let sum = Number(aBit) + Number(bBit) + acarreo
        let actual = sum % 2
        acarreo = Math.floor(sum / 2)
        result =  actual + result
    }
    return result
};