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

window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        navbarMobile.style.display = 'none';
    }
});