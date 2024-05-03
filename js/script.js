const toggleTheme = document.querySelector('#toggletheme');
const toggleThemeMobile = document.querySelector('#toggletheme-mobile');
const rootHtml = document.documentElement;

const headerLogo = document.getElementById('header-logo');

const navbarMobile = document.getElementById('nav-mobile'); 
const iconNav = document.getElementById('navbar-mobile');
const iconNav2 = document.getElementById('navbar-mobile2');

const btnstory1 = document.getElementById('story-btn1');
const btnstory2 = document.getElementById('story-btn2');
const btnstory3 = document.getElementById('story-btn3');
const storyimg = document.getElementById('story-imagenav');
const storyimg2 = document.getElementById('story-imagenav2');
const storyimg3 = document.getElementById('story-imagenav3');

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

//Botões passar imagem story
btnstory1.style.background = 'var(--default-color)';
btnstory1.style.scale = '1.3';

function passarbtn1(){
    storyimg.style.display = 'flex';
    storyimg2.style.display = 'none';
    storyimg3.style.display = 'none';
    btnstory1.style.backgroundColor = 'var(--default-color)';
    btnstory1.style.scale = '1.3';
    btnstory2.style.backgroundColor = '#fff';
    btnstory2.style.scale = '1';
    btnstory3.style.backgroundColor = '#fff';
    btnstory3.style.scale = '1';
}
function passarbtn2(){
    storyimg2.style.display = 'flex';
    storyimg.style.display = 'none';
    storyimg3.style.display = 'none';
    btnstory2.style.backgroundColor = 'var(--default-color)';
    btnstory2.style.scale = '1.3';
    btnstory1.style.backgroundColor = '#fff';
    btnstory1.style.scale = '1';
    btnstory3.style.backgroundColor = '#fff';
    btnstory3.style.scale = '1';
}
function passarbtn3(){
    storyimg3.style.display = 'flex';
    storyimg2.style.display = 'none';
    storyimg.style.display = 'none';
    btnstory3.style.backgroundColor = 'var(--default-color)';
    btnstory3.style.scale = '1.3';
    btnstory2.style.backgroundColor = '#fff';
    btnstory2.style.scale = '1';
    btnstory1.style.backgroundColor = '#fff';
    btnstory1.style.scale = '1';
}

btnstory1.addEventListener('click', passarbtn1);
btnstory2.addEventListener('click', passarbtn2);
btnstory3.addEventListener('click', passarbtn3);

//resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        navbarMobile.style.display = 'none';
        storyimg.style.display = 'flex';
        storyimg2.style.display = 'flex';
        storyimg3.style.display = 'flex';
    }
    else{
        passarbtn1();
        storyimg.style.display = 'flex';
        storyimg2.style.display = 'none';
        storyimg3.style.display = 'none';
    }
});