class Box {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 60;
      this.height = 60;
      this.image=loadImage("box.png");
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke(0);
      strokeWeight(0);
      //rect(0, 0, this.width, this.height);
      image(this.image, 0,0, this.width,this.height)
      pop()
    }
  };
