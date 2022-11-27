// 9. Faça um programa que receba 10 números, calcule e imprima a
// soma dos números pares e a soma dos números primos.


const numeros = [2, 3, 5, 6, 9, 11, 12, 13, 14, 17]

// Resolução dos números pares
let par = []

function pares() {
    numeros.forEach(function(v) {  // v -> valor do array
        if(v % 2 == 0){  // Verifica se é par
            par.push(v) // push -> insere o valor no array
    }
 })
}
pares()

const somaPar = par.reduce(function(total, next) {
    return total + next
})
    console.log(somaPar)



// Resolução dos números primos
let primos = []
numeros.forEach((itens) => {
    let divisores = []

    for (let contador = 1; contador <= itens; contador++) {
        if(itens % contador === 0) {
            divisores ++
        }
    }
    if (divisores === 2) {
        primos.push(itens)
    }
})

const somaPrimos = primos.reduce(function(total, next) {
    return total + next
})
    console.log(somaPrimos)
