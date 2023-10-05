let posX, posY, diam, rad;
let margen = 50;
// ladistancia entre el rectangulo y el margende pantalla
let piso;
const acel = 0.98;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  // posY = windowHeight / 2;
  posY = windowHeight * 0.2;
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  esp = 34;
  piso = windowHeight - margen - esp / 2;
  // frameRate(10);
  // diam = 50;
  velY = 0;
}
function draw() {
  background(0, 200, 150, 70);

  actualizar();

  noStroke();
  fill(255);
  circle(posX, posY, 50);

  fill(255, 0, 0);
  // rect(windowWidth * 0.5, windowHeight - margen, windowHeight * 0.8, esp);
  rect(windowWidth / 2, windowHeight - margen, windowHeight, esp);

  function actualizar() {
    velY += acel;
    posY += velY;

    if (posY >= piso - rad) {
      print("ya");
      posy = piso - rad;
      velY *= -1;
    }
  }
}
