function setup() {
  createCanvas(400, 400);
  fsButton = createButton("전체화면")
  fsButton.position(0,0);
  fsButton.mousePressed(goFullScreen)
}

function draw() {
  background(220);
  ellipse(width/2, )
}

function goFullScreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  if(!fs) {
    resizeCanvas(displayWidth, displayHeight);
    fuButton.html("되돌아가기")
  } else {
    resizeCanvas(600, 600)
    fsButton.html("전체화면")
  }
}