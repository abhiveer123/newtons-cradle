
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,height-20,width,20)
roof = new Ground(300,100,600,20)
ball1= new Ball(100,600,50)
ball2= new Ball(200,600,50)
ball3= new Ball(300,600,50)
ball4= new Ball(400,600,50)
ball5= new Ball(500,600,50)
chain1= new Chain(ball1.body,roof.body,{x:-200,y:0})
chain2= new Chain(ball2.body,roof.body,{x:-100,y:0})
chain3= new Chain(ball3.body,roof.body,{x:0,y:0})
chain4= new Chain(ball4.body,roof.body,{x:100,y:0})
chain5= new Chain(ball5.body,roof.body,{x:200,y:0})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

roof.display();	
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


