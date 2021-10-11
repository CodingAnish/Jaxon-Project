var runner, runnerimg;
var track, trackimg;


function preload(){
  //pre-load images
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");
  trackimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  track = createSprite(200,200,400,400)
  track.addImage("track_tag", trackimg)
  
  runner = createSprite(200,300,70,70);
  runner.addAnimation("runner_running", runnerimg);
  runner.scale = 0.1;

  rightb = createSprite(365,200,5,400)
rightb.visible = false;

  leftb = createSprite(50,200,5,400)
  leftb.visible = false;
}

function draw() {
  background("white");

  if (keyDown("right")){
    runner.x = runner.x+7;
  }

  if (keyDown("left")){
    runner.x = runner.x-7;
  }

  track.velocityY= -5;

if (track.y < 0){
  track.y = track.height/2;
}

runner.collide(leftb);

runner.collide(rightb);
  drawSprites();
}


