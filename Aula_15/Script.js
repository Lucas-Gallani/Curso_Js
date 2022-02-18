let num = [2, 4, 1, 9, 21, 13]

// Na posição 3 adicione o número 6
num[3] = 6

// Na ultima posição adicione o número 7
num.push(7)

// Colocar em ordem
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do array é ${num.length}`)

// Mostrar todos os números com um laçode repetição
for (i=0; i < num.length; i++) {
   console.log(`Número: ${num[i]}`)
}

// Mostrar todos os números com laço de reptição e "let in"
for(let pos in num) {
   console.log(`Na posição ${pos} tenho o número ${num[pos]}`)
}

// Mostra se o valor pedido está dentro do array ou não, e qual a posição dele
let pos = num.indexOf(41)

if (pos == -1) {
   console.log('O valor não foi encontrado!')
} else {
   console.log(`Encontrei o número na posição ${pos}`)
}