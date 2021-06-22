class Box{
  constructor(x, y, width, height){
    var options ={
      friction: 1.55
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
  }

  display(){
     push ();
    // fill (random(0,255), random(0,255), random(0,255));
     rectMode(CENTER);
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     pop ();
  }
}