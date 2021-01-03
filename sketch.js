const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score;
var particle;
var count;
var gameState;

var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  score = 0;
  count = 0;
  gameState = "Start";

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


  for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
   
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
   {  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);

  mousePressed();
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null) {
     particle.display();
      if(particle.y>=320&&particle.x<300) {
        score = score+500;
      }
    }
    if(particle!=null) {
      particle.display();
      if(particle.y>=320&&particle.x>301&&particle.x<600) {
        score = score+100;
      }
    }
    if(particle!=null) {
      particle.display();
      if(particle.y>=320&&particle.x>601&&particle.x<900) {
        score = score+200;
      }
    }
    if(count===5 && gameState==="Start") {
      text("GAME OVER",400,400);
      gameState = "End";
    }
}

function mousePressed() {
  if(gameState==="Start") {
    count++;
    particle = new Particle(mouseX, 10, 10);
  }
}
