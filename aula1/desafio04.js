// 4. A partir do preço à vista de um determinado produto, 
// calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento 
// parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no 
// total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%.


let preco = 1000
let totalAPagar = null
let prestacao = null
let quantidadePar = 3

//3x 10%
//5x 20%

if (quantidadePar == 3) {
    totalAPagar = preco * 1.1
    prestacao = totalAPagar / quantidadePar

} else if(quantidadePar == 5) {
    totalAPagar = preco * 1.2
    prestacao = totalAPagar / quantidadePar

} else {
    console.log('Defina em 3x ou 5x')
}


alert(`
    VALOR PRODUTO: ${preco}
    VALOR PARCELA: ${prestacao}
    NUMERO PARCELAS: ${quantidadePar}
    TOTAL: ${totalAPagar}
`)
