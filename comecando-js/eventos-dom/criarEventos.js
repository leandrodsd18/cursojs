function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
    
    if(password === passwordConfirmation){
        alert('Usuario cadastrado')
    }else{
        alert('As senhas não conferem')
    }

    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
}