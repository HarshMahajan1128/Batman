class Drop {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.25,
            friction : 0.1,
            density : 10
        }

    this.body = Bodies.circle(x, y, 5, options);
    this.radius = 5;
    World.add(world, this.body);
    
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(400,800), y : random(-100, 0)})
        }
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y , this.radius, this.radius);
    }

}