  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b4,b15,b16,b17,b18,b19,b20,b21;
//var brick;
//var b1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

 b1 = new Brick(60,380,40,40);
 b2 = new Brick(60,340,40,40);
 b3 = new Brick(60,300,40,40);
 b4 = new Brick(60,260,40,40);
 b5 = new Brick(60,220,40,40);
 b6 = new Brick(60,180,40,40);
 b7 = new Brick(60,140,40,40);
 b8 = new Brick(80,100,40,40);
 b9 = new Brick(120,100,40,40);
 b10 = new Brick(160,100,40,40);
 b11 = new Brick(200,100,40,40);
 b12 = new Brick(240,100,40,40);
 b13 = new Brick(280,100,40,40);
 b14 = new Brick(320,100,40,40);
 b15 = new Brick(340,140,40,40);
 b16 = new Brick(340,180,40,40);
 b17 = new Brick(340,220,40,40);
 b18 = new Brick(340,260,40,40);
 b19 = new Brick(340,300,40,40);
 b20 = new Brick(340,340,40,40);
 b21 = new Brick(340,380,40,40);
 b22 = new Brick(160,60,40,40);
 b23 = new Brick(200,60,40,40);
 b24 = new Brick(240,60,40,40);
 b25 = new Brick(200,20,40,40);
 
}

function draw() {
  background(0); 
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  drawSprites();
}