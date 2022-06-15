function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  if (mouseIsPressed) {
    let diameter = random(10, 30);
    let opacity = 100;
    let green = 0;

    if (diameter < 20) {
      opacity = random(10, 40);
    } else {
      green = random(100, 200);
      opacity = random(40, 70);
    }

    fill(random(200, 255), green, 0, opacity);
    let x = mouseX + random(-30, 25);
    let y = mouseY + random(-25, 38);
    circle(x, y, diameter);
  }
}
