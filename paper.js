class paper{
    constructor (x,y,radius){
        var options = {
            'isStatic' : false,
            "density": 1.2,
            "restitution": 0.3,
            "friction" : 0
        }
        this.body = Bodies.circle (x,y,radius,options)
this.radius = radius
this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display (){
        push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)

        imageMode (CENTER)
        image(this.image,0,0,this.radius,this.radius)
pop()
    }
}
