
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  ground=createSprite(400,390,1200,10);
  ground.x=ground.width/2;
  ground.velocityX=-5;
  
  monkey=createSprite(80,345,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0

  
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x=ground.width/2 
  }
 // console.log(monkey.y)
  if(keyDown("space")&&monkey.y>350){
    monkey.velocityY=-20
  }
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+2
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score, 500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time" +survivalTime,100,50 )
  
}
function spawnBanana(){
  if (frameCount % 170 === 0) {
    var banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=200;
    monkey.depth=banana.depth+1
    bananaGroup.add(banana)
  }
}
function spawnObstacle(){
 if (frameCount % 120 === 0){
   var obstacle = createSprite(600,365,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.velocityX=-3;
   obstacle.lifetime=200
   obstacleGroup.add(obstacle);
   
    
    }
   
  
  
  
  
}
  
  
  
  





