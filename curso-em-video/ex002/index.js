function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'imagens/nene-250px.jpg')
            }else if(idade > 3 && idade <= 10){
                img.setAttribute('src', 'imagens/meninop.jpg')
            }else if(idade > 10 && idade <= 18){
                img.setAttribute('src', 'imagens/adolescenteh.jpg')
            }else if(idade > 18 && idade <= 50){
                img.setAttribute('src', 'imagens/adultoh.jpg')
            }else{
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'imagens/nene-250px.jpg')
            }else if(idade > 3 && idade <= 10){
                img.setAttribute('src', 'imagens/meninap.jpg')
            }else if(idade > 10 && idade <= 18){
                img.setAttribute('src', 'imagens/adolescentem.jpg')
            }else if(idade > 18 && idade <= 50){
                img.setAttribute('src', 'imagens/adultom.jpg')
            }else{
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
