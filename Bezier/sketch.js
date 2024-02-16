let p1, p2, pm, pmm, lerper, stepper;

function setup() {
  createCanvas(600, 600);
  p1 = createVector(0, height/1.5);
  p2 = createVector(600, height/1.5);
  stroke(255);
  strokeWeight(3);
  lerper = 0;
  colorMode(HSB);
  stepper = 1;
  circle(p1.x, p1.y, 10);
  circle(p2.x, p2.y, 10);
  background(0);
}

function draw() {
  background(0);
  p1 = createVector(0, height/1.5);
  p2 = createVector(600, height/1.5);
  pm = createVector(mouseX, mouseY)
  stroke(255);
  line(p1.x, p1.y, pm.x, pm.y);
  line(p2.x, p2.y, pm.x, pm.y);
  
  p1 = createVector(0, height/1.5);
  p2 = createVector(600, height/1.5);
  pm = createVector(mouseX, mouseY)
  p1.lerp(pm,lerper)
  pm.lerp(p2,lerper)
  pmm = p1;
  
  
  line(p1.x,p1.y,pm.x,pm.y);
  stroke(lerper*360, 255, 255);
  pmm.lerp(pm,lerper);
  circle(pmm.x,pmm.y,10);

  lerper += (0.01 * stepper);
  
  if (lerper >= 1){
    stepper = -1;
  }
  if (lerper <= 0){
    stepper = 1;
  }

}