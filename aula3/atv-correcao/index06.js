let vetor = ["a", "b", "a", "a", "c", "b"]

function noRepeat(letras) {
    let itemIsolado = null

    letras.forEach(letra => {
        let numeroRepeticoes = 0

        letra.forEach(letraComparacao => {
            if (letra === letraComparacao) {
                numeroRepeticoes++
            }
        })
        if (numeroRepeticoes === 1) {
            itemIsolado = letra 
        }
    })

    if (itemIsolado) {
        return itemIsolado
    } else {
        return 'Não existe itens isolados no array.'
    }

}

let result = noRepeat(vetor)
console.log(result)