function Verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('textano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verfique os dados e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      if (fsex[1].checked) {
         genero = 'Mulher'
      } else if (fsex[0].checked) {
         genero = 'Homem'
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
   }
}