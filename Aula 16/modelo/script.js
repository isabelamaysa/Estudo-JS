var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) { //pq "is"?
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}

function inLista(n, l) { // pq 'n' e 'l'?
    if (l.indexOf(Number(n)) != -1) { //pq indexOf? / "!=" = se não for igual a -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // "!inLista" = se não estiver na lista
        valores.push(Number(num.value)) // "push" = adicionar um elemento no vetor, add o Number q é o num.value
        var item = document.createElement('option') //criando um elemento, o Option
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // add a lista?
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na Lista')
    }
    num.value = '' // para q ele sempre retorne vazio
    num.focus() //para q o foco seja no input "num"
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //mostrar valor total de elementos
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menos valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}
 
