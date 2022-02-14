var area = window.document.getElementById('area')

function Clicar() {
   area.innerText = "Clicou!"
   area.style.backgroundColor = "darkgreen" 
}
function Entrar() {
   area.innerText = "Entrou!"
   area.style.backgroundColor = "blue" 
}
function Sair() {
   area.innerText = "Saiu!"
   area.style.backgroundColor = "darkgray" 
}

area.addEventListener('click', Clicar)
area.addEventListener('mouseenter', Entrar)
area.addEventListener('mouseout', Sair)