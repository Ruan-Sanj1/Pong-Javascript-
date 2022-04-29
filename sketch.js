//Variáveis Bolinha:
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
// São apenas pra podemos mudar o código todo de uma vez, são legendas. Para criar essas variáveis a gente escreve let, o nome da variável e igual ao seu valor. (200 é o valor pra ficar no meio da nossa tela de 400.
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro / 2;

//Variáveis da raquete:
let xRaquete = 10
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 75

//Variáveis do oponente:
let xRaqueteOponente = 580
let yRaqueteOponente = 150
let velocidadeYOponente;

//Placar:
let meusPontos = 0;
let pontosOponente =0;

//Sons:
let ponto;
let raquetada;
let trilha;

let numeroAleatorio = Math.floor(Math.random() * 2)
  
//Importante: Quando você coloca os colchetes na primeira linha e depois uma linha fechando os colchetes, aquilo se torna um bloco.

function preload () {
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  // Serve pra definir qual serão as propriedades inicias. As propriedades do bloco iniciam nos colchetes e terminam nos colchetes.
  createCanvas(600, 400);  
  // Cria uma "tela" com as dimensões 600x e 400y.
  trilha.loop ();
  //Toca a trilha sonora.
}
  
  function draw() {  
    // Executa as linhas de código do seu bloco  
    background(0);  
    mostraBolinha ()
    movimentaBolinha ()
    verificaColisãoBorda ()
    //Os códigos acima se referem a bolinha.
    mostraRaquete (xRaquete, yRaquete)
    mostraRaquete (xRaqueteOponente, yRaqueteOponente)
    verificaColisaoRaquete ()
    verificaColisaoRaqueteOponente ()
    movimentaMinhaRaquete ()
    movimentaRaqueteOponente ()
    //Os códigos acima se referem a raquete.
    incluiPlacar ()
    marcaPonto ()
    //O código dos pontos.
  }

function mostraBolinha () {
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha () {
  if (numeroAleatorio > 0) {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  if (numeroAleatorio < 1) {
  xBolinha -= velocidadeXBolinha;
  yBolinha -= velocidadeYBolinha;
  }
}

function verificaColisãoBorda () {
      if (xBolinha + raio > width || xBolinha - raio <0) {
      velocidadeXBolinha *= -1    }
    //Se o x da bolinha for maior que a largura ou menor que 0, a bolinha muda de direção pra direção contrária multiplicando o ângulo por -1
    
    if (yBolinha + raio > height || yBolinha - raio <0) {
      velocidadeYBolinha *= -1    }
    //Mesma coisa usando o y
}

function mostraRaquete (x,y) {
      rect (x, y, raqueteComprimento, raqueteAltura)  
}

function movimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) {
   yRaquete -= 10 
  }
  if (keyIsDown(DOWN_ARROW)) {
  yRaquete += 10
  }
}

function verificaColisaoRaquete () {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function verificaColisaoRaqueteOponente () {
  if (xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function movimentaRaqueteOponente () {
  if (keyIsDown(87)) {
   yRaqueteOponente -= 10 
  }
  if (keyIsDown(83)) {
  yRaqueteOponente += 10
  }
}

function incluiPlacar (){
  stroke (255)
  textSize (18)
  textAlign (CENTER)
  fill (color(255, 140, 0))
  rect (150, 10, 40, 20)
  fill (255)
  text (meusPontos, 170, 26)
  fill (color(255, 140, 0))
  rect (450, 10, 40, 20)
  fill (255)
  text (pontosOponente, 470, 26)
}

function marcaPonto () {
  if (xBolinha > 590){
   meusPontos += 1;
   ponto.play ();
    
  }
  if (xBolinha < 10) {
  pontosOponente += 1;
  ponto.play ();
  
  }
}
