const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var box1,box2,box3;
var engine,world;
var gnd,stand1,stand2;
var slingShot;
var polygonI;
var ball;
var box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;

function preload(){
  polygonI=loadImage("polygon.png");
}
function setup(){
  createCanvas(900,400);


   engine=Engine.create();
   world=engine.world;
   gnd=new Ground();

   stand1=new Stand(390,300,250,10);
   stand2=new Stand(700,200,200,10);
    
   //stand1level1
   box1=new Boxes(300,275,30,40);
   box2=new Boxes(330,275,30,40);
   box3=new Boxes(360,275,30,40);
   box4=new Boxes(390,275,30,40);
   box5=new Boxes(420,275,30,40);
   box6=new Boxes(450,275,30,40);
   box7=new Boxes(480,275,30,40);

   //stand1level2
   box8=new Boxes(330,235,30,40);
   box9=new Boxes(360,235,30,40);
   box10=new Boxes(390,235,30,40);
   box11=new Boxes(420,235,30,40);
   box12=new Boxes(450,235,30,40);

   //stand1level3
   box13=new Boxes(360,195,30,40);
   box14=new Boxes(390,195,30,40);
   box15=new Boxes(420,195,30,40);

   //stad1level4
   box16=new Boxes(390,155,30,40);

  ball=Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot=new Slingshot(this.ball,{x:100,y:200});
  
}

function draw(){
  background(255);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
 slingShot.display();
 imageMode(CENTER);
 image(polygonI,ball.position.x,ball.position.y,40,40);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode===32){
    slingShot.attach(this.ball);
  }
}