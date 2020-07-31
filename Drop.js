class Drop {
   constructor(x,y){
    var options = {
          
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x,y,20,options);

    World.add(world, this.body);
   
   }

   update(){
       if(this.body.y>displayHeight){
           this.body.y=0;
       }
   }


   display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    
    stroke("white");
     fill("blue");
     ellipseMode(CENTER);
    ellipse(0,0,20,20);
    pop();

   }
}