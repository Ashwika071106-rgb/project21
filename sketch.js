var bullet,thickness,wall;
var weight,speed;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200,100,20);
  bullet.shapeColor="white";
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  bullet.debug=true;
  wall.debug=true;
}

function draw() {
  background("black");  

  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
  }
     

  drawSprites();
}

function hasCollided(wall,bullet){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}