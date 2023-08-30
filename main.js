const next = document.querySelectorAll("[data-next]")
const previous = document.querySelectorAll('[data-previous]')
const questions = document.querySelectorAll('section')

next.forEach(next => {
    next.addEventListener('click', nextElement)

    function nextElement(event){
        questions.forEach(secao => {

           if(event.target.parentNode.classList.contains('ativo')) {
                event.target.parentNode.classList.remove('ativo')
                event.target.parentNode.nextElementSibling.classList.add('ativo')
           }

        })
    }
})

previous.forEach(previous => {
    previous.addEventListener('click', previousElement)

    function previousElement(event) {
        questions.forEach(secao => {
            if(event.target.parentNode.classList.contains('ativo')) {
                event.target.parentNode.classList.remove('ativo')
                event.target.parentNode.previousElementSibling.classList.add('ativo')
            }
        })
    }
})