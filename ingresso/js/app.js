//Função para pegar a opção escolhida pelo usuario e a quantidade de ingressos
function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById("qtd").value;

    console.log(document.getElementById("qtd-pista"));
    if (qtd > document.getElementById("qtd-pista").value) {
        console.log("Quantidade de ingressos paraa pista invalida");
    }
    /*
    let lista = document.getElementsByClassName("lista");
    console.log(lista);
    lista.innerHTML = `<li>${tipo}<span id="qtd-pista">${qtd}</span></li>
                    <li>Cadeira superior<span id="qtd-superior">200</span></li>
                    <li>Cadeira inferior<span id="qtd-inferior">400</span></li>`;
    */

}

