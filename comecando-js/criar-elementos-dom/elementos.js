function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
    newLi.style.listStyleType = ('none')

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    
    ul.appendChild(newLi)
    newLi.appendChild(newInput)   
}