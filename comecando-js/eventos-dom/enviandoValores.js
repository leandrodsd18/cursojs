/*O parâmetro 'element' está ligado ao parâmetro 'this.parentNode' la no HTML, ao linkar o 'this.parentNode' com o 'element' estamos pegando todos os valores que estão nos inputs da <section> onde o <button> register está inserido*/ 

/*a propriedade children no JavaScript retorna uma coleção com todos os elementos filhos do elemento HTML pelo qual foi chamado. */
function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuário(a) cadastrado com sucesso')
    }else{
        alert('As senhas são diferentes')
    }

    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
}
