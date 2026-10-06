const generos = document.querySelectorAll(".genero");

let selecionados = 0;

generos.forEach(function(genero) {

    genero.addEventListener("click", function() {

        if (genero.classList.contains("selecionado")) {

            genero.classList.remove("selecionado");
            selecionados--;

        } else {

            if (selecionados < 4) {

                genero.classList.add("selecionado");
                selecionados++;

            } else {

                alert("Você pode selecionar no máximo 4 gêneros.");
            }
        }
    });
});