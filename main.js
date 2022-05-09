rightwristX = 0;
leftwrist= 0;
difference = 0;

function preload(){}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,500);
    canvas.position(560,100);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
    }
function draw(){
    background('white');
    fill('black');
    stroke('blue');
    textSize(difference);
    text('TRINEDRAN' , 50 , 400)
}


function modelloaded(){
    console.log("modelloaded");
}

function gotposes(results){
 if(results.length > 0){
     console.log(results);
     rightwristX = results[0].pose.rightWrist.x;
     console.log("rightwristX =" + rightwristX);
     leftwristX = results[0].pose.leftWrist.x;
     console.log("leftwristX =" + leftwristX);
     difference = floor(leftwristX - rightwristX);
     console.log("difference =" + difference);
 }
}
