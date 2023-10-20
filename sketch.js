let posX;
let posY;
let diam;
let rad;
let margen = 50; //especificar la distancia entre el suelo y el borde de la ventana
let piso; //variable que representa la posición vertical del suelo
const acel = 0.98;
let velY = 0;
let pelotaColor;
let fond;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight * 0.2;
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  esp = 34;
  piso = windowHeight - margen - esp / 2; //windowHeight - margen resta el valor de margen de la altura de la ventana,,,,,esp / 2 divide el valor de esp por 2, porque se quiere que la variable esp represente la altura total del rectángulo que se considera el suelo, y al dividirla por 2, se obtiene la mitad de esa altura, ahi la posición del suelo a partir del centro del rectángulo.
  pelotaColor = color(random(255), random(255), random(255));
  fondoColor = color(random(255), random(255), random(255));
  // frameRate(5);
}

function draw() {
  background(fondoColor);

  actualizar();

  strokeWeight(1);
  fill(pelotaColor); // Usar el color de la pelota
  circle(posX, posY, 50);

  fill(255, 0, 0);
  rect(windowWidth / 2, windowHeight - margen, windowHeight, esp - 19);
}

function actualizar() {
  //se encarga de actualizar la posición de la pelota
  velY += acel; //se incrementa velY debido a acel que es la gravedad.
  posY += velY;

  if (posY >= piso - rad) {
    //verifica si la pelota ha tocado el suelo
    posY = piso - rad;
    velY *= -1; //ajusta la posición de la pelota y se invierte la dirección de velY, rebote de la pelota
    pelotaColor = color(random(255), random(255), random(255)); // Cambiar el color de la pelota a uno aleatorio
    fondoColor = color(random(255), random(255), random(255));
  }
}
