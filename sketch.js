var ball1,dustbin1,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	
	

	//Create the Bodies Here.
	ball1 = new paper(50,600,50);
	
	ground = new Ground(width/2, 630, width, 10, {isStatic:true} );
	
	dustbin1 = new Dustbin(1000,540);
	
	
	
   keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball1.display();
 ground.display();
  dustbin1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.positon,{x:550,y:-550})
	}
}

