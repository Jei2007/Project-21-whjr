var bullet,wall
var speed, weight, thickness

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 100, 25);
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = 80,80,80
}

function draw() {
  background(0);  

  bullet.depth = wall.depth+1
  
  bullet.velocityX = speed;

  if(collide(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10) {
      wall.shapeColor = "red"
    } else if(damage < 10) {
      wall.shapeColor = "green"
    }
  }

  fill("green")
  textSize(20)
  text("Affective Against Bullet", 500,35)

  fill("red")
  textSize(20)
  text("Not Affective Against Bullet", 500, 65)

  drawSprites();
}

