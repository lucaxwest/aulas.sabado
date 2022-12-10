//question 02

function somarNumeros(array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i] // element passa a ser o valor do array

        if (isNumerico(element)) {
            total += element // soma os valores da array caso passe no if
        } else {
            return 'ERRO'
        }


    }
    return total
}

function isNumerico(valor) {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
}


const numeros = [10,20,30,40]
let resultado = somarNumeros(numeros)

alert(`A soma dos valores do array é: ${(resultado)}`)