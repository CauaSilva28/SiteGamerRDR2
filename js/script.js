AOS.init();

const toggleTheme = document.querySelector('#toggletheme');
const toggleThemeMobile = document.querySelector('#toggletheme-mobile');
const rootHtml = document.documentElement;

const headerLogo = document.getElementById('header-logo');

//Alternar modo light e dark
function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'light') {
        sessionStorage.setItem('tema', 'claro');
        rootHtml.setAttribute('data-theme', 'dark');
        headerLogo.src ='img/logodark.png';
        toggleTheme.classList.add('bi-sun');
        toggleThemeMobile.classList.add('bi-sun');
        toggleTheme.classList.remove('bi-moon-fill');
        toggleThemeMobile.classList.remove('bi-moon-fill');
    } 
    else {
        sessionStorage.setItem('tema', 'escuro');
        rootHtml.setAttribute('data-theme', 'light');
        headerLogo.src = 'img/logolight.png';
        toggleTheme.classList.add('bi-moon-fill');
        toggleThemeMobile.classList.add('bi-moon-fill');
        toggleTheme.classList.remove('bi-sun');
        toggleThemeMobile.classList.remove('bi-sun');
    }
}

toggleTheme.addEventListener('click', changeTheme); //Adicionando evento de click
toggleThemeMobile.addEventListener('click', changeTheme);

document.addEventListener('DOMContentLoaded', () => {
    const tema = sessionStorage.getItem('tema');

    if(tema === 'claro'){
        rootHtml.setAttribute('data-theme', 'dark');
        headerLogo.src ='img/logodark.png';
        toggleTheme.classList.add('bi-sun');
        toggleThemeMobile.classList.add('bi-sun');
        toggleTheme.classList.remove('bi-moon-fill');
        toggleThemeMobile.classList.remove('bi-moon-fill');
    }
    else if(tema === 'escuro'){
        rootHtml.setAttribute('data-theme', 'light');
        headerLogo.src = 'img/logolight.png';
        toggleTheme.classList.add('bi-moon-fill');
        toggleThemeMobile.classList.add('bi-moon-fill');
        toggleTheme.classList.remove('bi-sun');
        toggleThemeMobile.classList.remove('bi-sun');
    }
});

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

//resize
window.addEventListener('resize', function() { // Adiciona eventos de acordo com o tamanho da tela
    if (window.innerWidth > 900) { // Ajusta os elementos quando a tela for MAIOR que 900px
        navbarMobile.style.display = 'none';
    }
});