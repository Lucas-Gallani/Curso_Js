function Contar() {
   var inicio = document.getElementById('inicio') 
   var fim = document.getElementById('fim')
   var passo = document.getElementById('passo')
   var c = Number(inicio.value)
   var f = Number(fim.value)
   var p = Number(passo.value)
   var resultado = document.getElementById('result')

   resultado.innerHTML = ''

   if (p == 0) {
      p = 1
      resultado.innerHTML += 'Substituindo PASSO pelo valor 1 <br>' 
   }if (f == 0) {
      window.alert('IMPOSSIVEL CONTAR')
   }if (p > 0 && f > 0) {
      while (c <= f) {
         resultado.innerHTML += ` ${c} =>`
         c += p
      }
      resultado.innerHTML += " FIM!!"
   }

  

}