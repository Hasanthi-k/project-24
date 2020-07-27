class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:1.2
          }      
        this.bottomBody = Bodies.rectangle(x,y+70,200,20,options);
        World.add(world,this.bottomBody);
        this.leftBody = Bodies.rectangle(x-120,y,20,100,options);
        World.add(world,this.leftBody);
        this.rightBody = Bodies.rectangle(x+120,y,20,100,options);
        World.add(world,this.rightBody);
       
}

display() {
    var pos1= this.leftBody.position;
    var pos2= this.rightBody.position;
    var pos3= this.bottomBody.position;
    rectMode(CENTER);
    fill(255,0,0);
    rect(pos3.x,pos3.y-20,200,20);
    rect(pos1.x+20,pos1.y,20,100);
    rect(pos2.x-20,pos2.y,20,100);
  
}
}