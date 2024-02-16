let video;
let index = 0;
let quality = 5;

function setup() {
  createCanvas(200, 200);
  video = createCapture(VIDEO);
  video.size(width,height);
  colorMode(RGB);
}

function draw() {
  index = 0;
  background(0);
  video.loadPixels();
  for(let i=0; i<height; i += quality){
    for(let j=0; j<width; j += quality){
      fill(video.pixels[index], video.pixels[index+1], video.pixels[index+2], video.pixels[index+3]);
      circle(j + quality/2, i + quality/2, quality);
      index += quality * 4;
    }
    index += quality * width * 4;
  }
}