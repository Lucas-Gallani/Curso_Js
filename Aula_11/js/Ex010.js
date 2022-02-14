

function Calcular() {
   var txtv = window.document.getElementById('txtvel')
   var res = window.document.getElementById('res')
   var vel = Number(txtv.value)

   res.innerHTML = `<br>Sua velocidade atual é de ${vel} Km/h <br>`
   if (vel > 60) {
      res.innerHTML += `Você está <strong> MULTADO </strong> por excesso de velocidade <br>`
   }
   res.innerHTML += `Dirija sempre com cinto de segurança`


}
