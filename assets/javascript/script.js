// classes do html
const FRONT = 'card_front';
const BACK = 'card_back';

let techs = [
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
];

// chamar a função 
createCardsFromTechs(techs);

function createCardsFromTechs(techs) {
    // cards começa vazio
    let cards = [];

    techs.forEach(tech => {
        // vamos colocar as techs em card - array
        cards.push(createPairFromTechs(tech));
    });
    console.log(cards);
    // flatMap desmembra o array de pares, 
    cards.flatMap(pair => pair);
    console.log(cards.flatMap(pair => pair));
}

// função que vai gerar os pares de cartas 
function createPairFromTechs(tech) {
    return [
        {id: createIdWithTech(tech), icon: tech, flipped: false}, 
        {id: createIdWithTech(tech),  icon: tech, flipped: false}
    ];
}

// função que gera o id, vai concatenar com o Math.random
function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000);
}