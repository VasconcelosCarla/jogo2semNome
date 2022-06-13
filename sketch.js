//##Profe Carla Vasconcelos##
//###Joguinho com movimentação na vertical###

//declaração de variáveis
var WAIT= 0;
var PLAY = 1;
var END = 2;
var gameState = WAIT;

var bg, bgImg;
var apoio
var blug, blugImg, bg2, bg2Img;
var plataforma, plataformaGroup, plataformaImg, plataformaInvisivel, plataformaInvisivelGroup;
var buttom, buttomImg;
var instucoes, instucoesImg;
var plataformaInicial, plataformaInicialInvisivel;

var fimDejogo, fimDejogoImg;
var barraInvisivel, barraInvisivel2;


//Função para carregamento de animação e imagens
function preload(){
  bgImg = loadAnimation("./assets/backgroung (3).png", "./assets/backgroung (4).png");
  blugImg = loadAnimation("./assets/blugright.png", "./assets/blug2right.png", "./assets/blug3right.png",
   "./assets/blug4right.png", "./assets/blug3right.png", "./assets/blug2right.png", "./assets/blugright.png");
   bg2Img = loadImage("./assets/bg2.png");
  buttomImg = loadAnimation("./assets/botao1.png", "./assets/botao2.png");
  plataformaImg = loadImage("./assets/plataforma.png");
  instucoesImg = loadImage("./assets/instuções.png");
  fimDejogoImg = loadImage("./assets/GAMEOVER.png");
  }


function setup() {
  createCanvas(800, 750);
  bg = createSprite(400,-1600);
  bg.addAnimation("ceu", bgImg);
  bg.scale = 5;
  bg2 = createSprite(400, -1600);
  bg2.addImage("terra", bg2Img);
  bg2.scale = 4;
  //bg.velocityY = 1;
  plataformaGroup = createGroup();
  plataformaInvisivelGroup = createGroup();
  
  

  blug = createSprite(400, 500);
  blug.addAnimation("rigth", blugImg);
  blug.scale = 1.5;
  

  plataformaInicial = createSprite(400, 500);
  plataformaInicial.addImage("inicial",plataformaImg);
  plataformaInicial.scale = 2;
  plataformaInicial.velocityY = 2;
  plataformaInicial.velocityX = 0;
  plataformaInicialInvisivel = createSprite(400, 500, 30, 10);
  plataformaInicialInvisivel.visible = false;

  
  barraInvisivel = createSprite(400, 700, 20, 20);
  barraInvisivel.visible = false;
  barraInvisivel2 = createSprite(400, 350, 20, 20);
  barraInvisivel2.visible = false;

  instucoes = createSprite(400, 300);
  instucoes.addImage(instucoesImg);
  instucoes.scale = 1.2;

  fimDejogo = createSprite(400, 300);
  fimDejogo.addImage(fimDejogoImg);
  fimDejogo.scale = 1.2;
  fimDejogo.visible = false;
  
  buttom = createSprite(395, 280);
  buttom.addAnimation("botão", buttomImg)
  buttom.scale = 2.5;

  blug.setCollider("rectangle", 0, 0, 40, 50);
  blug.debug = true;
  

  
   
}

function draw() {
  background(200);
  drawSprites();
  plataformaInicialInvisivel.y = plataformaInicial.y;
  blug.velocityY = blug.velocityY + 0.9;
  
  plataformaInicial.bounceOff(barraInvisivel);
  plataformaInicial.bounceOff(barraInvisivel2);

  
  //console.log(bg.y);
  console.log(gameState);
  if(gameState === WAIT){
    
    blug.velocityY = 0;
    
   

  }
  if(mousePressedOver(buttom)){
   
    gameState = PLAY;
    
  }
  else if(gameState === PLAY){
    instucoes.visible = false;
    buttom.visible = false;
    bg.velocityY = 1;
    bg2.velocityY = 1;
    plataformaInicial.velocityY= 5;
    plataformaInicialInvisivel.velocityY = 5;

   if(blug.collide(plataformaInvisivelGroup) || blug.collide(plataformaInicialInvisivel)){
      if(keyDown("space") && blug.y>250){

        plataformaInicialInvisivel.destroy();
        plataformaInicial.destroy();
        blug.velocityY = -18;
        blug.velocityX = 0;
      }
    }
    /*if(keyDown("space") && blug.y>250){
      
      blug.velocityY = -15;
      blug.velocityX = 0;
    }*/

    
    if(keyDown("left")){
      blug.x = blug.x - 5;
     
    }
    if(keyDown("right")){
      blug.x = blug.x + 5;
     
    }
    gerarPlataforma();

    if(blug.y>810){
      gameState = END
    }
  }
  else if(gameState === END){
    fimDejogo.visible = true;
    bg.velocityY = 0;
    bg2.velocityY = 0;
    plataformaGroup.setVelocityYEach = 0;

  }

  if(mousePressedOver(fimDejogo)){
    restart();
  }
  
 
  
  blug.collide(plataformaInicialInvisivel);
  blug.collide(plataformaInvisivelGroup);
}
function gerarPlataforma(){
  
  if(frameCount % 80 ===0){

    plataforma = createSprite(200, 550, 120, 20);
    plataforma.x = Math.round(random(200, 600));
    plataforma.velocityY = 2;
    
    plataforma.addImage("plataforma", plataformaImg);
    plataforma.scale = 2;
    plataformaGroup.add(plataforma);

    plataformaInvisivel = createSprite(200, 550, 120, 10);
    plataformaInvisivel.x = plataforma.x;
    plataformaInvisivel.velocityY = 2;
    
   
    plataformaInvisivelGroup.add(plataformaInvisivel);
    plataformaInvisivel.visible = false;

    plataforma.lifetime  = 150; //tinha um erro de sintaxe aqui, corrigi. é isso que dar programar com sono
    plataformaInvisivel.lifetime  = 150;
  }
  
  
}

function restart(){
  gameState = PLAY;
  fimDejogo.visible = false;
  bg.y = -1600;
  bg2.y = -1600
  textSize(30);
  fill("black");
  strokeWeight(3)
  text("ainda implementando isso", 400, 400);


}
