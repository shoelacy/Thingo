var t = 0.0;
var x = 25.0;
var y = 0.0;
var Vx = 0.0;
var Vy = 0.0;
var Ax;
var Ay;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectMode(CORNERS);
  stroke(255);
  background(0);
}

function draw() {
  Ax = 0;
  Ay = 0;
  translate(width/2, height/2);
  var xA = [];
  xA[0] = 200*cos(t);
  xA[1] = 200*cos(t+2*PI/3);
  xA[2] = 200*cos(t-2*PI/3);
  var yA = [];
  yA[0] = 200*sin(t);
  yA[1] = 200*sin(t+2*PI/3);
  yA[2] = 200*sin(t-2*PI/3);
  var dist = [];
  dist[0] = sqrt(sq(xA[0]-x)+sq(yA[0]-y));
  dist[1] = sqrt(sq(xA[1]-x)+sq(yA[1]-y));
  dist[2] = sqrt(sq(xA[2]-x)+sq(yA[2]-y));
  var angle = [];
  angle[0] = atan2(yA[0]-y, xA[0]-x);
  angle[1] = atan2(yA[1]-y, xA[1]-x);
  angle[2] = atan2(yA[2]-y, xA[2]-x);
  for (var i = 0; i < 3; i++) {
    dist[i] = max(dist[i], 25);
    //ellipse(xA[i], yA[i], 10, 10);
    Ax += 1000*cos(angle[i])/sq(dist[i]);
    Ay += 1000*sin(angle[i])/sq(dist[i]);
  }
  Vx += Ax;
  Vy += Ay;
  var Px = x;
  var Py = y;
  x += Vx;
  y += Vy;
  fill(0, 0, 0, 1);
  rect(-width, -height, width, height);
  strokeWeight(sqrt(sq(Vx)+sq(Vy)));
  line(x, y, Px, Py);
  t += PI/1000;
}

function mouseClicked() {
  background(0);
  Vx = 0;
  Vy = 0;
  x = mouseX-width/2;
  y = mouseY-height/2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}