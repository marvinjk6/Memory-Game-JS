// criado o objeto game, que vai ter tudo que é referente ao jogo

let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard(id) {
        // retorna um array, pegar a primeira carta
        let card = this.cards.filter(card => card.id === id)[0];

        if(card.flipped || this.lockMode) {
            return false;
        }

        if(!this.firstCard) {
            this.firstCard = card;
            return true
        } else {
            this.secondCard = card;
            this.lockMode = true;
            return true;
        } 
    },

    checkMatch() {
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
    ],

    cards: null,

    createCardsFromTechs() {
        // cards começa vazio, agora this.cards pois é uma propriedade de game
        this.cards = [];
    
        this.techs.forEach(tech => {
            // vamos colocar as techs em card - array
            this.cards.push(this.createPairFromTechs(tech));
        });
        // flatMap desmembra o array de pares, 
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    // função que vai gerar os pares de cartas 
    createPairFromTechs(tech) {
        return [
            {id: this.createIdWithTech(tech), icon: tech, flipped: false}, 
            {id:this.createIdWithTech(tech),  icon: tech, flipped: false}
        ];
    },
    
    // função que gera o id, vai concatenar com o Math.random
    createIdWithTech(tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards() {
        // current index é o tamanho do array
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            //currentIndex vai ser decrementado
            currentIndex--;
            // esse código faz inverter os valores
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    }
}