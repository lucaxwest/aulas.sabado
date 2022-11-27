// 6.conjunto de dados com a altura de 15 pessoas.
// Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// a quantidade de pessoas com mais de 1.81 de altura.

const alturas = [
    1.70, 1.71, 1.72, 
    1.73, 1.74, 1.75, 
    1.76, 1.77, 1.78, 
    1.79, 1.80, 1.81, 
    1.82, 1.83, 1.84
]

let maiorAltura = alturas[0]
let menorAltura = alturas[0]
let total = 0
let qtdAltos = 0


for (let i = 0; i < alturas.length; i++) {
    const element = alturas[i]
    
    if (element > maiorAltura) {
        maiorAltura = element
    }

    if (element < menorAltura) {
        menorAltura = element
    }

    if (element > 1.81) {
        qtdAltos++
    }

    total += element
}

let media = total / alturas.length

alert(`
    A maior altura é: ${maiorAltura}
    A menor altura é: ${menorAltura}
    A média das alturas é: ${media}
    Número de pessoas com mais de 1,81: ${qtdAltos}
`)

