let xCirc, yCirc, hCirc;
let xDist, yDist, hDist;
let hAng;
let angM, angO;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  textAlign(CENTER, CENTER);
  textSize(20);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  stroke(0);
  line(width/2, height, width/2, 0);
  line(width, height/2, 0, height/2);
  
  drawLines();
  drawAngles();
  
  
}


function drawLines(){
  //Hypotenuse
  rotate(0);
  stroke(255, 255, 255);
  line(width/2, height/2, mouseX, mouseY);
  hDist = dist(width/2, height/2, mouseX, mouseY);
  hCirc = p5.Vector.lerp(createVector(mouseX, mouseY), createVector(width/2, height/2), 0.5);
  push();
  hAng = atan((mouseY - height/2) / (mouseX - width/2));
  translate(hCirc.x, hCirc.y);
  rotate(hAng);
  fill(255);
  rect (-20, -12, 40, 21);
  fill(255, 255, 255);
  text(nfc(hDist, 0), 0, 0);
  pop();
  
  //X-Axis
  stroke(100, 255, 255);
  line(mouseX, height/2, width/2, height/2);
  xDist = mouseX - width/2;
  xCirc = p5.Vector.lerp(createVector(mouseX, height/2), createVector(width/2, height/2), 0.5);
  push();
  translate(xCirc.x, xCirc.y);
  fill(255);
  rect (-20, -12, 40, 21);
  fill(100, 255, 255);
  text(nfc(xDist, 0), 0, 0);
  pop();
  
  //Y-Axis
  stroke(0, 255, 255);
  line(mouseX, mouseY, mouseX, height/2);
  yDist = height/2 - mouseY;
  yCirc = p5.Vector.lerp(createVector(mouseX, mouseY), createVector(mouseX, height/2), 0.5);
  push();
  translate(yCirc.x, yCirc.y);
  rotate(270);
  fill(255);
  rect (-20, -12, 40, 21);
  fill(0, 255, 255);
  text(nfc(yDist, 0), 0, 0);
  pop();
}

function drawAngles(){
  //AngleM
  push();
  textSize(17);
  fill(255);
  rect (mouseX - 25, mouseY -12, 50, 21);
  fill(0, 255, 255);
  stroke(0, 255, 255);
  text(nfc(abs(angM), 2), mouseX, mouseY);
  angM = asin(xDist / hDist);
  noFill();
  translate(mouseX, mouseY);
  if(xDist / yDist > 0){
    rotate(180 - ((xDist / abs(xDist)) * 90));
    arc(0, 0, 70, 70, 0, 0 + abs(angM));
  }else{
    rotate(90 + ((xDist / abs(xDist)) * 90));
    arc(0, 0, 70, 70, 90 - abs(angM), 90);
  }
  pop();
  
  //AngleO
  push();
  stroke(100, 255, 255);
  rect (width/2 - 27, height/2 -12, 56, 21);
  fill(255);
  textSize(17);
  fill(100, 255, 255);
  text(nfc(abs(angO), 2), width/2, height/2);
  noFill();
  angO = acos(xDist / hDist);
  if (angO > 90){
    angO = 180 - angO;
  }
  translate(width/2, height/2);
  if(xDist / yDist > 0){
    rotate(90 - (xDist / abs(xDist)) * 90);
    arc(0, 0, 70, 70, -abs(angO), 0);
  }else{
    rotate(90 - (xDist / abs(xDist)) * 90);
    arc(0, 0, 70, 70, 0, abs(angO));
  }
  pop();
}