# Memory-Game-JS
Jogo da memória com Javascript

# Primeiro passo, criando a estrutura das cartas

* A princípio a carta vai ser criado com html para posteriormete ser criada pelo Javascript
* o <data-icon> vai representar a imagem do card e vaiser usado para comparar uma carta com a outra

## Estilo das cartas

* No arquivo style.css foi definido o estilo das cartas 

## Animando as cartas

* Agora vamos fazer os efeitos das cartas
* Primeiro passo é colocar tudo na mesma posição
    - card_front e back vão ter position absolute e card relative

* Colocar  card_front ao contrario
    - transform: rotateY(180deg);

* criado a classe flip que será adicionado em card
    - transform: rotateY(180deg);

* Essa propriedade será aplicada em card_front e card_back, ela faz com que o elemento que está invertido não apareça, no caso card-front não vai aparecer, só quando usar a classe flip no card
    - backface-visibility: hidden; 

* para card_front aparecer precisamos fazer com que o card seja tipo um elemento 3d
    - passando transform-style: preserve-3d;
    - agora quando card tiver a classe flip o card_front vai aparecer

* agora aplicar um transition, para que quando a carta flipar ter uma animação
    - transition: transform .5s;

## Montando a tela de Game Over

* Tela de game over é bem simples, vai ter o container dela o texto e o botão
 - o botão vai ter o evento onclick para reiciciar o jogo
 - vai ter position absolute
 - top 0 para cobrir tudo

* A princípio o gameOver vai ter display none, vamos mudar para flex quando estivermos montando a lógica do jogo
    - flex-direction: column; um em baixo do outro

## Montando o estilo do tabuleiro

* O tabuleiro terá 20 cartas, então vamos criar uma div com o id tabuleiro, e colocar 20 cartas para montar o tabuleiro, posteriorment vamos montar com javascript e não com html

* Usar display flex no body para centralizar o tabuleiro

* usar grid para organizar as cartas, tipo uma tabela com 4 colunas e 5 linhas
* usar gap para dar um espaçamento entre as cartas
* o tabuleiro ainda não vai estar centralizado verticalmente, pois o body não tem 100% de altura
    - height: 100vh;

## Criando o modelo das cartas no jogo

* Agora vamos usar o javascript para criar o html, criando modelo das cartas.
* As tecnologias foram colocadas em um array
* O Modelo vai ter:
    - icon: representado pelo array de tecnologias, é como icon que vamos fazer o match entre duas cartas;
    - flipped: false ou true, representando se a carta esta virada ou não;
    - id: para identificar a carta;

* a Função createCardsFromTechs(techs):
    - Cards é um array
    - vamos colocar as tecnologias dentro do array cards
    - vamos gerar pares de tecnologias com a função createPairFromTechs(tech)
        - mas não quermos pares, queremos uma carta
        - a função flatmap retorna um array, mas se os elementos do array também for um array o flatmap desmembra esse array 
        - nesse caso era um array que continha um array com dois objetos, esse array foi desmembrado e cada objeto foi separado
    - createIdWithTech(tech) gera um id randômico 

## Embaralhando as cartas

* O flatMap gerou cartas que estão sequencia então o par seria a do lado, a gente precisa embralhar as cartas
* cards vai ser uma variavel global que vai receber null
* Foi criado a função startGame() que vai receber createCardsFromTechs();
* foi criado a função shuffleCards() que vai embaralhar cards, vai ser colocada dentro de startGame()
    - o array está em ordem, a ideia é pegar a ultima carta e trocar de lugar com outra aleatória, fazer isso até não ter mais cartas;
    - enquanto o currentIndex for diferente de zero
    
    - código que faz inverter os valores:
        *   [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    - colocar no console
        let a = 5
        let b = 10
        [a, b] = [b, a]

## Montando o Tabuleiro

* Agora o objetivo é pegar o modelo de cartas que foi criado e colocar as cartas na tela

* Foi criado a função initializeCards() que vai ser colocada em startgame()
    - selecionar o #gameBoard(tabuleiro que as cartas vão ficar)

* Agora é preciso criar uma carta visual para cada um dos modelos de carta
    - cards é um array com as cartas, a ideia é fazer um loop for ou forEach para inserir todas as cartas do array cards;
        * dessa vez vou fazer com o for; 

    - Agora vamos criar um elemento cardElement que será uma div
        * let cardElement = document.createElement('div') 
        * O id do elemento vai receber card.id;
            - cardElement.id = card.id
        * Agora adicionar a classe card
            - cardElement.classList.add('card') ou uma constante CARD = 'card';

    - Para verificar se duas cartas são iguais é preciso saber se os icones são iguais pelo data-icon (data-icon='booststrap' por exemplo)
        * cardElement.dataset.icon = card.icon;

    - Uma função será responsável por criar de fato o conteúdo de card na tela
        * createCardContent(card, cardElement), que será chamada dentro de initializeCards() ;
            - essa função vai receber mais uma função, createCardFace(face, card, element)
            - face: será a classe representada pelas constantes FRONT e BACK
            - card: é referente ao objeto card
            - element: referente ao elemento que será criado
                * createCardFace(face, card, element):
                * o primeiro passo é criar um elemento, que será uma div
                    - let cardElementFace = document.createElement('div')
                * adicionar a classe nesse elemento (face), que será card_front e card_back
                    - cardElementFace.classList.add(face);
                * verificar se face é FRONT ou BACK {if(face == FRONT)};
                    - se for FRONT vai criar um elemento com uma imagem
                        * let iconElement = document.createElement('img');
                        * Adicionar classe no elemento;
                            - iconElement.classList.add(ICON)  ICON = 'icon';
                        * colocar o atributo src (a referencia é onde está o documento html)
                            - iconElement.src = './assets/images/' + card.icon + '.png';
                        * adicionar iconElement (img) em cardElement (div)
                            - cardElementFace.appendChild(iconElement);
                    - se for BACK vai criar um elemento com a representação de maior que / menor que:
                        * cardElementFace.innerHTML = '&lt/&gt';
                    - no final da função fora do if adicionar cardElementFace no element
                        * element.appendChild(cardElementFace);

    - A carta tem a parte da frente e de trás;
        * para fazer essa movimentação, cardElement precisa ter o evento click que terá a função flipCard, que é responsavel por girar a carta através da adição da classe flip
            - em initializeCards() 
                * cardElement.addEventListener('click', flipCard);
            - o this da função é o próprio elemento(cardElement)
            - function flipCard() {
                this.classList.add(flip)
            }
    
    - Colocar a carta no gameBoard;
        * gameBoard.appendChild(cardElement);