//##Profe Carla Vasconcelos##
//###Joguinho com movimentação na vertical###

//declaração de variáveis
var bg, bgImg;
var apoio
var blug, blugImg, bg2, bg2Img;

//Função para carregamento de animação e imagens
function preload(){
  bgImg = loadAnimation("./assets/backgroung (3).png", "./assets/backgroung (4).png");
  blugImg = loadAnimation("./assets/blugright.png", "./assets/blug2right.png", "./assets/blug3right.png",
   "./assets/blug4right.png", "./assets/blug3right.png", "./assets/blug2right.png", "./assets/blugright.png");
   bg2Img = loadImage("./assets/bg2.png");
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
  

  blug = createSprite(400, 700);
  blug.addAnimation("rigth", blugImg);
  
   
}

function draw() {
  background(200);
  console.log(bg.y);

  if(keyDown("space")){
    bg.y = bg.y+5;
    bg2.y = bg2.y+5;
  }

  
  drawSprites();
}
