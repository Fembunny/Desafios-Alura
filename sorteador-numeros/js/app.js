let numGerados = [];
document.getElementById("btn-reiniciar").disabled = true;

function alertaTexto (id, texto){
    let campo = document.getElementById(id)
    campo.innerHTML = texto;
}

function gerarNumeros (qtdNumeros, numInicial, numFinal) {
    for(let i = 0; i < qtdNumeros; i++) {
        let numero = parseInt(Math.random() * (numFinal - numInicial + 1) + numInicial);

        if(numGerados.includes(numero)) {
            gerarNumeros();
        } else {
            numGerados.push(numero);
        }
    }

    return numGerados;
}

function sortear(){
    numGerados = [];
    let qtdNumeros = parseInt(document.getElementById("quantidade").value);
    let numInicial = parseInt(document.getElementById("de").value);
    let numFinal = parseInt(document.getElementById("ate").value);

    if (qtdNumeros || numInicial || numFinal > 0) {
        alertaTexto("aviso", "")
        gerarNumeros(qtdNumeros, numInicial, numFinal);
        alertaTexto("numeros",`Números sorteados:  ${numGerados}`);

        document.getElementById("btn-reiniciar").disabled = false;
    } else {
        alertaTexto("aviso", "Preencha os campos corretamente!")
    }
}

function reiniciar() {
    alertaTexto("numeros",`Números sorteados:  nenhum`);
    
    limparCampo();
    document.getElementById("btn-reiniciar").disabled = true;  
}

function limparCampo() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}
