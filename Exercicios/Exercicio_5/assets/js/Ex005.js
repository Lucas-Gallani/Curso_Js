var lista = []

function Adicionar() {
   var n = document.getElementById('num')
   var txt = document.getElementById('res')

   if (n.value < 1 || n.value > 100) {
      window.alert('NÚMERO FORA DOS PARAMETROS')
   } else if (lista.indexOf(n.value) != -1) {
      window.alert('Número já está na lista')
   } else {
      lista.push(n.value)
      txt.innerHTML += `Valor ${n.value} adicionado <br>`
   }

   n.value = ''
    
}

function Finalizar() {
   var txtFinal = document.getElementById('fin')

   var maior = lista[0];
   var menor = lista[0];
   var soma = 0;
   var media = 0;

   for (i = 0; i < lista.length; i++) {
      if (lista[i] > maior) {
         maior = lista[i]
      }

      if (lista[i] < menor) {
         menor = lista[i]
      }
   }

   for (i = 0; i < lista.length; i++) {
      soma += Number(lista[i])
   }

   media = soma / lista.length

   txtFinal.innerHTML += `Ao todo temos ${lista.length} números cadastrados <br> O maior número informado foi ${maior} <br> O menor número informado foi ${menor} <br>A soma dos valores é igual a ${soma} <br>A média dos valores digitados foi de ${media}`

   
}