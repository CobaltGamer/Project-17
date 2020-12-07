
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,350,400,10);
  ground.velocityX = -4;
  
  foodGroup = new Group();

   
}


function draw() {
  background("green");
  
    stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  console.log(ground.x);
  
  if (ground.x< 200) {
    
    ground.x = ground.width/2;
    
  }
  if (keyDown("space")) {
    
    monkey.velocityY = -12;
     
  }
  
  monkey.velocityY = monkey.velocityY +1;
  monkey.collide(ground);
  spawnFood();
  drawSprites()
}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var food = createSprite(width,height-100,40,10);
    food.y = Math.round(random(height-220,height-170));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   foodGroup.add(food);
  }
}




