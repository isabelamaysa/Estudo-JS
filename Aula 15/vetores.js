var valores = [1, 5, 9, 7, 4, 8]
valores.sort()
/*
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

"pq a variavél "pos" é sempre dada como posição, não é uma variavel criada e q pode ser mudada?"
*/

for(var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
