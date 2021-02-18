class Hammer {

    constructor(x,y) {
var options={
    'density':2.0,
    'friction':1.0,
    'restitution':0.5
}
this.body=Bodies.rectangle(x,y,100,30,options);
this.width=100;
this.height=30;

World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);

rectMode(CENTER);
stroke("white");
fill("yellow");

rect(0,0,this.width,this.height);
pop();
    }
}