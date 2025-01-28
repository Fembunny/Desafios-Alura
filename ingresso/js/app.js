//Função para pegar a opção escolhida pelo usuario e a quantidade de ingressos
function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    if (tipo == "pista") {
        comprarPista(qtd);
    } else if (tipo == "superior") {
        //comprarSuperior(qtd);
    } else {
        //comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qtd > qtdPista) {
        alert("Quantidade de ingressos invalida");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = `${qtdPista}`;
    }
}