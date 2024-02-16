let mouseDistance;
let dotsIn = 0;
let dotsTotal = 0;
const piScale = 1;
let randX;
let randY;
let randDistance;
let piApprox;

function setup() {
  createCanvas(2000, 2000);
  noFill();
  stroke(255);
  strokeWeight(3);
  textSize(width/16);
  background(0);
  circle(width/2, height/2, width)
}

function draw() {
  for(let i =0; i<100; i++){
    randX = random(0,width);
    randY = random(0, height);
  //mouseDistance = sqrt(((mouseX - (width/2)) ** 2) + ((mouseY - (height/2)) ** 2));
  fill(255);
  stroke(255);
  circle(randX, randY, 2);
  dotsTotal++;
  randDistance = sqrt(((randX - (width/2)) ** 2) + ((randY - (height/2)) ** 2));
  if (randDistance <= width/2){
    dotsIn++;
  }
  
  piApprox = (dotsIn/dotsTotal) * 4;
  
  fill(0,0,0);
  rect(width/5.3333, height/2.285, width/1.6, height/8)
  fill(255,0,0);
  stroke(0);
  text(piApprox, width/5, height/1.904)
  }
}

//YO DO TOK BEFORE HE COMES