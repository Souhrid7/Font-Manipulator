noseX=0
noseY=0
LeftWristX=0
RightWristX=0
difference=0
function setup() {
    canvas=createCanvas(450,350)
    canvas.position(600,150)
    video=createCapture(VIDEO)
    video.size(550,350)
    video.position(50,150)
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded() {
    console.log("poseNet is Loaded")
}
function gotPoses(results) {
    if(results.length>0)
    {console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    LeftWristX=results[0].pose.leftWrist.x
    RightWristX=results[0].pose.rightWrist.x
    difference=floor(LeftWristX-RightWristX)
    }
}
function draw() {
    background("red")
    fill("blue")
    stroke("turqouise")
    textSize(difference)
    text("Souhrid Dasgupta",noseX,noseY)
    document.getElementById("square_sides").innerHTML="Font Size will be "+difference+"px"
}