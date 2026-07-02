

// [2, 3, 5, 6, 1]

// // mayor es 6 index 3

// entonces
// 1. priemro hay que buscar por que lado saltar


// si salto a derecha termino en 1
// si salto a izquierda termino en 5

// de 5 a 6 por derecha es igual a 1, lo cual no es posble porque terminaria en 5 again
// de 5a 6 por izquierda es igual a 4, lo cual no es posble porque terminaria en 5 again


// Entonces hay que calcular AMbos Y CHECKAR  la suma de el indice mas sus saltos para ver donde termina ese jump

// ejemplo = 5 + indice(2) = 7(derecha) // tamano de array 5 
// 5 - indice(2) = 3(izquierda)// tamano de array 5


// piensa asi

// 5 esta en indice 3, si re meuves 5 posiciones y fuera lineal termians en poscion 7


// seria asi indexRight = (total + currentValue) % total(es decir)
// indexLeft = (currentValue - total) % total(es decir)




// // entonces 

// indiceActual - valorSalto // esto me da el indice donde caeria si fuera lineal pero con negativos
// indiceActual + valorSalto // esto me da el indice donde caeria si fuera lineal pero con positivos


// //luego
// como ya se cuantos saltos

// total / largode array = es dividir el total calculado de espacios entre espaciod isponible
// nececitmaos el mod para saber cuantos sobra, es decir donde caeria finalmente



function solution(arr: number[]): number {
    let maxValue = Math.max(...arr)
    let indexMax = arr.indexOf(maxValue)
    let lenArr = arr.length
    let amountOfJumps = -1
    let flag = true
    //priemro checkea si es de uno poirque eso no se va a poder recorer siemrpe sera igual a 0
    if (lenArr === 1) return -1
    let queue: number[] = [indexMax]
    let visited: Set<number> = new Set([])
    while (queue.length > 0) {
        amountOfJumps++
        let index = queue.shift()!

        let leftJumpIndex = (index - arr[index] + lenArr) % lenArr
        let rightJumpIndex = (index + arr[index]) % lenArr
        if (rightJumpIndex == indexMax) {
            return amountOfJumps
        }
        if (leftJumpIndex == indexMax) {
            return amountOfJumps
        }
        if (!visited.has(leftJumpIndex)) {
            visited.add(leftJumpIndex)
            queue.push(leftJumpIndex)
        }
        if (!visited.has(rightJumpIndex)) {
            visited.add(rightJumpIndex)
            queue.push(rightJumpIndex)
        }


    }





    return amountOfJumps
}

console.log(solution([2, 3, 5, 6, 1]))