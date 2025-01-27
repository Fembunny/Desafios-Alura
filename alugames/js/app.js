// Logica - função para alterar o status do jogo para alugar ou devolver e mudança no layout
// Alteração de duas classes no HTML
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        /* 
        Se o usuario clicar no botao na divisao x (id), e a imagem ter a classe 
        "dashboard__item__img--rented" ficara ofuscada e o botao mudara para "devolver"
        */

        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Devolver";
    } else {
        /* 
        Se o usuario clicar no botao na divisao x (id), e a imagem não ter a classe 
        "dashboard__item__img--rented" voltara ao normal e o botao mudara para "alugar"
        */

        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Alugar";
    }
}