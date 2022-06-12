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
var plataforma, plataformaGroup;
var buttom, buttonImg;

//Função para carregamento de animação e imagens
function preload(){
  bgImg = loadAnimation("./assets/backgroung (3).png", "./assets/backgroung (4).png");
  blugImg = loadAnimation("./assets/blugright.png", "./assets/blug2right.png", "./assets/blug3right.png",
   "./assets/blug4right.png", "./assets/blug3right.png", "./assets/blug2right.png", "./assets/blugright.png");
   bg2Img = loadImage("./assets/bg2.png");
  buttom = createImg("button.gif");
  }


function setup() {
  createCanvas(800, 800);
  bg = createSprite(400,-1600);
  bg.addAnimation("ceu", bgImg);
  bg.scale = 5;
  bg2 = createSprite(400, -1600);
  bg2.addImage("terra", bg2Img);
  bg2.scale = 4;
  //bg.velocityY = 1;
  plataformaGroup = createGroup();

  blug = createSprite(400, 700);
  blug.addAnimation("rigth", blugImg);

  buttom.position(400, 400);

  
   
}

function draw() {
  background(200);
  console.log(bg.y);

  if(keyDown("space")){
    bg.y = bg.y+6;
    bg2.y = bg2.y+6;
    blug.velocityY = -5;
  }
  
  blug.velocityY = blug.velocityY + 0.5;
  if(keyDown("left")){
    blug.x = blug.x - 5;
   
  }
  if(keyDown("right")){
    blug.x = blug.x + 5;
   
  }
  drawSprites();
  gerarPlataforma()
  blug.collide(plataformaGroup);
}
function gerarPlataforma(){
  
  if(frameCount % 80 ===0){
    plataforma = createSprite(200, 400, 100, 20);
    plataforma.x = Math.round(random(0, 800));
    plataforma.velocityY = 1;
    plataforma.timelife = 220;
    plataformaGroup.add(plataforma);
    
  }
}
