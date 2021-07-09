class Umbrella {
    constructor(x, y){
        var options = {
            isStatic : true,
            restitution : 0.25,
            friction : 1,
             
        }

    this.body = Bodies.circle(x, y, 180, options);
    this.radius = 180;
    this.image = loadAnimation('images/WalkingFrame/walking_1.png', 
    'images/WalkingFrame/walking_2.png' ,'images/WalkingFrame/walking_3.png', 'images/WalkingFrame/walking_4.png', 
    'images/WalkingFrame/walking_5.png', 'images/WalkingFrame/walking_6.png', 'images/WalkingFrame/walking_7.png',
    'images/WalkingFrame/walking_8.png');
    this.sprite = createSprite(this.body.position.x, this.body.position.y);
    this.sprite.addAnimation('man', this.image)
    World.add(world, this.body);
    // console.log(this.sprite.position.y)
    // console.log(this.image.position.y)
    
    }

    display(){

        // var pos = this.body.position;
        this.sprite.scale = 0.5;
    }
    

}