# Memory-Game-JS
Jogo da memória com Javascript

# Primeiro passa, criando a estrutura das cartas

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