const toggleTheme = document.querySelector('#toggletheme');
const toggleThemeMobile = document.querySelector('#toggletheme-mobile');
const rootHtml = document.documentElement;

const headerLogo = document.getElementById('header-logo');

//Alternar modo light e dark
function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'light') {
        rootHtml.setAttribute('data-theme', 'dark');
        headerLogo.src ='img/logodark.png';
    } 
    else {
        rootHtml.setAttribute('data-theme', 'light');
        headerLogo.src = 'img/logolight.png';
    }

    toggleTheme.classList.toggle('bi-moon-fill');
    toggleTheme.classList.toggle('bi-sun');

    toggleThemeMobile.classList.toggle('bi-moon-fill');
    toggleThemeMobile.classList.toggle('bi-sun');
}

toggleTheme.addEventListener('click', changeTheme); //Adicionando evento de click
toggleThemeMobile.addEventListener('click', changeTheme);

// Ativar e desativar nav
const navbarMobile = document.getElementById('nav-mobile'); 
const iconNav = document.getElementById('navbar-mobile');
const iconNav2 = document.getElementById('navbar-mobile2');

function AtivarNav(){
    navbarMobile.style.display = 'flex';
}

function DesativarNav(){
    if(navbarMobile.style.display === 'flex'){
        navbarMobile.style.display = 'none';
    }
}

iconNav.addEventListener('click', AtivarNav);
iconNav2.addEventListener('click', DesativarNav);

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
        navbarMobile.style.display = 'none';
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