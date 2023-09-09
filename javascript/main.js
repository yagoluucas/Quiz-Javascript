function principal() {
const nextSection = document.querySelectorAll("[data-next]")
const previousSection = document.querySelectorAll('[data-previous]')
const questions = document.querySelectorAll('section')
const fieldset = document.querySelector('fieldset')
const events = ['click', 'touchstart']
const createButton = document.createElement('button') //movi para cá e arrumei o bug 
const lastElementBody = document.body // movi para cá para usar na hora que mostrar o resultado
const form = document.querySelector('form') //coloquei aqui para depois que clicar o botão o formulario sumir
const sobreMim = document.querySelector('[data-sobre]')
let nota = 0;
createButton.classList.add('btn-submit')

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
                form.style.marginBottom = '0'
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

// revisar toda essa parte de baixo

createButton.addEventListener('click', () => { 

    const radioSelecionado = document.querySelectorAll('input[type="radio"]:checked') //selecionamos todos os input que está marcado

    radioSelecionado.forEach(item => {
        if(item.value != 'on') {
            nota+=1
        }
    }) //faz um loop por cada input marcado e verifica se o valor dele é diferente de on

    fieldset.style.display = "none"
    sobreMim.classList.add('sobre-results')
    document.body.classList.add('ver-resultado');
    createButton.style.display = 'none';
    const sectionResults = document.createElement('div');
    sectionResults.classList.add('section-results');
    sectionResults.innerText = `Voce acertou ${nota} das 10 questões !`;
    form.appendChild(sectionResults);
  });
}

principal()