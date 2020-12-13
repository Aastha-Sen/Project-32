class Polygon{
  constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:3,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("polygon.png");
      this.body=Bodies.circle(this.x,this.y,this.r/3,options);
      World.add(world,this.body);
  }
  display(){
      var polygonPos=this.body.position;		
      push();
      translate(polygonPos.x, polygonPos.y);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,0,0,this.r, this.r);
      pop();
      
  }
}