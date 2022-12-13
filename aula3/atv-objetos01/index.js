let baseDeVeiculos = []

function apresentarMenu() {
    let valor = prompt(`
        (1) - Cadastrar automóvel
        (2) - Pesquisar automóvel
        (3) - Excluir automóvel
        (0) - Sair
    `)

    if (valor == 1) {
        cadastrar()
        apresentarMenu()
    }
    if (valor == 2) {
        pesquisar()
        apresentarMenu()
    }
}

function cadastrar() {
    veiculo = {
        modelo: prompt('Modelo'),
        placa: prompt('Placa'),
        marca: prompt('Marca'),
        ano: prompt('Ano')
    }
    baseDeVeiculos.push(veiculo)
}


function pesquisar() {
    let retornoPesquisa = prompt('Qual a placa?');

    
}

function veiculosCadastrados() {
    console.log(baseDeVeiculos)
}

