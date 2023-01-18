// classes do html
const FRONT = 'card_front';
const BACK = 'card_back';
const CARD = 'card';
const ICON = 'icon';

startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());

    
}

function initializeCards(cards) {
    let gameBoard = document.getElementById('gameBoard');
    //game.cards.forEach(card => {}

    for(let card of cards) {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = './assets/images/' + card.icon + '.png';
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);

}

// função para virar a carta 
function flipCard() {
    
    if(game.setCard(this.id)) {

        this.classList.add('flip');
        if(game.secondCard) {
            // se deu match com a segunda carta limpar as cartas e lockmode false com clearCards
            if(game.checkMatch()) {
                game.clearCards();
            // se não deu macth
            } else {
                // um tempinho para remover a classe flip
                setTimeout(()=> {
                    // selecionar as cartas pelo id delas
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);
                    
                    //remover a classe flip
                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unflipCards();
                }, 1000);
            }
        }
    }
        
}

