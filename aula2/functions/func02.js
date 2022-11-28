function somar(array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            total += array[i]
        }
    }
    return total
}

let array = [0, 5, 1, 2];
let resultado = somar(array)


alert(`A soma dos valores do array é: ${(resultado)}`)