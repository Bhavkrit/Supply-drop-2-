class Box{



    constructor(x,y,width,height){
    var options = {
        restitution:0.05
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    
    }
    
    display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    rect(this.x,this.y,this.width,this.height)
    
    }
    
    
    
    
    
    
    }