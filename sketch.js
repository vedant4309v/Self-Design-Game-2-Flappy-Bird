var bg,bgImg;
var bird,birdImg;
var pillar,pillarImg;
var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;

var life = 3;
var pillar = 50;

var gamestate= "play"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")

birdImg = loadImage("assets/bird.png")

pillarImg = loadImage("assets/pillar.png")

bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
 bg.addImage(bgImg)
 bg.scale = 1


 bird = createSprite(displayWidth-1150,displayHeight-300,50,50);
bird.addImage(birdImg)
bird.scale = 0.3

heart1 = createSprite(displayWidth-150,40,20,20)
heart1.visible = false
 heart1.addImage("heart1",heart1Img)
 heart1.scale = 0.4

 heart2 = createSprite(displayWidth-100,40,20,20)
 heart2.visible = false
 heart2.addImage("heart2",heart2Img)
 heart2.scale = 0.4

 heart3 = createSprite(displayWidth-150,40,20,20)
 heart3.addImage("heart3",heart3Img)
 heart3.scale = 0.4
}

 


function draw() {




if(gamestate= "play"){

 if (life === 3){
	 heart3.visible = true
	 heart2.visible = false
	 heart1.visible = false
 }

 if (life === 2){
	heart2.visible = true
	heart1.visible = false
	heart3.visible = false
}

if (life === 1){
	heart1.visible = true
	heart3.visible = false
	heart2.visible = false
}

if (life === 0){
	heart3.visible = false
	heart2.visible = false
	heart1.visible = false
	gamestate = "lost"
}

if(keyDown("UP_ARROW")||touches.length>0){
	bird.y = bird.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   bird.y = bird.y+30
  }

  
 } 

drawSprites();
}