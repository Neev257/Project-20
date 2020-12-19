var bullet,wall;
var speed,weigth;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,10);
  
  wall = createSprite(1500,200,thickness,width/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weigth = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(255,255,255);  
  if(bullet.isTouching(wall)){
    bullet.collide(wall);
  }
  bullet.velocityX = speed;
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weigth * speed * speed/(thickness * thickness * thickness);

 
 if(damage>10){
   wall.shapeColor = color(255,0,0);
 }
 if(damage<10){
   wall.shapeColor = color(0,255,0);
 }
}
  drawSprites();

}
  function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

