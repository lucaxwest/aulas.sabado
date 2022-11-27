let idades = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] // homens
let pesos = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59] // mulheres
let generos = ['F', 'M','F', 'M','F', 'M','F', 'M','F', 'M'] 

let qntM = 0
let qntF = 0

let mediaIdadeM = 0
let totalIdadeM = 0

let mediaPesoF = 0
let totalPesoF = 0



for (let i = 0; i < idades.length; i++) {
    const genero = generos[i]
    const idade = idades[i]
    const peso = pesos[i]
    
    if (genero == 'M') {
        totalIdadeM += idade
        qntM++
    } 
    if (genero == 'F') {
        qntF++
    }

    if (genero == 'F') {
        totalPesoF += peso
        qntM++
  } 
}

mediaIdadeM = totalIdadeM / qntM
mediaPesoF = totalPesoF / qntF


alert(`
    A quantidade de homems: ${qntM}
    A quantidade de mulheres: ${qntF}
    A média de idade dos homens é: ${mediaIdadeM}
    A média de peso das mulheres é: ${mediaPesoF}
`)