function enviar() {
    let nome = document.getElementById('inome')
    let turma = document.getElementById('iturma')
    let ano = document.getElementById('iano')
    let port1 = document.getElementById('iport1')
    let port2 = document.getElementById('iport2')
    let mat1 = document.getElementById('imat1')
    let mat2 = document.getElementById('imat2')
    let hist1 = document.getElementById('ihist1')
    let hist2 = document.getElementById('ihist2')
    let geo1 = document.getElementById('igeo1')
    let geo2 = document.getElementById('igeo2')
    let res = document.getElementById('res')

    let pt1 = Number(port1.value)
    let pt2 = Number(port2.value)
    let notapt = pt1 + pt2
    let mediapt = notapt / 2

    let mt1 = Number(mat1.value)
    let mt2 = Number(mat2.value)
    let notamt = mt1 + mt2
    let mediamt = notamt / 2

    let ht1 = Number(hist1.value)
    let ht2 = Number(hist2.value)
    let notaht = ht1 + ht2
    let mediaht = notaht / 2

    let g1 = Number(geo1.value)
    let g2 = Number(geo2.value)
    let notageo = g1 + g2
    let mediageo = notageo / 2

    let resultado = [mediapt, mediamt, mediaht, mediageo]

    for (let i = 0; i < resultado.length; i++) {
        if(resultado[i] >= 7){
            resultado = 'APROVADO'
        } else if(resultado[i] < 7) {
            resultado = 'REPROVADO'
        }
    }
    
    res.innerHTML = `Aluno(a) <strong>${nome.value}</strong>, da turma do <strong>${turma.value}</strong> ano, do ano de <strong>${ano.value}</strong>. <br> <br>`

    res.innerHTML += `Você esta <strong>${resultado}!</strong>. <br> <br>`

    res.innerHTML += `A sua nota em PORTUGUÊS é <strong>${notapt}</strong> e a sua média é <strong>${mediapt}</strong>. <br><br>`
    
    res.innerHTML += `A sua nota em MATEMÁTICA é <strong>${notamt}</strong> e a sua média é <strong>${mediamt}</strong>.<br><br>`

    res.innerHTML += `A sua nota em HOSTÓRIA é <strong>${notaht}</strong> e a sua média é <strong>${mediaht}</strong>.<br><br>`

    res.innerHTML += `A sua nota em GEOGRAFIA é <strong>${notageo}</strong> e a sua média é <strong>${mediageo}</strong>.<br><br>`


}
 
