let totalPrice = 0;

function adicionar() {
    // Recuperar Valores: Nome, Preço e Quantidade
    let product = document.getElementById('produto').value;
    let quantity = document.getElementById('quantidade').value;

    // Validar se o produto foi selecionado
    if (!product) {
        alert('Por favor, selecione um produto válido.');
        return;
    }

    // Validar se a quantidade é um número positivo
    if (!quantity || isNaN(quantity) || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    let productName = product.split(' -')[0];
    let productValue = parseFloat(product.split('R$')[1]);

    // Calcular o subtotal
    let price = quantity * productValue;

    // Adicionar no carrinho
    let bag = document.getElementById('lista-produtos');
    bag.innerHTML = bag.innerHTML + `
    <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${productValue}</span>
        </section>
    </section>
    `;

    // Atualizar o total
    totalPrice = totalPrice + price;
    let totalHTML = document.getElementById('valor-total');
    totalHTML.textContent = `R$${totalPrice}`;
}

function limpar() {
    totalPrice = 0;
    let totalHTML = document.getElementById('valor-total');
    totalHTML.textContent = `R$${totalPrice}`;
    let quantity = document.getElementById('quantidade');
    quantity.value = '';
    let bag = document.getElementById('lista-produtos');
    bag.innerHTML = '';
    let errorMessage = document.getElementById('mensagem-erro');
    errorMessage.textContent = '';
}