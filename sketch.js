var hammer1,plane1,stone1,rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(400,350);

plane1=new Plane(500,height,1000,20);

stone1=new Stone(700,200,50,50);

rubber1=new Rubber(300,200,60);

sand1=new Sand(350,200,10);
sand2=new Sand(400,200,10);
sand3=new Sand(450,200,10);
sand4=new Sand(500,200,10);
sand5=new Sand(550,200,10);
sand6=new Sand(600,200,10);
sand7=new Sand(650,200,10);
sand8=new Sand(700,200,10);

iron1=new Iron(150,200,100,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  Engine.update(engine);

  hammer1.display();

  plane1.display();

  stone1.display();

  rubber1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  iron1.display();

  drawSprites();
 
}



