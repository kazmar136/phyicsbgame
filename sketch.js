const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var ball,chain1;

function setup(){
    createCanvas(3000,800)
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(600,600,1200,20);
    ball=new Ball(200,200,80,80);
    chain1=new Chain(ball.body,{x:400,y:250});
    box1=new Box(900,100,70,70);
    box2=new Box(900,100,70,70);
    box3=new Box(900,100,70,70);
    box4=new Box(900,100,70,70);
    box5=new Box(900,100,70,70);
    box6=new Box(900,100,70,70);
    box7=new Box(800,100,70,70);
    box8=new Box(800,100,70,70);
    box9=new Box(800,100,70,70);
    box10=new Box(800,100,70,70);
    box11=new Box(800,100,70,70);
    box12=new Box(800,100,70,70);
    box13=new Box(700,100,70,70);
    box14=new Box(700,100,70,70);
    box15=new Box(700,100,70,70);
    box16=new Box(700,100,70,70);
    box17=new Box(700,100,70,70);
    box18=new Box(700,100,70,70);
    box19=new Box(800,100,70,70);

}

function draw(){
 background(250)
Engine.update(engine);
textSize(20);
fill("#669999");
text("use the disco ball to destroy the hearts",300,30);
  
ground.display();
ball.display();
chain1.display();
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
box17.display();
box18.display();
box19.display();


}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

//function mouseReleased(){
//    chain1.fly();
//}