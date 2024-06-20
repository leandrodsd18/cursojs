function register(element){
    const userName = element.children.userName.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuária cadastrado com sucesso')
    }else{
        alert('As senhas são diferentes')
    }

    document.getElementById('userName').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
}
