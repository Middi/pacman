var pacmanImg;
var pacman;

var cell = 20;

function preload() {
    pacmanImg = loadImage('pacman.png');
}

function setup() {
    var cnv = createCanvas(560, 620);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;

    cnv.position(x, y);
    pacman = new Pacman();
}

function draw() {
    background(0);
    drawWorld();
    food();
    pacman.show();
    score();
}

function keyPressed() {
    pacman.move();
}