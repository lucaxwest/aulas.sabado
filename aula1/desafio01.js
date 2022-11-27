//1.  Faça um programa que entre com três números, 
// faça a média aritmética e mostre o resultado. 

// Resolução 01

// const a = 1
// const b = 6
// const c = 10
// 
// let media = (a + b + c) / 3
// 
// console.log(media)


// Resolução 02

const soma = [1, 6, 10, 14]

const valorTotal = soma.reduce(function(total, next) {
    return total + next
})

const media = valorTotal / soma.length

console.log(media)