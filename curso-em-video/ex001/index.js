function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if(hora >=0 && hora <12){
        imagem.style.backgroundImage = 'url(imagens/manha.jpg)'
        msg.innerHTML += `<p>Bom dia!</p>`
    }else if(hora >=12 && hora <=18){
        imagem.style.backgroundImage = 'url(imagens/tarde.jpg)'
        msg.innerHTML += `<p>Boa Tarde!</p>`
    }else{
        imagem.style.backgroundImage = 'url(imagens/noite.jpg)'
        msg.innerHTML += `<p>Boa Noite!</p>`
    }    
}