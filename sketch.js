const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

function setup(){
  canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1=new Pendulum(200-50,300,0)
  pendulum2=new Pendulum(260-50,300,0)
  pendulum3=new Pendulum(320-50,300,0)
  pendulum4=new Pendulum(380-50,300,0)
  pendulum5=new Pendulum(440-50,300,0)
  sling1=new Sling(pendulum1.body,{x:150,y:100})
  sling2=new Sling(pendulum2.body,{x:210,y:100});
  sling3=new Sling(pendulum3.body,{x:270,y:100});
  sling4=new Sling(pendulum4.body,{x:330,y:100});
  sling5=new Sling(pendulum5.body,{x:390,y:100});
}
function draw(){
  background(0);
  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}