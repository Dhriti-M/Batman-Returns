const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella,drop;
var j;
var Drops=[];
function preload(){
    
}

function setup(){
 createCanvas(450,displayHeight);   

 engine = Engine.create();
 world = engine.world;

 umbrella=new Umbrella(200,700);
    
}

function draw(){
background(0);

Engine.update(engine);

for(var i=0;i<100;i=i+10){
    
    Drops.push(new Drop(random(0,400),random(0,400)))
    console.log(Drops[0])
}


umbrella.display();

var j=0;
Drops[j].update();
j=j+1;

for(var j=0;j<100;j=j+1){
    
    Drops[j].display();
}


}   

