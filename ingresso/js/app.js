//Função para pegar a opção escolhida pelo usuario e a quantidade de ingressos
function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    //comprarOpcao(tipo, qtd);
    
    if (tipo == "pista") {
        comprarPista(qtd);
    } else if (tipo == "superior") {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

/*
---- É possivel simplificar o codigo abaixo usando uma unica função, exemplo: 
function comprarOpcao(tipo, qtd) {
    let qtdOpcao = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if (qtd > qtdOpcao || qtd <= 0) {
        alert(`Quantidade de ingressos para ${tipo} invalida`);
        document.getElementById("qtd").value = "";
    } else {
        qtdOpcao -= qtd;
        document.getElementById(`qtd-${tipo}`).textContent = `${qtdOpcao}`;
        document.getElementById("qtd").value = "";
    }
}
*/

// Função que valida e subtrai a quantidade de ingressos da pista
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qtd > qtdPista) {
        alert("Quantidade de ingressos para pista invalida");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = `${qtdPista}`;
    }
}

// Função que valida e subtrai a quantidade de ingressos da cadeira superior
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (qtd > qtdSuperior) {
        alert("Quantidade de ingressos para cadeira superior invalida");
    } else {
        qtdSuperior -= qtd;
        document.getElementById("qtd-superior").textContent = `${qtdSuperior}`;
    }
}

// Função que valida e subtrai a quantidade de ingressos da cadeira inferior
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (qtd > qtdInferior) {
        alert("Quantidade de ingressos para cadeira inferior invalida");
    } else {
        qtdInferior -= qtd;
        document.getElementById("qtd-inferior").textContent = `${qtdInferior}`;
    }
}