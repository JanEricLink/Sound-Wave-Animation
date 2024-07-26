let points;
let b;
let size;

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  points = [];
  b = 0;
  size = 3;
  camera(0, size * -10 - 40, size * 20 + 80);
}

function draw() {
  background(220);
  orbitControl();
  strokeWeight(1);

  for (let a = 0; a < size * 36; a++) {
    points[a] = sin(20 * (a - b));
  }

  noStroke();
  fill(200, 0, 0);
  sphere(1.5 - 0.75 * points[13]);

  stroke(70);

  for (var key in points) {
    push();
    rotateX(90);
    for (var c = 0; c <  2*key ; c++) {
      rotateZ(360 / key);
      stroke(color(key*255/size/36,0,255-key*255/size/36))
      point(0.5 * key + 1 + 0.75 * points[key], 0, 0);
    }
    pop();
    rotateY(1234567.12345);
  }
  b += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
