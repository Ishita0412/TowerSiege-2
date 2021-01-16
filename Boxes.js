class Boxes{
    constructor(x,y,w,h){
        var options={
            //isStatic:true,
            restitution:0.4,
            friction:0
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);

 }

 display() { 
     var BPos=this.body.position; 
     var angle=this.body.angle;
     push();
     
     translate(BPos.x, BPos.y);
     rotate(angle);
     fill("red") ;
     rectMode(CENTER); 
     rect(0,0,this.width,this.height)
     pop() ;
 }
}