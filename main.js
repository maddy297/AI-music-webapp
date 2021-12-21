song1="";
song2="";
leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500)
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
    console.log('Pose net is initialized');
}

function gotPoses(results)
{
if(results.Length>0)
{
    console.log(results);
    leftWristY=results[0].pose.leftWrist.y
    leftWristX=results[0].pose.leftWrist.x

    console.log("LeftWristY="+LeftWristY+"LeftWristX="+LeftWristX)

    rightWristY=results[0].pose.leftWrist.y
    rightWristX=results[0].pose.leftWrist.x
    console.log("RightWristY="+RightWristY+"RightWristX="+RightWristX)
}
}