function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if(hora >0 && hora <12){
        imagem.src = 'manha.jpg'
    }else if(hora >=12 && hora <=18){
        imagem.src = 'tarde.jpg'
    }
}