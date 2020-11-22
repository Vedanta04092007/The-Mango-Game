
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyIMG = loadImage("Images/boy.png")	
}

function setup() {
	createCanvas(800 , 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

treeobject = new Tree(1050,580);
ground = new Ground(400,height,800.,20);
mango1 = new Mango(1000,580);
mango2 = new Mango(1030,575);
mango3 = new Mango(1040,550);
mango4 = new Mango(1050,560);
mango5 = new Mango(1040,530);
	
Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  treeobject.display();
  ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

  drawSprites();
 
}



