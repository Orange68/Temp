
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var boyIMG;
var stone;
var stoneIMG;
var mango1;
var mangoIMG;
var mango2;
var mangoIMG2;
var mango3;
var mangoIMG3;
var mango4;
var mangoIMG4;
var mango5;
var mangoIMG5;
var mango6;
var mangoIMG6;
var mango7;
var mangoIMG7;
var mango8;
var mangoIMG8;
var tree;
var treeIMG;

function preload()
{
boyIMG.loadImage("boy.png");
stoneIMG.loadImage("stone.png");
mangoIMG.loadImage("mango.png");
mangoIMG2.loadImage("mango.png");
mangoIMG3.loadImage("mango.png");
mangoIMG4.loadImage("mango.png");
mangoIMG5.loadImage("mango.png");
mangoIMG6.loadImage("mango.png");
mangoIMG7.loadImage("mango.png");
mangoIMG8.loadImage("mango.png");
treeIMG.loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);
var tree=createSprite(600,600,100,100);
tree=treeIMG
tree.scale=1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display();
  keyPressed();
  detectCollision();
  drawSprites();
 
}

function display() {
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
}

function keyPressed() {
if(keyCode === 32){
Matter.body.setPosition(stone.body,{x:235,y:420})
launcherObject.attach(stone.body)
}
}


function detectCollision(lstone,lmango) {
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,angoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
detectollision(stone,mango6)
detectollision(stone,mango7)
detectollision(stone,mango8)
}


