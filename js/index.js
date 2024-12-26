//Botões passar imagem story
const storyBtn = document.querySelectorAll('.story-btn');
const storyElements = document.querySelectorAll('.story-elements');

storyBtn.forEach(function(item, index) { // Pega todos os elementos da variavel storyBtn
    item.addEventListener("click", function() {
        // Remove a classe "active" de todos os botões
        storyBtn.forEach(function(btn) {
            btn.classList.remove("active");
        });
        // Adiciona a classe "active" apenas ao botão clicado
        item.classList.add("active");

        // Esconde todos os elementos de história
        storyElements.forEach(function(element) {
            element.style.display = 'none';
        });

        // Mostra o elemento de história correspondente ao botão clicado
        const targetElement = storyElements[index];
        if (targetElement) {
            targetElement.style.display = 'flex';
        }
    });
});

//resize
window.addEventListener('resize', function() { // Adiciona eventos de acordo com o tamanho da tela
    if (window.innerWidth > 900) { // Ajusta os elementos quando a tela for MAIOR que 900px
        storyElements.forEach(function(element) {
            element.style.display = 'flex';
        }); // Deixa todos os elementos da const storyElements com display flex

        storyBtn.forEach(function(btn) {
            btn.classList.remove('active');
        }); // Remove a classe active de todos os elementos da const storyBtn
        storyBtn[0].classList.add('active'); // Ativa a classe active apenas no primeiro elemento
    }
    else{ // Ajusta os elementos quando a tela for MENOR que 900px
        storyElements.forEach(function(element) {
            element.style.display = 'none';
        });
        storyElements[0].style.display = 'flex';
    }
});