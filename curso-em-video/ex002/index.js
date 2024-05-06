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
            if(idade >= 0 && idade < 3){
                //bebê
                img.setAttribute('src', 'nene-250px.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 3){
                //bebê
                img.setAttribute('src', 'nene.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
