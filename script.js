const botaoInicio = document.getElementById("inicio");
const botaoBiblioteca = document.getElementById("btn-biblioteca");

const secaoMusicas = document.getElementById("musicas");
const secaoAlbuns = document.getElementById("albuns");
const secaoArtistas = document.getElementById("artistas");


// ====================
// PLAYER DE ÁUDIO
// ====================

const audio = new Audio();

let musicaAtual = null;


// ====================
// MÚSICAS
// ====================

const musicas = [
    {
        nome: "Bem Pior Que Eu",
        artista: "Marília Mendonça",
        capa: "./capas/todososcantos.jpg",
        audio: "./musicas/bempiorqeu.mpeg"
    },
    {
         nome: "Cidade Vizinha",
        artista: "Henrique & Juliano",
        capa: "./capas/hj.jpg",
        audio: "./musicas/henriqueejuliano.mpeg"
    },
    {
        nome: "Posso Até Não Te Dar Flores",
        artista: "Dj Japa NK & Mc Menok",
        capa: "./capas/posso.jfif",
        audio: "./musicas/menok.mpeg"
    },
    {
        nome: "Bemba",
        artista: "Anitta",
        capa: "./capas/anita.jpg",
        audio: "./musicas/anita.mpeg"
    },
    {
        nome: "Asa Branca",
        artista: "Luiz Gonzaga",
        capa: "./capas/asabranca.jfif",
        audio: "./musicas/luisgonzaga.mpeg"
    },
    
];


// Cria as músicas

musicas.forEach(function(musica) {

    const card = document.createElement("div");

    card.classList.add("card-musica");

    card.innerHTML = `
        <div class="capa-musica">
            <img src="${musica.capa}" alt="${musica.nome}">
        </div>

        <h2>${musica.nome}</h2>
        <p>${musica.artista}</p>
    `;

    secaoMusicas.appendChild(card);


    // A capa é o botão de play

    const capa = card.querySelector(".capa-musica");

    capa.addEventListener("click", function() {

        if (!musica.audio) {
            console.log("Essa música ainda não possui áudio.");
            return;
        }

        if (musicaAtual !== musica) {

            musicaAtual = musica;

            audio.src = musica.audio;
            audio.play();

            console.log("Tocando:", musica.nome);

        } else if (!audio.paused) {

            audio.pause();

            console.log("Pausada:", musica.nome);

        } else {

            audio.play();

            console.log("Continuando:", musica.nome);
        }
    });
});


// ====================
// ÁLBUNS
// ====================

const albuns = [
    {
        nome: "Patroas 35%",
        artista: "Marília Mendonça, Maiara & Maraísa",
        capa: "./capas/patroas.jpg"
    },

    {
        nome: "Novas Histórias (Ao Vivo)",
        artista: "Henrique & Juliano",
        capa: "./capas/hej.jfif"
    },

    
];


// Cria os álbuns

albuns.forEach(function(album) {

    const card = document.createElement("div");

    card.classList.add("card-musica");

    card.innerHTML = `
        <div class="capa-musica">
            <img src="${album.capa}" alt="${album.nome}">
        </div>

        <h2>${album.nome}</h2>
        <p>${album.artista}</p>
    `;

    secaoAlbuns.appendChild(card);
});


// ====================
// ARTISTAS
// ====================

const artistas = [
    {
        nome: "Marília Mendonça",
        foto: "./artistas/marilia.png"
    },
    {
        nome: "Ana Castela",
        foto: "./artistas/ana.png"
    },
    {
        nome: "Henrique & Juliano",
        foto: "./artistas/hej.png"
    },
     {
        nome: "Maiara & Maraisa",
        foto: "./artistas/maiara.png"
    },
     {
        nome: "Ariana Grande",
        foto: "./artistas/ariana.png"
    },
     {
        nome: "Rihanna",
        foto: "./artistas/rihana.png"
    },
    {
        nome: "Anitta",
        foto: "./artistas/anita.png"
    },
    {
        nome: "Mc Menok",
        foto: "./artistas/menok.png"
    },
    {
        nome: "Alok",
        foto: "./artistas/alok.png"
    },
];


// Cria os artistas

artistas.forEach(function(artista) {

    const card = document.createElement("div");

    card.classList.add("card-artista");

    card.innerHTML = `
        <div class="foto-artista">
            <img src="${artista.foto}" alt="${artista.nome}">
        </div>

        <h2>${artista.nome}</h2>
    `;

    secaoArtistas.appendChild(card);
});