var bullet, wall;
var speed, weight, damage, thickness;

function setup() {
  createCanvas(1600, 400);
  
  //speed and weight
  speed = random(23,32);
  weight = random(30,52);
  thickness = random(22,83);
  //sprites
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  bullet.shapeColor = "white";
}

function draw() {
  background(0, 255, 255);

	//if touching...
	  if (hasCollided(bullet,wall)) {
		  
		//bullet pos
		bullet.x = 1+wall.x-((wall.width/2)+(bullet.width/2));
		
		//damage
		damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
		
		//color
		if (damage > 10){
			wall.shapeColor = "red";
		  }
		  else if (damage <= 10)
		{
		  wall.shapeColor = "green";
		}
		
		if(keyWentDown("space")){
		speed = random(150,300);
		weight = random(30,52);
		thickness = random(22,83);
		
		wall.shapeColor = (80,80,80);
		bullet.shapeColor = "white";
		
		bullet.x = 50;
		}
	 } 
	 else if(keyDown("space")&&hasCollided(bullet,wall)=== false)
		bullet.velocityX = speed;

	console.log(hasCollided(bullet,wall));
  drawSprites();
}

//hasCollided if touching
function hasCollided(sprite1,sprite2) {
	sprite1.rightEdge=sprite1.x+sprite1.width;
	sprite2.leftEdge=wall.x;
	if(sprite1.rightEdge>=sprite2.leftEdge)
		return true;
	else
		return false;
}
