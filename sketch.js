const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paperBall, floor, bin, bin2, bin3;

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    paperBall = new Ball(100, 100, 50);

    bin = new Box(1000, 655 , 270, 25);

    bin2 = new Box(855, 585, 25, 150);

    bin3 = new Box(1145, 585, 25, 150);

    floor = new Ground(700, 690, 14000, 50);

}

function draw() {
    background(0);
    drawSprites();
    Engine.update(engine);
    paperBall.display();

    floor.display();

    bin.display();
    bin2.display();
    bin3.display();

    fill("black");
    stroke("blue");
    strokeWeight(4);
    textSize(40);
    text("Use UP, DOWN, RIGHT, LEFT keys to throw the freaking waste in the bin !!", 30, 60);

}


function keyPressed(){
    if (keyCode === RIGHT_ARROW) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:200, y:0});
    }
    if (keyCode === LEFT_ARROW) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:-200, y:0});
    }
    if (keyCode === UP_ARROW) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:-200});
    }
    if (keyCode === DOWN_ARROW) {
        Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:200});
    }
}
