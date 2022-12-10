const elevador = {
    andar: 0,
    andarMax: 5,
    subir: () => {
        if (elevador.andar < elevador.andarMax) {
            elevador.andar++
        } else {
            return alert('O elevador já está no último andar')
        }
        
        alert(`${elevador.andar}`)
    },
    descer: () => {
        if (elevador.andar > 0) {
            elevador.andar--
        } else {
            return alert('O elevador já está no térreo')
        }
        
        alert(`${elevador.andar}`)

    },

    qtdPessoas: 0,
    qtdMaxPessoas: 6,
    adicionarPessoa: () => {

    },
    removerPessoa: () => {

    }
}

function descer() {
    elevador.descer()
}

function subir() {
    elevador.subir()
}



