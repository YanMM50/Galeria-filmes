// DOOM
const filme = document.querySelector("#filme");
const sinopse = document.querySelector("#sinopse");
const titulo = document.querySelector("#titulo");
const bt1 = document.querySelector("#botao01");
const bt2 = document.querySelector("#botao02");
const bt3 = document.querySelector("#botao03");
const bt4 = document.querySelector("#botao04");

// Eventos

bt1.addEventListener("click", trocarfilme1);
bt2.addEventListener("click", trocarfilme2);
bt3.addEventListener("click", trocarfilme3);
bt4.addEventListener("click", trocarfilme4);

// funções

function trocarfilme1() {  
    filme.src = "images/216f2cb7-3a64-4b7a-a338-709bcde71147.webp";
    sinopse.innerHTML = "O filme Homem-Aranha Verso refere-se à coleção de filmes de animação Homem-Aranha, que exploram diferentes versões do Homem-Aranha e um multiverso de realidades paralelas. Os filmes Homem-Aranha: No Aranhaverso e Homem-Aranha: Através do Aranhaverso são exemplos desta saga.";
    titulo.innerHTML = "Aranhaverso";
}

function trocarfilme2() {
    filme.src = "images/848a155842f8331062bd190b1584e3b152af0271468312ce6b0def838721592b.jpg"
    sinopse.innerHTML = "The Fast and the Furious é uma franquia de mídia e Universo Compartilhado centrado em uma série de filmes de ação que estão amplamente preocupados com corridas de rua, assaltos, espiões e família. A franquia também inclui curtas-metragens, uma série de televisão, videogames e atrações de parques temáticos";
    titulo.innerHTML = "Velozes e Furiosos";
}

function trocarfilme3() {
    filme.src = "images/Rambo_First_Blood_1982.jpg"
    sinopse.innerHTML = "Rambo é uma série de filmes de ação baseada no personagem John Rambo, um ex-soldado das Forças Especiais dos Estados Unidos. O primeiro filme da série, 'Rambo: Programado para Matar', foi lançado em 1982 e se tornou um grande sucesso, levando a várias sequências";
    titulo.innerHTML = "Rambo";
}

function trocarfilme4() {
    filme.src = "images/1973597620-minecraftthemoviever3xlg.webp"
    sinopse.innerHTML = "é um filme live-action baseado no famoso jogo de vídeo Minecraft, que conta a história de quatro desajustados que são transportados para um mundo surreal de blocos e criaturas, o Overworld. Para voltarem ao seu mundo, eles precisam se juntar a Steve, um construtor excêntrico, e enfrentar perigos mortais em uma aventura de auto-descoberta";
    titulo.innerHTML = "Minecraft";
    
}	
