var bg,bgImg;
var player,playerImg; 
var zombie, zombieImg;

//var heart,heartImg;

var zombieGroup;
var bush1,bush1Img;
var bush2, bush3, bush4



function preload(){
  
  tree1Img = loadImage("assets/tree6.png")
  
  zombieImg = loadImage("assets/zombie.png")

 
  playerImg = loadImage("assets/player.png")

  bush1Img = loadImage("assets/bush1.png");
  stevanImgStandingF = loadAnimation("assets/boy/f1.png");
  stevanImgStandingB = loadAnimation("assets/boy/b1.png");
 
  
  stevanImgFront = loadAnimation("assets/boy/f1.png","assets/boy/f3.png","assets/boy/f4.png",
  "assets/boy/f5.png","assets/boy/f6.png","assets/boy/f7.png","assets/boy/f8.png" )
  stevanImgBack = loadAnimation("assets/boy/b1.png","assets/boy/b2.png","assets/boy/b3.png","assets/boy/b4.png",
  "assets/boy/b5.png","assets/boy/b6.png","assets/boy/b7.png","assets/boy/b8.png" )
  
  stevanImgRight = loadAnimation("assets/boy/s1.png","assets/boy/s2.png","assets/boy/s3.png","assets/boy/s4.png",
  "assets/boy/s5.png","assets/boy/s6.png","assets/boy/s7.png","assets/boy/s8.png", "assets/boy/s9.png",
  "assets/boy/s10.png", "assets/boy/s11.png" )
  stevanImgLeft = loadAnimation("assets/boy/l1.png","assets/boy/l2.png","assets/boy/l3.png","assets/boy/l4.png",
  "assets/boy/l5.png","assets/boy/l6.png","assets/boy/l7.png","assets/boy/l8.png", "assets/boy/l9.png",
  "assets/boy/l10.png", "assets/boy/l11.png" )

  stevanState = 'R'
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   //create Player
   stevan = createSprite(100,100);
   stevan.addAnimation("StevanF", stevanImgStandingF);
   stevan.addAnimation("StevanB", stevanImgStandingB);

   stevan.addAnimation("StevanFront", stevanImgFront);
   stevan.addAnimation("StevanBack", stevanImgBack);
   stevan.addAnimation("StevanRight", stevanImgRight);
   stevan.addAnimation("StevanLeft", stevanImgLeft);
   stevan.scale = 0.3

  //create bushes
  bush1 = new Bush(150,400,0.06);
  barb1 = new Bar(150,bush1.y+40,100,10);
  
  bush2 = new Bush(300,100,0.03);
  barb2 = new Bar(300,bush2.y+20,70,10);

  bush3 = new Bush(770,500,0.09);
  barb3 = new Bar(770,bush3.y+40,150,10);
  
  bush4 = new Bush(1200,80,0.03);
  barb4 = new Bar(1200,bush4.y+12,50,10);

  bush5 = new Bush(1100,500,0.15);
  
  // create Trees
   tree1 = new Tree(100,50,0.3);
   tree2 = new Tree(1000,150,0.4);
   tree3 = new Tree(600,300,0.7);

  

}

function draw(){
  background(66, 70, 33);
  

  if(keyDown(DOWN_ARROW)){
    stevan.changeAnimation("StevanFront", stevanImgFront);
    stevan.y +=3;
    stevan.scale = stevan.scale + 0.002
  }

  if(keyDown(UP_ARROW)){
    stevan.changeAnimation("StevanBack", stevanImgBack);
    stevan.y -=3;
    stevan.scale = stevan.scale - 0.002
   }

  if(keyDown(RIGHT_ARROW)){
      stevan.changeAnimation("StevanRight", stevanImgRight);
      stevan.x +=3; 
  }

  if(keyDown(LEFT_ARROW)){
    stevan.changeAnimation("StevanLeft", stevanImgLeft);
    stevan.x -=3;
  }
  
  if(keyWentUp(DOWN_ARROW)|| keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
    stevan.changeAnimation("StevanF", stevanImgStandingF);
  }
  if(keyWentUp(UP_ARROW)){
    stevan.changeAnimation("StevanB", stevanImgStandingB);
  }

  
 

  drawSprites();
}






  
  
