

function preload() {
    pacman.img = loadImage('pacman.png');
}


function setup() {
    var cnv = createCanvas(500, 500);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;

    cnv.position(x, y);
    background(153);
}

function draw() {
    drawWorld();
}

function keyPressed() {
    switch(keyCode) {
        case UP_ARROW:
            if(world[pacman.y-1][pacman.x] !== 1) {
                world[pacman.y][pacman.x] = 0;
                world[pacman.y-1][pacman.x] = 5;
                pacman.y = pacman.y -1;
            }
            break;
        case DOWN_ARROW:
            if(world[pacman.y+1][pacman.x] !== 1) {
                world[pacman.y][pacman.x] = 0;
                world[pacman.y+1][pacman.x] = 5;
                pacman.y = pacman.y +1;
            }
            break;
        case LEFT_ARROW:
            if(world[pacman.y][pacman.x-1] !== 1) {
                world[pacman.y][pacman.x] = 0;
                world[pacman.y][pacman.x-1] = 5;
                pacman.x = pacman.x -1;
            }
            break;
        case RIGHT_ARROW:
            if(world[pacman.y][pacman.x+1] !== 1) {
                world[pacman.y][pacman.x] = 0;
                world[pacman.y][pacman.x+1] = 5;
                pacman.x = pacman.x +1;
            }
            break;
        default:
      }
}