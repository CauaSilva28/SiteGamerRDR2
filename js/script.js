const toggleTheme = document.querySelector('#toggletheme');
const toggleThemeMobile = document.querySelector('#toggletheme-mobile');
const rootHtml = document.documentElement;

const headerLogo = document.getElementById('header-logo');

const navbarMobile = document.getElementById('nav-mobile'); 
const iconNav = document.getElementById('navbar-mobile');
const iconNav2 = document.getElementById('navbar-mobile2');

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

toggleTheme.addEventListener('click', changeTheme);
toggleThemeMobile.addEventListener('click', changeTheme);

// Ativar e desativar nav
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

window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        navbarMobile.style.display = 'none';
    }
});