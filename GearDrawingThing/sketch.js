let size = 150;
let size2 = 10;
let angle = 0;
let angleSpeed = 5;
let angle2 = 0;
let angle2Speed = -6;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  strokeWeight(1);
  angle += angleSpeed;
  angle2 += angle2Speed;
  translate(width/2, height/2);
  background(0);
  noFill();
  stroke(255);
  ellipse(0, 0, width, height);
  push();
  rotate(angle);
  ellipse(0, (height - size) / 2, size, size);
  push();
  translate(0, (height - size) / 2);
  rotate(-angle);
  rotate(angle2);
  ellipse(0, (size - size2)/2, size2, size2);
  translate(0, -(height - size) / 2);
  pop();
  pop();
  
  push();
  strokeWeight(3);
  let angleCount = 0;
  let angle2Count = 0;
  for(let i = 0; i<frameCount; i++){
    angleCount += angleSpeed;
    angle2Count += angle2Speed;
    push();
    rotate(angleCount);
    translate(0, (height - size) / 2);
    rotate(-angleCount);
    rotate(angle2Count);
    point(0, (size - size2)/2, size2);
    pop();
  }
  pop();
}