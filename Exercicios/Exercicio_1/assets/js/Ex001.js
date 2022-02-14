
function Carregar() {
   var msg = window.document.getElementById('msg')
   var foto = window.document.getElementById('imagem')
   var cont = window.document.getElementById('cont')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas!`
   
   if (hora >= 0 && hora < 12) {
      foto.src = "assets/img/Manha.png"
      document.body.style.background = '#d59706'
      cont.style.background = '#ffb300'
   } else if (hora >= 12 && hora < 18) {
      foto.src = "assets/img/Tarde.png"
      document.body.style.background = '#9f3a5c'
      cont.style.background = '#aa4e6d'
   } else {
      foto.src = "assets/img/Noite.png"
      document.body.style.background = '#4f4f4f'
      cont.style.background = '#969696'
   }
}

