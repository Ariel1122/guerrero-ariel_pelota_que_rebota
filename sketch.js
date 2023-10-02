let posX, posY, diam, rad;
let esp = 34;
let margen = 50;
let piso;
let velY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  piso = windowHeight - margen - esp / 2;
  frameRate(10);
  diam = 50;
  rad = diam / 2;
}

function draw() {
  background(0, 200, 150, 70);
  noStroke();

  posY += velY;
  if (posY > piso - rad) {
    velY *= -1;
  }

  fill(255);
  circle(posX, posY, 50);

  fill(255, 0, 0);
  rect(windowWidth * 0.5, windowHeight - margen, windowHeight * 0.8, esp);
}
