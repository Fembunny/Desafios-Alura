let totalItens = 0; 

// Função responsavel por pegar o produto escolhido, a quantidade, o subtotal e adicionar ao carrinho
function adicionar() {
    let produto = document.getElementById("produto").value;
    let nome = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    // Section carrinho_produtos para mostrar lista 
    let carrinho  = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                      <span class="texto-azul">${quantidade}x 
                      </span>${nome} <span class="texto-azul">R$
                      ${valorUnitario}</span></section>`;

    // span carrinho_total para mostrar o valor total da compra 
    let preco = (quantidade * valorUnitario);
    totalItens = (totalItens + preco);
    let valorTotal = document.getElementById("valor-total")
    valorTotal.textContent = `R$${totalItens}`;

    document.getElementById("quantidade").value = 0;
}