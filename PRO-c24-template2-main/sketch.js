const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(600, 500, 10);
    rubber2 = new Rubber(625, 500, 10);
    rubber3 = new Rubber(650, 500, 10);
    rubber4 = new Rubber(675, 500, 10);
    rubber5 = new Rubber(700, 500, 10);
    rubber6 = new Rubber(725, 500, 10);
    rubber7 = new Rubber(750, 500, 10);
    rubber8 = new Rubber(775, 500, 10);
    rubber9 = new Rubber(800, 500, 10);
    rubber10 = new Rubber(825, 500, 10);

    stone = new Stone(400, 500, 100, 100);

    iron = new Iron(900, 500, 150, 150);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
 
    stone.display();
    
    iron.display();
}