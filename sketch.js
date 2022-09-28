var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leafImg
var fruit, fruitImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png")
  fruitImg = loadImage("apple.png")
}

function drop(){
  if(frameCount%45==0){
  leaf = createSprite(Math.round(random(20,380)),0,20,20)
  leaf.velocityY = 3
  leaf.addImage(leafImg)
  leaf.scale=0.05
  leaf.lifetime=133.3
  }
}
function fall(){
  if(frameCount%100==0){
    fruit = createSprite(Math.round(random(20,380)),0,20,20)
    fruit.velocityY= 6.5
    fruit.velocityX = 0.2
    fruit.addImage(fruitImg)
    fruit.scale=0.07
    fruit.lifetime=62
  }
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  drop()
  fall()
  drawSprites();
}