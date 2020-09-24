var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var object1 , objectSprite1;
var object2 , objectSprite2;
var object3 , objectSprite3;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	objectSprite1 = createSprite(width/2 , 650 , 200 , 20);
	objectSprite1.shapeColor = color("red");

	objectSprite2 = createSprite(width/1.60, 611 , 20 , 100);
	objectSprite2.shapeColor = color("red");

	objectSprite3 = createSprite(width/2.58 , 605 , 20 , 100);
	objectSprite3.shapeColor = color("red");


	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	//create 3 rectangular boxes
	object1 = Bodies.rectangle(width/2 , 500 , width , 5 , {isStatic:true});
	World.add(world,object1);
  
	object2 = Bodies.rectangle(width/2 , 500 , width , 5 , {isStatic:true});
	World.add(world,object2);

	object3 = Bodies.rectangle(width/2 , 500 , width , 5 , {isStatic:true});
	World.add(world,object3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody , false);
	Matter.Body.setStatic(object1 , true);
	Matter.Body.setStatic(object2 , false);
	Matter.Body.setStatic(object3 , false);
	
  }
}



