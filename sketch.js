let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200)
  background(220, 0, 120);
}

function draw() {
  walker.update();
  walker.show();
}