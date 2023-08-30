const next = document.querySelectorAll("[data-next]")
const questions = document.querySelectorAll('section')

next.forEach(next => {
    next.addEventListener('click', proximoElemento)

    function proximoElemento(event){
        questions.forEach(secao => {

           if(event.target.parentNode.classList.contains('ativo')) {
                event.target.parentNode.classList.remove('ativo')
                event.target.parentNode.nextElementSibling.classList.add('ativo')
           }

        })
    }
})