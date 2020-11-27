class Bbox {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 20,40, options);
    this.width = 20;
    this.height = 40;
    this.Visiblity = 255;
    World.add(world, this.body);
  
  
  }
 
     display(){
      if(this.body.speed < 3){
      var pos =this.body.position;
      push();
      translate(pos.x ,pos.y)
      rotate(this.body.angle)
      rectMode (CENTER)
      fill(135,206,234);
      rect(0,0 ,this.width , this.height)
      pop();
    }
    else{
      push();
      World.remove(world, this.body);
      tint(255,this.Visiblity);
      this.Visiblity = this.Visiblity - 5;
      pop() ;
    }
     }  
  
};

