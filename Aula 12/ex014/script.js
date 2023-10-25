function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 5) {
        //Boa Madrugada
        msg.innerHTML = `Agora são ${hora} horas da Madrugada.`
        msg.innerHTML += " <br> Boa Madrugada!"
        img.src = 'noite.png'
        document.body.style.background = '#241f37'

    } else if (hora >= 5 && hora < 12){
        //Bom dia
        msg.innerHTML +=  "<br> Bom dia!"
        img.src = 'manha.png'
        document.body.style.background = '#e9c6aa'
        
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        msg.innerHTML +=  "<br> Boa Tarde!"
        img.src = 'tarde.png'
        document.body.style.background = '#784d60'
    } else {
        // Boa noite!
        msg.innerHTML +=  "<br> Boa Noite!"
        img.src = 'noite.png'
        document.body.style.background = '#5b2518'
    }
}



// #5b2518 noite    #784d60 tarde
 
