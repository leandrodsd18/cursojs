const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === '' ? 'Olá Mundo' : ''

    console.log(input.value)
    console.log(input.getAttribute('value'))
}) 

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type === 'text' ? 'radio' : 'text'
    //input.setAttribute('type', 'radio')
})
document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = input.placeholder === '' ? 'Digite alguma coisa' : ''
})

document.getElementById('disabled').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log('O valor do atributo data-something é: ' + data)
    input.dataset.something = 'Algum outro valor'
    console.log('O valor do atributo data-something agora é: ' + input.dataset.something)
})