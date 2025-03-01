let amigos = [];

// Função para adicionar o nome informado no elemento "lista-amigos"
function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos");

    if(amigo != "") {
        if (!amigos.includes(amigo)) {
            amigos.push(amigo); 
            lista.textContent = amigos;
        } else {
            alert("Nome ja informado");
        }

    } else {
        alert("Campo vazio");
    }

    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    if (amigos != "" && amigos.length >= 4) {
        embaralha(amigos);
        let sorteio = document.getElementById("lista-sorteio");

        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
            }
        }
    } else {
        alert("Número de participantes invalido");
    }
}

// Função responsável por embaralhar o array com os nomes
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista [indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}