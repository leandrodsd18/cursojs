function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    ul.appendChild(nameLi)
    nameLi.appendChild(nameInput)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    ul.appendChild(phoneLi)
    phoneLi.appendChild(phoneInput)
    ul.appendChild(document.createElement('br'))

    const adressLi = document.createElement('li')
    adressLi.innerText = 'Endereço: '
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'adress'
    ul.appendChild(adressLi)
    adressLi.appendChild(adressInput)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length -1])
    contactSection.removeChild(contacts[contacts.length - 1])
}