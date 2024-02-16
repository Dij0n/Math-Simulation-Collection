let angle = 0;
let numOfTheDay;
let zoom = 1.5;
let speed = 0.5;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  colorMode(HSB);
  textSize(20);
  textFont("Monospace");
}

function draw() {
  if (mouseX > width/2){
    angle = atan((mouseY - height/2) / (mouseX - width/2));
  }else{
    angle = 180 + atan((mouseY - height/2) / (mouseX - width/2));
  }
  
  //angle += speed;
  
  stroke(255);
  translate(width/2, height/2);
  background(0);
  noFill();
  circle(0, 0, width/zoom);
  line(0, -height/2, 0, height/2);
  line(-width/2, 0, width/2, 0);
  
  //Hypotenuse
  stroke(255, 255, 255);
  line(0, 0, cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom);
  
  //Y-Axis
  stroke(0, 255, 255);
  line(cos(angle) * (width/2)/zoom, 0, cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom)
  
  //X-Axis
  stroke(100, 255, 255);
  line(cos(angle) * (width/2)/zoom, 0, 0, 0)
  
  //Tan Line
  stroke(60, 255, 255);
  push();
  line(cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom, ((1/cos(angle)) * width/2)/zoom, 0)
  pop();
  
  //CoTangent Line
  stroke(180, 255, 255);
  push();
  line(cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom, 0, ((1/sin(angle)) * width/2)/zoom)
  pop();
  
  //Secant
  stroke(200, 255, 255);
  push();
  line(cos(angle) * (width/2)/zoom, 0, ((1/cos(angle)) * width/2)/zoom, 0)
  pop();
  
  //CoSecant
  stroke(35, 255, 255);
  push();
  line(0, 0, 0, ((1/sin(angle)) * width/2)/zoom)
  pop();
  
  //Texts
  push();
  strokeWeight(0);
  fill(255);
  text(nfc("θ: " + abs(angle) % 360, 2), -width/2, height/2 - 125);
  
  numOfTheDay = abs((sin(angle) * (width/2)/zoom));
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(0, 255, 255);
  text(nfc("sin(θ): " + numOfTheDay, 2), -width/2, height/2 - 105);
  
  numOfTheDay = abs(cos(angle) * (width/2)/zoom);
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(100, 255, 255);
  text(nfc("cos(θ): " + numOfTheDay, 2), -width/2, height/2 - 85);
  
  numOfTheDay = abs(dist(cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom, ((1/cos(angle)) * width/2)/zoom, 0));
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(60, 255, 255);
  text(nfc("tan(θ): " + numOfTheDay, 2), -width/2, height/2 - 65);
  
  numOfTheDay = abs(dist(0,0, ((1/cos(angle)) * width/2)/zoom, 0));
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(200, 255, 255);
  text(nfc("sec(θ): " + numOfTheDay, 2), -width/2, height/2 - 45);
  
  numOfTheDay = abs(((1/sin(angle)) * width/2)/zoom);
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(35, 255, 255);
  text(nfc("csc(θ): " + numOfTheDay, 2), -width/2, height/2 - 25);
  
  numOfTheDay = abs(dist(cos(angle) * (width/2)/zoom, sin(angle) * (width/2)/zoom, 0, ((1/sin(angle)) * width/2)/zoom));
  numOfTheDay = ((numOfTheDay * zoom * 2) / width);
  fill(180, 255, 255);
  text(nfc("cot(θ): " + numOfTheDay, 2), -width/2, height/2 - 5);
  pop();
}

