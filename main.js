img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();   
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(video,0,0,380,380);
    
    if(status != "")
    {
        objectDetector.detect(video,gotResults);
        random_r = random(255);
        random_g = random(255);
        random_b = random(255);

        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status_").innerHTML = "Status: Object Detected";
            document.getElementById("no_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
            fill(random_r,random_g,random_b);
            percentage = floor(objects[i].confidence*100);
            stroke(random_r,random_g,random_b);
            text(objects[i].label + " " + percentage + "%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height-20);
        }
    }
}

function modelLoaded(){
    console.log("CocoSSD is initialized!!");
    status = true;
    
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;

    }  
}