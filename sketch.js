const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var ground1;
var ground2;
var ground3;
var groun4;
var ground5;
var player1;
var obstacle1;

function preload(){
  bg=loadImage("bgimage.jpg")
 platform=loadImage("platfprm4.png")
plat1form=loadImage("platform2.png")
plat2form=loadImage("platform3.png")
plat3form=loadImage("platform4.png")
left=loadImage("leftb.png")
right=loadImage("rightbord.png")
mario=loadImage("mario1.png","mario2.png","mario3.png")
snailImg=loadImage("snail.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  
  var options={
    isStatic:true
  }
   //ground.visible=true
  ground=createSprite(windowWidth/9,windowHeight-80,50,50,options)
ground.addImage(platform);


var options={
  isStatic:true
}
 //ground.visible=true
 ground1=createSprite(windowWidth-1100,windowHeight-35,50,50,options)
ground1.addImage(plat1form);


var options={
  isStatic:true
}
 ground2=createSprite(windowWidth-1100,windowHeight-140,50,50,options)
ground2.addImage(plat2form);

player1 = new player(windowWidth/9,windowHeight-400,50,50);
player1.scale=0.05

 
  


var options={
  isStatic:true
}
var invisibleGround =createSprite(windowWidth/2,windowHeight-10,2000,10,options)
invisibleGround.visible = false;



//var options={
 // isStatic:true
//}
//var invisibleGroundb =createSprite(windowWidth/2,windowHeight-100,2000,10,options)
//invisibleGroundb.visible = true;

var options={
  isStatic:true
}
 ground3=createSprite(windowWidth-700,windowHeight-150,50,50,options)
ground3.addImage(plat1form);

var options={
  isStatic:true
}
 ground4=createSprite(windowWidth/1.1,windowHeight-80,50,50,options)
ground4.addImage(plat3form);

var options={
  isStatic:true
}
 ground5=createSprite(windowWidth/1.3,windowHeight-75,50,50,options)
ground5.addImage(plat2form);

var options={
  isStatic:true
}
var Board1=createSprite(windowWidth/1,windowHeight-200,50,50,options)
Board1.addImage(left);
Board1.scale=0.4


var Board2=createSprite(windowWidth/20,windowHeight-200,50,50)
Board2.addImage(right);
Board2.scale=0.4

obstacle1=createSprite(windowWidth/1.5,windowHeight-200,50,50)
obstacle1.scale=0.1;
obstacle1.velocityX=-1;
obstacle1.addImage(snailImg)
if(obstacle1.position .X>windowWidth/2){
  obstacle1.velocityX=-5;
}
}

function draw() {
  Engine.update(engine);
  background(bg);
 
  
 // ground.display();
 //obstacle1.display();
player1.display();
  drawSprites();
}


