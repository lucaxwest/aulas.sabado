const exec = function() {
    let array = [1,2,3,4,5,6]

    const exec02 = function() {
        let total = 0

        for (let i = 0; i < array.length; i++) {
           total += array[i]  
        }
    }
    exec02()
}


exec()


alert(`A soma dos valores do array é: ${resultado}`)