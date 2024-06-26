let notas = document.getElementById('notas')
let lista = document.getElementById('listaNotas')
let res = document.getElementById('res')
const todasNotas = []

function adicionar(){
    todasNotas.push(Number(notas.value))
    let item = document.createElement('option')
    item.text = `Nota ${notas.value} adicionada`
    lista.appendChild(item)
    res.innerHTML = ''
    notas.value = ''
    notas.focus()
}
function calcularMedia(){
    if(todasNotas.length === 0){
        alert('Digite ao menos uma nota para calcular!')
    }
    else{
        let total = todasNotas.length
        let maior = todasNotas[0]
        let menor = todasNotas[0]
        let soma = 0
        let media = 0
        for(let pos in todasNotas){
            soma += todasNotas[pos]
            if(todasNotas[pos] > maior){
                maior = todasNotas[pos]
            }
            if(todasNotas[pos] < menor){
                menor = todasNotas[pos]
            }
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Foram cadastradas ${total} notas</p>`
        res.innerHTML += `<p>A media de notas é: ${media}</p>`
        res.innerHTML += `<p>A soma de todas as notas foi: ${soma}</p>`
        res.innerHTML += `<p>A maior nota foi: ${maior}</p>`
        res.innerHTML += `<p>A menor nota foi: ${menor}</p>`
       
    }
}