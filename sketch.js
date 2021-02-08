var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
  
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 175, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    
    banana.lifetime = 200;
    
    //foodGroup.add(banana);
    }
}

function obstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(500, 600, 40, 10);
    obstacle.addImage(obstacleImage);
    obstacle.y = 310;
    obstacle.velocityX = -5;
    obstacle.scale = 0.2;
    
    obstacle.lifetime = 200;
    
    //obstacleGroup.add(obstacle);
  }
}
 


