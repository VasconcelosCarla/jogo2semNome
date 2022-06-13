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


//Função para carregamento de animação e imagens
function preload(){
  bgImg = loadAnimation("./assets/backgroung (3).png", "./assets/backgroung (4).png");
  blugImg = loadAnimation("./assets/blugright.png", "./assets/blug2right.png", "./assets/blug3right.png",
   "./assets/blug4right.png", "./assets/blug3right.png", "./assets/blug2right.png", "./assets/blugright.png");
   bg2Img = loadImage("./assets/bg2.png");
  buttomImg = loadAnimation("./assets/botao1.png", "./assets/botao2.png");
  plataformaImg = loadImage("./assets/plataforma.png");
  instucoesImg = loadImage("./assets/instuções.png");
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

  instucoes = createSprite(400, 300);
  instucoes.addImage(instucoesImg);
  instucoes.scale = 1.2;
  
  buttom = createSprite(395, 280);
  buttom.addAnimation("botão", buttomImg)
  buttom.scale = 2.5;

  blug.setCollider("rectangle", 0, 0, 40, 50);
  blug.debug = true;
  

  
   
}

function draw() {
  background(200);
  drawSprites();
  
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
    bg.velocityY = 2;
    bg2.velocityY = 2;
    if(keyDown("space")){
      
      blug.velocityY = -15;
      blug.velocityX = 0;
    }

    blug.velocityY = blug.velocityY + 0.8;
    if(keyDown("left")){
      blug.x = blug.x - 5;
     
    }
    if(keyDown("right")){
      blug.x = blug.x + 5;
     
    }
    gerarPlataforma();
  }
  else if(gameState === END){



  }

  
  
 
  
  
  blug.collide(plataformaInvisivelGroup);
}
function gerarPlataforma(){
  
  if(frameCount % 80 ===0){

    plataforma = createSprite(200, 250, 120, 20);
    plataforma.x = Math.round(random(200, 600));
    plataforma.velocityY = 2;
    
    plataforma.addImage("plataforma", plataformaImg);
    plataforma.scale = 2;
    plataformaGroup.add(plataforma);

    plataformaInvisivel = createSprite(200, 250, 120, 10);
    plataformaInvisivel.x = plataforma.x;
    plataformaInvisivel.velocityY = 2;
    
   
    plataformaInvisivelGroup.add(plataformaInvisivel);
    plataformaInvisivel.visible = false;

    plataforma.lifetime  = 150; //tinha um erro de sintaxe aqui, corrigi. é isso que dar programar com sono
    plataformaInvisivel.lifetime  = 150;
  }
  
  
}
