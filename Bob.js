class Bob
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic :false,
            restitution :1,
            friction : 0.1,
            density : 1,
           
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("ball.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        
     
        
    }
        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            stroke(27, 225, 125);
            fill(27, 225, 125);
            image(this.image, 0, 0, 52, 52);
            pop();
        }
    
}