class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    score(){
      if(this.visibility<0 && this.visibility>-150){
        score++;
      }
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
        strokeWeight(1);
        stroke("black");
        fill(rgb(173,216,230));
        rect(pos.x,pos.y,this.width,this.height);
      }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        score = score;
        pop();
      }
    }
  };
