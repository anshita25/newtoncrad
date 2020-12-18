
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var b1,b2,b3,b4,b5;
var roof;
var rope1,r2,r3,r4,r5
var bd;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;
bd=40;
	//Create the Bodies Here.
	roof = new Roof(600, 1000, 900 , 100)
	b1 = new Bob(300,400,25);
	b2 = new Bob(400,400,25);
	b3 = new Bob(500,400,25);
	b4 = new Bob(600,400,25);
	b5 = new Bob(700,400,25);
	
	r1 = new Rope(b1.body,roof.body,-bd*2, 0)
	r2 = new Rope( b2.body,roof.body,-40,0)
	r3 = new Rope( b3.body,roof.body,0,0)
	r4 = new Rope( b4.body,roof.body,80,0)
	r5 = new Rope( b5.body,roof.body,40,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  b1.display();
 b2.display(); 
 b3.display();

 b4.display();
 b5.display();
r1.display();
r2.display();
r3.display();
r4.display();
r5.display();


}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});
	}
}
function drawLine(constraint){
   var vp=constraint.bodyA.position;
   var rp=constraint.bodyB.position;
   var rpo=constraint.pointB;
   var rx=rp.x+rpo.x;
   var ry=rp.y+rpo.y;
   line(vp.x,vp.y,rx,ry);
}
	
	





