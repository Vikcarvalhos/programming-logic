function comprar(){
    let ticketType = document.getElementById('tipo-ingresso').value;
    let quantity = parseInt(document.getElementById('qtd').value);

    if (ticketType == 'pista'){
        comprarPista(quantity);
    } else if (ticketType == 'inferior'){
        comprarInferior(quantity);
    } else {
        comprarSuperior(quantity);
    }
}

comprarPista = (quantity) => {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantity > qtdPista){
        alert('Quantidade indisponível para Pista');
    } else{
        qtdPista = qtdPista - quantity;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

comprarInferior = (quantity) => {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantity > qtdInferior){
        alert('Quantidade indisponível para Inferior');
    } else{
        qtdInferior = qtdInferior - quantity;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

comprarSuperior = (quantity) => {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantity > qtdSuperior){
        alert('Quantidade indisponível para Superior');
    } else{
        qtdSuperior = qtdSuperior - quantity;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

