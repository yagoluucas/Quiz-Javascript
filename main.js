const nextSection = document.querySelectorAll("[data-next]")
const previousSection = document.querySelectorAll('[data-previous]')
const questions = document.querySelectorAll('section')
const events = ['click', 'touchstart']
const createButton = document.createElement('button') //movi para cá e arrumei o bug
const submitQuestions = document.querySelector('.btn-submit')
const lastElementBody = document.lastChild // movi para cá para usar na hora que mostrar o resultado


events.forEach(event => {

    nextSection.forEach(next => {
        next.addEventListener(event, nextElement)
    
        function nextElement(event){
            questions.forEach(secao => {

               const lastSection = event.target.parentNode.dataset.lastSection //pegar o atributo ultima seção
    
               if(event.target.parentNode.classList.contains('ativo')) {
                    event.target.parentNode.classList.remove('ativo')
                    event.target.parentNode.nextElementSibling.classList.add('ativo')
               } else if(lastSection == 'button') {  
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

    //iniciado o evento para mostrar o resultado :

submitQuestions.addEventListener('click', () => {
    document.body.classList.add('ver-resultado');
    submitQuestions.style.display = 'none';
    const sectionResults = document.createElement('div');
    sectionResults.classList.add('section-results');
    sectionResults.innerText = 'Seu resultado foi';
    lastElementBody.appendChild(sectionResults);
  });
})

  

