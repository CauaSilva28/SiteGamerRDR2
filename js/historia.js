const cardFechado = document.querySelectorAll(".card-fechado-container")
const cardAberto = document.querySelectorAll(".card-aberto");
const setaAbrirCard = document.querySelectorAll(".abrirCard");
const setaFecharCard = document.querySelectorAll(".fecharCard");

for(let i=0; i<cardAberto.length ;i++){
    setaAbrirCard[i].addEventListener('click', function(){
        cardAberto[i].classList.remove('fechado');
        cardAberto[i].classList.add('aberto');
        cardFechado[i].classList.remove('aberto');
        cardFechado[i].classList.add('fechado');
    });

    setaFecharCard[i].addEventListener('click', function(){
        cardAberto[i].classList.remove('aberto');
        cardAberto[i].classList.add('fechado');
        cardFechado[i].classList.remove('fechado');
        cardFechado[i].classList.add('aberto');
    });
}