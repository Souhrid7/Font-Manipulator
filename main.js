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
    {console.log(results)}
}