let pessoa = {
    nome: 'Leandro',
    idade: 34,
    dizerOla(){
        /*Criei um método dentro do objeto, funciona como se fosse uma função! Usei a palavra reservada THIS, para concatenar o valor da propriedade 'nome' do objeo 'pessoa' dentro do método dizerOla()*/
        document.write('Olá Mundo! Meu nome é ' + this.nome)      
    }
}
console.log(pessoa)

pessoa.dizerOla()