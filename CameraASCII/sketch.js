let video;
let quality = 10;
let index = 0;
let r, g, b, avg, darkness;
const density = "Ñ@#W$9876543210?!abc;:+=-,._                   ";
//const density = '        .:-i|=+%O#@'
//const density = '        .:░▒▓█';

function setup() {
  createCanvas(530, 400);
  video = createCapture(VIDEO);
  textFont("monospace");
  fill(255);
  textSize(quality);
  colorMode(RGB);
  video.size(width/quality, height/quality);
}

function draw() {
  video.size(width/quality, height/quality);
  index = 0;
  video.loadPixels();
  background(0);
  for(let i=0; i<height; i += quality){
    for(let j=0; j<width; j += quality){
      r = video.pixels[index];
      g = video.pixels[index + 1];
      b = video.pixels[index + 2];
      //fill(r, g, b);
      avg = (r + g + b)/3;
      darkness = floor(map(avg, 0, 255, 0, density.length));
      text(density.charAt(darkness), j + quality/3, i + quality/1.5);
      index += 4;
    }
  }
  video.size(width, height);
}