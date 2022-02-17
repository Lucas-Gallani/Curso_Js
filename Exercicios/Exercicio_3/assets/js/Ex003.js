function Calcular() {

   var val = document.getElementById('num')
   var res = document.getElementById('resultado')
   res.innerHTML = ''

   for (i=0; i<=10; i++) {
      res.innerHTML += `${Number(val.value)} x ${i} = ${Number(val.value) * i} <br>`
   }
}