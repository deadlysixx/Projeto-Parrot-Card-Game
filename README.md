# Projeto-Parrot-Card-Game

## 📝 Descrição
Seu segundo projeto com JavaScript será a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoriedade, efeitos e transição, responsividade e papagaios dançantes!

## 🎨 Layout
Será utilizado o FIGMA para introduzir o layout do projeto.

## ✅ Requisitos

### Geral
Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, React, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.

### Layout

Aplicar layout para desktop e mobile, seguindo o Figma.<br>
As cartas aparecem de duas formas: abertas ou fechadas. A parte de trás da carta aparece quando ela está fechada e a parte da frente é quando ela está aberta.

### Distribuição de cartas
 
Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize prompt).<br>
O usuário só poderá inserir números pares no prompt, de 4 a 14. Qualquer número que fuja dessa regra não deve ser aceito. No caso de números inválidos, o prompt deverá ficar sendo repetido em loop, até que o usuário coloque um número válido.<br>
ENQUANTO o usuário não inserir um número válido, a pergunta continuará sendo feita através do prompt.<br>
Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo (fechadas) na página de forma que a distribuição seja aleatória.<br>
Se você colocar esses elementos dentro de uma função, a função precisa ser executada no início do jogo. Basta chamar a função com parêntesis após declará-la no arquivo JavaScript.<br>

### Imagens dos parrots

É obrigatório que tanto a imagem do papagaio virado pra baixo (fechada) quanto a imagem virada pra cima (aberta, o gif) sejam implementadas como tag img src="..." (não deve ser um background).<br>
OBS: a carta em si pode ser uma div, somente a imagem do papagaio que deve ser uma img.<br>
Papagaios iguais devem necessariamente usar a mesma imagem como base (não podem ser arquivos diferentes para um mesmo papagaio).<br>
Para fazer o sorteio das cartas e mostrar as imagens, crie um array com o nome de todas as imagens. Na hora de renderizar na tela, o HTML da carta será sempre o mesmo, mas com o nome da imagem diferente.<br>

### Clique na carta <br>
Ao clicar em uma carta, ela deve ser virada.<br>
Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta.<br>
Caso seja a segunda carta virada, existem duas situações:<br>

-Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo <br>
-Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve aguardar 1 segundo e então virar as duas cartas para baixo novamente.

Sendo assim, a carta vai ter 3 estados possíveis: virada para baixo (fechada), aberta temporariamente (no caso de ser a primeira ou a segunda carta de um par não formado) ou aberta permanentemente (quando o par foi acertado).

### Fim do jogo
Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um alert com a mensagem Você ganhou em X jogadas!, sendo X a quantidade de vezes que o usuário virou uma carta no jogo, ou seja, cada carta virada é uma jogada, não é virar duas cartas que é uma jogada.

## 📚 Conteúdos Necessários

Como embaralhar um array<br>
Para embaralhar uma array, vamos usar uma função de randomização (ou seja, que faz números aleatórios). Essa função se chama Math.random().

Aplicaremos no projeto da seguinte forma:<br>
Para embaralhar uma array, vamos usar uma função de randomização (ou seja, que faz números aleatórios). Essa função se chama Math.random().

Aplicaremos no projeto da seguinte forma:<br>
// Após a linha abaixo, a minhaArray estará embaralhada
minhaArray.sort(comparador); 

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

Efeito 3D de virar a carta<br>
Para fazer a animação 3D da carta virando, você pode ver o CSS necessário em: https://repl.it/@BootcampRespond/FlippedCards#index.html 

Só se atente para o fato que, nesse exemplo, a carta vira ao passar o mouse em cima dela. No caso do jogo, a animação deve acontecer após o clique.<Br>
Para fazer a animação 3D da carta virando, você pode ver o CSS necessário em: https://repl.it/@BootcampRespond/FlippedCards#index.html 

Só se atente para o fato que, nesse exemplo, a carta vira ao passar o mouse em cima dela. No caso do jogo, a animação deve acontecer após o clique.<br>
