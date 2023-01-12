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