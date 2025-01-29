// Função para adicionar o nome informado no elemento "lista-amigos"
function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }

    document.getElementById("nome-amigo").value = "";
}