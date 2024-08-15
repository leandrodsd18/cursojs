function register(ev){
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuario(a)' + username +  'criado com sucesso!')
    }
    else{
        alert('As senhas são diferentes')
    }
    return ev
}

const button = document.getElementById("register-button")

button.addEventListener("click", register)