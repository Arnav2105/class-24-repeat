const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3 , box4 , box5 , ground;
var pig1, pig2, pig3;
var blog1,blog2,blog3,blog4;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,380,1200,20);
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
   
    blog1 = new blog(810,260,20,300,PI/2);
    blog2 = new blog(810,180,20,300,PI/2);
    blog3 = new blog(760,120,20,200,PI/7);
    blog4 = new blog(870,120,20,200,-PI/7);
    bird1 = new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    blog1.display();
    blog2.display();
    blog3.display();
    blog4.display();
    bird1.display();
}