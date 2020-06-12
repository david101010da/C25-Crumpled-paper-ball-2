const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = new Ground(350,700,1800,20);
	 
	dustbin1 = new Dustbin(850,650,50,450);
	dustbin2 = new Dustbin(1000,690,250,100);
	dustbin3 = new Dustbin(1100,650,50,450);

	paper = new Paper(300,690,70);


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
  paper.display();
 
  


 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}
}



