class Ball{
    constructor(x, y, r){
        var options = {
            isStatic:false, 
            restitution:0.4, 
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body)
    }    
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);    
    fill("black");
    stroke("blue");
    strokeWeight(4);
    ellipse(pos.x, pos.y, this.radius, this.radius);
}

}