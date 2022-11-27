//5. Faça um algoritmo que leia o nome e as três notas de 
// uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi
// aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.


let name = 'Lucas'
let a = 6
let b = 9
let c = 10
let media = (a + b + c) / 3

if (media >= 8) {
    alert(`O aluno ${name} foi APROVADO!`)

} else {
    alert(`O aluno ${name} foi REPROVADO!`)
}


