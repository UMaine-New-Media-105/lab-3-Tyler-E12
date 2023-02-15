function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  //drawAbstract(100, 100);
  drawAbstract(120, 120, 1, "pink");
}

function drawAbstract(x, y, size, customColor) {
  push();
  scale(size);
  if (mouseIsPressed) {
    fill(customColor);
  } else if (mouseX <= 100) {
    fill("blue");
  } else if (mouseX > 100 && mouseX < 200) {
    fill("green");
  } else {
    fill("red");
  }
  scale(size);
  rect(200, 200, 100);
  ellipse(220, 220, 90);
  rect(115, 115, 100);
  pop();
}
