function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option') // adicionado o elemento "option"
            item.text = `${n} x ${c} = ${n*c}` // "text" = o texto q ira aparecer dentro de option
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        //explicar melhor

}
 
