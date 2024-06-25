let notas = Number.document.getElementById('notas')
let lista = Number.document.getElementById('listaNotas')
let res = Number.document.getElementById('res')
const todasNotas = []

function adicionar(){
    todasNotas.push(notas.value)
    let item = document.createElement('option')
    item.text = `Nota ${notas.value} adicionada`
    lista.appendChild(item)
    res.innerHTML = ''
    notas.value = ''
    notas.focus()
}
