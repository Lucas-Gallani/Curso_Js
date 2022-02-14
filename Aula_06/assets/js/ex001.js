
// Abre uma janela de mensagem para o user com OK
window.alert('Esta é a minha primeira mensagem!\nAcabei me livrando da maldição!\nNão tenho mais que me preocupar!')

// Abre uma janela de confirmação para o user com OK/CANCELAR
window.confirm('Está gostando do seu site?')

// Abre uma janela para o user inserir algum valor
var nome = window.prompt(`Qual é o seu nome?`) 

// Mostra um alerta para o user com uma mensagem de bem vindo implementando o nome inserido anteriormente
window.alert(`Seja bem vindo ${nome}, espero que tenha gostado deste site`)

// Concatenação com +
window.alert('Seja bem vindo ' + nome + ' espero que tenha gostado desse site')

// Mostra ao user qual o tipo primitivo da variável nome
window.alert(typeof(nome))

// Pede dois números ao usuário
// parseInt ou parseFloat para passar o valor para inteiro ou real, porém Vscode consegue diferenciar o valor mesmo sem estes comandos
var n1 = Number.parseFloat(window.prompt('Digite o primeiro número'))
var n2 = Number.parseInt(window.prompt('Digite o segundo número'))

// Soma os dois valores passados pelo usuário
var s = n1 + n2

// Mostra o resultado para o usuário
window.alert(nome + ' a soma dos valores é de ' + s)

// converter para string
window.alert('Converter a soma para uma string ' + s.toString() + ' ou ' + String(s))

// Captalize
window.alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}`) 



// Mostrar o tamanho do nome da pessoa
var nome = window.prompt('Digite o seu nome')
document.write(`Olá ${nome}, o seu nome tem ${nome.length} letras <br>`)

// 
document.write(`O seu nome em maiusculo é ${nome.toUpperCase()} <br>`)

// 
document.write(`O seu nome em minusculo é ${nome.toLowerCase()}<br>`)
//
var num = Number(window.prompt('Digite um número'))
//
document.write(`${num.toFixed(2).replace('.', ',')}<br>`)
//
document.write(`${num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)


