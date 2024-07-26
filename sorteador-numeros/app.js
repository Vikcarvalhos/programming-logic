function sortear(){
    let quantity = parseInt(document.getElementById('quantidade').value);
    let fromRange = parseInt(document.getElementById('de').value);
    let toRange = parseInt(document.getElementById('ate').value);

    let numbers = [];
    
    for (let i = 0; i < quantity; i++) {
        numbers.push(getRandomNumber(fromRange, toRange));
    }

    alert(numbers);
}

function getRandomNumber(from, to){
    return Math.floor(Math.random() * (to - from + 1)) + from;
}