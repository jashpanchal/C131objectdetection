img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();   
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        
        for(i=0; i < objects.length; i++){
            document.getElementById("status_").innerHTML = "Status: Object Detected";
            fill("#ff0000");
            percentage = floor(objects[i].confidence*100);
            stroke("#ff0000");
            text(objects[i].label + " " + percentage + "%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height-20);
        }
    }
}

function modelLoaded(){
    console.log("CocoSSD is initialized!!");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;

    }  
}