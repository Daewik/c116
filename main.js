var noseX = 0;
var noseY = 0;

function preload()
{
  img = loadImage('https://i.postimg.cc/sxnWz0Tb/download-removebg-preview.png');
}

function setup()
{
  canvas = createCanvas(300,300);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function take()
{
  save('image.jpeg')
}

function modelLoaded()
{
  console.log('Model has been initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log('nose x position =' + results[0].pose.nose.x + 'and nose y position = ' + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x-17;
    noseY = results[0].pose.nose.y-17;
  }
}

function draw()
{
  image(video,0,0,300,300)
  fill('red');
  stroke('red');
  image(img,noseX,noseY,25,25);
}