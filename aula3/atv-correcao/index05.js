function calcularMedia(numeros) {
    let total = 0

    numeros.forEach(numero => {
        
        if (isNumerico(numero)) {
            total += numero // soma os valores da array caso passe no if
        } else {
            return 'ERRO'
        }
    })

    return total/numeros.lenght
}

function isNumerico(valor) {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
}

const array = [10,20,30,40]
let resultado = calcularMedia(array)

alert(`A média dos valores do array é: ${(resultado)}`)