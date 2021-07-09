var thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4; 
var umbrella;
var maxDrops = 100;
var drops = [];
// var thunderbolt;

function preload(){
    thunderbolt1 = loadImage('images/thunderbolt/1.png');
    thunderbolt2 = loadImage('images/thunderbolt/2.png');
    thunderbolt3 = loadImage('images/thunderbolt/3.png');
    thunderbolt4 = loadImage('images/thunderbolt/4.png');
}

const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine

function setup(){

   engine = Matter.Engine.create()
   world = engine.world
   createCanvas(displayWidth, displayHeight - 100);
   umbrella = new Umbrella(width/2, 3*(height/4)-10)

   for(var i = 0; i<maxDrops; i++){
    drops.push(new Drop(random(400,800), random(-100, 0)));
   } 

}

function draw(){
    
    Engine.update(engine);
    background('black');
    umbrella.display();
    for(var j = 0; j<drops.length; j++){
        drops[j].display();
        drops[j].update();
    }    

    // if(drops.y > height){
    //     drops.y = height/4;
    // }
    thunder();
    drawSprites();

}  

function thunder(){

    if(frameCount % 30 === 0){
        var thunderbolt = createSprite(random(width/4 + 50,(3*width/4)-50), 100)
        var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: thunderbolt.addImage("thunder1", thunderbolt1);
                         break;
                         case 2: thunderbolt.addImage("thunder2", thunderbolt2);
                         break;
                         case 3: thunderbolt.addImage("thunder3", thunderbolt3);
                         break;
                         case 4: thunderbolt.addImage("thunder4", thunderbolt4);
                         break;
                     }
          
        thunderbolt.scale = 0.6;
        thunderbolt.lifetime = 10;
    }

}

