const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var plane;
var box,box1,box2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
    ball_options  ={
        restitution: 1
    }
         ball = Bodies.circle(200,200,11,ball_options);
    World.add(world,ball);
    console.log(ground);

     plane = Bodies.rectangle(160,180,110,22);
  
   
    box = Bodies.rectangle(200,390,77,22);
    box1 = Bodies.rectangle(240,390,11,66);
    box2 = Bodies.rectangle(155,390,11,66);
    
   

   

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    if(("DOWN_ARROW")){
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,11,11);
}
    rect(plane.position.x,plane.position.y,50,11 );
    plane.position.x = plane.position.x + 11
    fill("red");
    rect(box.position.x,box.position.y,77,22 );
    rect(box1.position.x,box1.position.y,11,66 );
    rect(box2.position.x,box2.position.y,11,66 );
}