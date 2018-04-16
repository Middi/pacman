var pacmanImg;
var pacmanLeft;
var pacmanUp;
var pacmanDown;
var ghostRed;
var ghostOrange;
var ghostBlue;
var ghostPink;
var pacman;
var score = 0;

var cell = 20;

function preload() {
    pacmanImg = loadImage('pacman.png');
    pacmanLeft = loadImage('pacman-left.png');
    pacmanUp = loadImage('pacman-up.png');
    pacmanDown = loadImage('pacman-down.png');
    ghostRed = loadImage('ghost-red.png');
    ghostOrange = loadImage('ghost-orange.png');
    ghostPink = loadImage('ghost-pink.png');
    ghostBlue = loadImage('ghost-blue.png');
}

function setup() {
    var cnv = createCanvas(540, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;

    cnv.position(x, y);
    pacman = new Pacman();
    ghost = new Ghost();
}

function draw() {
    background(0);
    drawWorld();
    food();
    pacman.show();
    ghost.show();
    textSize(30);
    fill(255);
    strokeWeight(8);
    stroke(0);
    text(score, 10, 30);
}

function keyPressed() {
    pacman.move();
}