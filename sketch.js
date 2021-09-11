var ship ,ship_moving;
var sea,background_sea,seaImage;
function preload(){
    seaImage=loadImage("sea.png");
    ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  ship=createSprite(70,230,20,50);
  ship.scale=0.20;
  ship.addAnimation("moving",ship_moving);

  sea=createSprite(200,220,400,20)
  sea.addImage("sea",seaImage)
  sea.x=sea.width/2
  sea.velocityX=0.5;
  sea.scale=0.30
}

function draw() {
  background(220);

  if (sea.x>400){
    sea.x=300
  }

  if (sea.x<0){
    sea.x=sea.width/2;
  }
  sea.depth = ship.depth;
  ship.depth +=1;
 
  drawSprites();
}