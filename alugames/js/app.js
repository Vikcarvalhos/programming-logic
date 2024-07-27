function alterarStatus(id){
    let choosenGame = document.getElementById(`game-${id}`);
    let image = choosenGame.querySelector('.dashboard__item__img');
    let button = choosenGame.querySelector('.dashboard__item__button');
    let gameName = choosenGame.querySelector('.dashboard__item__name');

    if (image.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
        }
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }
}