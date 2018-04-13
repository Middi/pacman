function food() {
    for (var y = 0; y < world.length; y++) {
        for (var x = 0; x < world[y].length; x++) {
            if (world[y][x] !== '0' && world[y][x] !== '1') {
                noStroke();
                fill(0);
                rect(x * cell, y * cell, cell, cell);
                fill(255);
                ellipseMode(CENTER);
                ellipse(x * cell + 10, y * cell + 10, 6, 6);
            }
        }
    }
}

