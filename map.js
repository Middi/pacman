var world =   [
    [1,1,1,1,1,1,1,1,1,1,],
    [1,0,0,2,2,2,2,2,0,1,],
    [1,0,0,0,0,2,2,2,0,1,],
    [1,1,1,1,1,1,1,1,1,1,],
    [1,1,1,1,1,1,1,1,1,1,],
    [1,0,2,2,2,2,0,0,0,1,],
    [1,1,1,1,1,5,1,1,1,1,],
    [1,0,2,0,0,0,0,0,0,1,],
    [1,0,0,0,0,0,0,0,0,1,],
    [1,1,1,1,1,1,1,1,1,1,]
];

var cnv = {
    x: 0,
    y: 0,
    width: 50
}

var pacman = {
    x: 5,
    y: 6
};

function drawWorld() {
    
console.log('redraw');
    for(var y = 0; y < world.length; y++) {
        for(var x = 0; x < world[y].length; x++) {

            switch(world[y][x]) {
                case 0:
                    fill(0);
                    rect(x*50, y*50, 50, 50);
                    break;
                case 1:
                    fill(22, 22, 250);
                    strokeWeight(4);
                    stroke(0);
                    rect(x*50, y*50, 50, 50);
                    break;                
                case 2:
                    noStroke();
                    fill(0);
                    rect(x*50, y*50, 50, 50);
                    fill(255);
                    ellipseMode(CENTER);
                    ellipse(x*50 + cnv.width/2, y*50 + cnv.width/2, 8, 8);
                    break;                
                case 5:
                    imageMode(CENTER);
                    fill(0);
                    rect(x*50, y*50, 50, 50);
                    image(pacman.img, x*50 + cnv.width/2, y*50 + cnv.width/2, 30, 30);
                    break;
                default:
            }
        }
    }
}

