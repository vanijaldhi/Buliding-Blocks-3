const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, chain, ground, bgImage, crane, box2;

function preload() {
  bgImage = loadImage("d1.jpg");
  crane = loadImage("red.png");
}

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(200,300, 40, 40);
  //box2 = new Box(300,300, 50, 50);
  //box3 = new Box(400,350, 50, 50);
  chain = new SlingShot(box.body, {x: 300, y: 50});
  ground = new Ground(400,350,800,15);
  ground1 = createSprite(400,350,800,15);
}

function draw() {
  background(bgImage);  
  Engine.run(engine);

  chain.display();
  box.display();
  //box2.display();
  ground.display();

  drawSprites();
}

 function keyPressed(){
   if( keyCode === 32){
     chain.fall();
     //newbox = new Box(200,300, 40, 40);
    // newbox.display();
   // stroke ("black");
   // newbox = createSprite(300,300, 50, 50);
   // newbox.velocityY = 0.5;
    //newbox.shapeColor = "red";
    //newbox.collide(ground);
   }
 }