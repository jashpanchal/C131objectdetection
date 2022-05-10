img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();   
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text('Dog',70,70);
    noFill();
    stroke("#ff0000");
    rect(60,50,350,350);
}