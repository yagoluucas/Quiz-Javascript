const nextSection = document.querySelectorAll("[data-next]")
const previousSection = document.querySelectorAll('[data-previous]')
const questions = document.querySelectorAll('section')
const events = ['click', 'touchstart']


events.forEach(event => {

    nextSection.forEach(next => {
        next.addEventListener(event, nextElement)

        const createButton = document.createElement('button') //movi para cá e arrumei o bug
    
        function nextElement(event){
            questions.forEach(secao => {

               const lastSection = event.target.parentNode.dataset.lastSection //pegar o atributo ultima seção
    
               if(event.target.parentNode.classList.contains('ativo')) {
                    event.target.parentNode.classList.remove('ativo')
                    event.target.parentNode.nextElementSibling.classList.add('ativo')
               } else if(lastSection == 'button') {
                const lastElementBody = document.lastChild
                createButton.innerText = 'Enviar Respostas'
                createButton.classList.add('btn-submit') 
                lastElementBody.appendChild(createButton)
               }
            })
        }
    })

    previousSection.forEach(previous => {
        previous.addEventListener(event, previousElement)
    
        function previousElement(event) {
            questions.forEach(secao => {
                if(event.target.parentNode.classList.contains('ativo')) {
                    event.target.parentNode.classList.remove('ativo')
                    event.target.parentNode.previousElementSibling.classList.add('ativo')
                }
            })
        }
    })
})

