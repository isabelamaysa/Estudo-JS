function enviar() {
    var nome = document.getElementById('inome')
    var idade = document.getElementById('idade')
    var nascimento = document.getElementById('inasc')
    var civil = document.getElementById('iestcivil')
    var msg = document.getElementById('imsg') 
    var res = document.getElementById('res')  

    
    res.innerHTML = `<br> Meu nome é ${nome.value}, tenho ${idade.value} anos, nacido(a) no dia ${nascimento.value}. Hoje me encontro ${civil.value}, e para falar um pouco mais sobre mim: "${msg.value}".`
}



 
