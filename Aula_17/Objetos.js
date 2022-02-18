// Declaração do objeto
let amigo = {
   nome: 'José',
   sexo: 'M',
   peso: 85.4,
   engordar(p){
      console.log('ENGORDOU')
      this.peso += p
   }
}

// Parametro da função dentro do objeto
amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}KG`)