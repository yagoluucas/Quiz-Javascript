function principal() {
const nextSection = document.querySelectorAll("[data-next]")
const previousSection = document.querySelectorAll('[data-previous]')
const questions = document.querySelectorAll('section')
const fieldset = document.querySelector('fieldset')
const events = ['click', 'touchstart']
const createButton = document.createElement('button') //movi para cá e arrumei o bug
createButton.classList.add('btn-submit') 
const lastElementBody = document.body // movi para cá para usar na hora que mostrar o resultado
const form = document.querySelector('form') //coloquei aqui para depois que clicar o botão o formulario sumir
let nota = 0;


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

})

createButton.addEventListener('click', () => {
    fieldset.style.display = "none"
    document.body.classList.add('ver-resultado');
    createButton.style.display = 'none';
    const sectionResults = document.createElement('div');
    sectionResults.classList.add('section-results');
    sectionResults.innerText = `A sua nota foi : ${nota}`;
    form.appendChild(sectionResults);
  });
}

principal()