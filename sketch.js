let r, g, b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(250);




  strokeWeight(150);
  stroke(r, g, b);
  rectMode(CORNER);
  fill(r,g,b);
  rect(mouseX,mouseY,50,50);
}

function mousePressed() {
  let d = dist (windowWidth,windowHeight,windowWidth,windowHeight);
  if (d < 100) {

    r = random(255);
    g = random(255);
    b = random(255);
}























}
