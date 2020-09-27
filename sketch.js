 const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var particle;
var score = 0;
var turn = 0;
var count = 0;

var End = 1;
var gameState = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,795,800,10);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    } 
  }

function draw() {
  background(0);
  Engine.update(engine);

  textSize(40)
 text("Score : "+ score,20,30);
 text("500",5,550);
 text("500",85,550);
 text("500",165,550);
 text("500",250,550);
 text("100",330,550);
 text("100",410,550);
 text("100",490,550);
 text("200",570,550);
 text("200",650,550);
 text("200",730,550);

   for (var j = 0; j < plinkos.length; j++) {
     plinkos[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {  
     divisions[k].display();
   }

   if(keyCode === 32 && gameState === 0 && particle!==null){
      particle.display();

      if(particle.body.position.y > 700){
      if(particle.body.position.x < 225){
        score = score + 500;
        turn = turn + 1;
        particle = null;
        }else if(particle.body.position.x < 520){
          score = score + 100;
          turn = turn + 1;
          particle = null;
        }else if(particle.body.position.x < 780){
          score = score + 200;
          turn = turn + 1;
          particle = null;
        }
    }

    if(turn>=5){
      gameState = 1;
    }
 }

    if(gameState === 1){
      textSize(75);
      fill(255);
      text("GAME OVER",200,360);
    }
}

function keyPressed(){
if(keyCode === 32){
      count ++;
      particle = new Particle(mouseX,10,10,10);
  }
}