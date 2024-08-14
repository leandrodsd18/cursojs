/*Exercício para adicionar inputs na pagina HTML.
Criei uma função que é chamada ao clicar no botão 'Adicionar input da pagina */
function addInput(){
    //Como não sei o número exato de inputs que serão adicionados, primeiro criei uma lista para receber todos os inputs
    const ul = document.getElementById('inputs')
    //Cada input ficará dentro de uma 'li'    
    const newLi = document.createElement('li')    
    newLi.id = 'newInput'
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
    newLi.style.listStyleType = ('none')
    newLi.style.margin = ('10px')

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    
    ul.appendChild(newLi)
    newLi.appendChild(newInput)   
}