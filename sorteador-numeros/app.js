function sortear(){
    let quantity = parseInt(document.getElementById('quantidade').value);
    let fromRange = parseInt(document.getElementById('de').value);
    let toRange = parseInt(document.getElementById('ate').value);

    let drawNumbers = [];
    let drawed = 0;

    for (let i = 0; i < quantity; i++) {
        let drawed = getRandomNumber(fromRange, toRange);
        if(drawNumbers.includes(drawed)){
            i--;
        } else {
            drawNumbers.push(drawed);
        };
    }

}

function getRandomNumber(from, to){
    return Math.floor(Math.random() * (to - from + 1)) + from;
}