function sortear(){
    let quantity = parseInt(document.getElementById('quantidade').value);
    let fromRange = parseInt(document.getElementById('de').value);
    let toRange = parseInt(document.getElementById('ate').value);

    let drawNumbers = []; // Array que armazena os números sorteados
    let drawed = 0; // Variável para armazenar número sorteado

    for (let i = 0; i < quantity; i++) {
        let drawed = getRandomNumber(fromRange, toRange);
        if(drawNumbers.includes(drawed)){ // Verifica se o elemento já existe no array e previne que seja adicionado caso verdadeiro
            i--;
        } else {
            drawNumbers.push(drawed); // Adiciona o número sorteado no array
        };
    }

    let result = document.getElementById('resultado');
    result.innerHTML = `<label class="texto__paragrafo">
                            Números sorteados: ${drawNumbers.join(', ')} 
                        </label>`; // Exibe os números sorteados no HTML
    
    let button = document.getElementById('btn-reiniciar'); 

    if (button.classList.contains('container__botao-desabilitado')) {
        alterarStatusBotao(); // Mantem o botão de reiniciar habilitado enquanto o não for clicado
    } 
}

function getRandomNumber(from, to){
    return Math.floor(Math.random() * (to - from + 1)) + from; // Retorna um número aleatório entre o intervalo de from e to
}

function alterarStatusBotao(){ // Função para habilitar/desabilitar o botão de reiniciar
    let button = document.getElementById('btn-reiniciar');

    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){ // Função para reiniciar o sorteio
    let button = document.getElementById('btn-reiniciar');
    if (button.classList.contains('container__botao')) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alterarStatusBotao(); // Desabilita o botão de reiniciar
    }
}