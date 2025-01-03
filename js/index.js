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

var numeroPerso = 0;

// Personagens
function passarPersonagens(){
    let tituloPerso = document.getElementById('perso-title');
    let textoPerso = document.getElementById('perso-text');
    let imgPerso = document.getElementById('perso-img');

    let nomes = [
        'Arthur Morgan',
        'John Marston',
        'Dutch Van Der Linde',
        'Micah Bell',
        'Sadie Adler',
        'Charles Smith',
    ];

    let textos = [
        'Arthur Morgan é o protagonista de Red Dead Redemption 2 e um dos membros mais leais da gangue Van der Linde. Criado por Dutch e Hosea desde jovem, ele é um fora-da-lei habilidoso e um homem de princípios, embora frequentemente envolvido em violência e crimes. Apesar de sua fachada dura, Arthur demonstra empatia e reflexão ao longo da história, especialmente após descobrir estar com tuberculose, o que o força a confrontar sua mortalidade.',
        'John Marston é um dos membros centrais da gangue Van der Linde e o protagonista de Red Dead Redemption. Apesar de seu passado turbulento, ele busca se redimir e construir uma vida melhor para sua família. Um homem teimoso, mas leal, John frequentemente entra em conflito com Dutch e outros membros, mas demonstra grande coragem em momentos cruciais. Sua jornada o transforma de um fora-da-lei relutante em um homem determinado a proteger aqueles que ama.',
        'Dutch Van der Linde é o carismático líder da gangue, guiado por uma visão utópica de liberdade e igualdade fora das leis do governo. Inicialmente idealista, ele acredita que seus crimes são justificados por sua causa. Contudo, ao longo do tempo, suas decisões se tornam cada vez mais erráticas e egoístas, revelando um homem dividido entre sua visão e sua ambição, o que leva ao colapso da gangue.',
        'Micah Bell é um dos membros mais controversos da gangue, conhecido por sua natureza cruel e traiçoeira. Egoísta e manipulador, ele busca constantemente ganhar a confiança de Dutch enquanto semeia a discórdia entre os outros membros. Seu papel como informante da Pinkerton e suas ações traiçoeiras culminam em um confronto explosivo, consolidando-o como um antagonista implacável.',
        'Sadie Adler é uma viúva que se junta à gangue após sua vida ser destruída por um ataque de foras-da-lei. Inicialmente retraída e traumatizada, ela cresce em força e independência, tornando-se uma aliada feroz e destemida. Sua transformação em uma mulher autossuficiente e habilidosa no combate é uma das histórias mais inspiradoras do jogo, destacando sua determinação e coragem.',
        'Charles Smith é um dos membros mais confiáveis e respeitáveis da gangue. Um homem calmo e introspectivo, ele é habilidoso tanto em combate quanto em rastreamento. Charles demonstra grande compaixão pelos outros e um forte senso de justiça, frequentemente agindo como a voz da razão no grupo. Sua lealdade a Arthur e àqueles que considera amigos é inabalável, fazendo dele um dos personagens mais queridos da história.',
    ];

    function variacaoPerso(){
        for(let i=0;i<nomes.length;i++){
            if(numeroPerso == i){
                tituloPerso.innerHTML = nomes[i];
                textoPerso.innerHTML = textos[i];
                imgPerso.src = 'img/personagens/perso' + i + '.png';
            }
        }
    }

    let persoSetaL = document.getElementById('perso-setaL');
    let persoSetaR = document.getElementById('perso-setaR');

    persoSetaL.addEventListener('click', function(){
        numeroPerso--;
        persoSetaR.style.opacity = 100;
        variacaoPerso();
        if(numeroPerso <= 0){
            numeroPerso = 0;
            persoSetaL.style.opacity = 0;
        }
    });
    persoSetaR.addEventListener('click', function(){
        numeroPerso++;
        persoSetaL.style.opacity = 100;
        variacaoPerso();
        if(numeroPerso >= nomes.length-1){
            numeroPerso = nomes.length-1;
            persoSetaR.style.opacity = 0;
        }
    });
}

passarPersonagens();

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