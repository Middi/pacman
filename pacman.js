function Pacman () {
    this.img = pacmanImg;
    this.location = {
        x: 1,
        y: 8
    };

    this.show = function () {
        image(this.img, this.location.x * cell + 2, this.location.y * cell + 2, 16, 16);
    }
    
    this.move = function () {
        switch(keyCode) {
            case UP_ARROW:
                if(world[this.location.y-1][this.location.x] !== '0') {
                    this.img = pacmanUp;
                    if(world[this.location.y-1][this.location.x] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.y = this.location.y -1;
                }
                break;
            case DOWN_ARROW:
                if(world[this.location.y+1][this.location.x] !== '0') {
                    this.img = pacmanDown;
                    if(world[this.location.y+1][this.location.x] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.y = this.location.y +1;
                }
                break;
            case LEFT_ARROW:
                if(world[this.location.y][this.location.x -1] !== '0') {
                    this.img = pacmanLeft;
                    if(world[this.location.y][this.location.x -1] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.x = this.location.x -1;
                }
                if (pacman.location.x < 0){
                    pacman.location.x = 27;
                }
                break;
            case RIGHT_ARROW:
                if(world[this.location.y][this.location.x +1] !== '0') {
                    this.img = pacmanImg;
                    if(world[this.location.y][this.location.x+1] !== '1') {
                        score++;
                    }
                    world[this.location.y][this.location.x] = '1';
                    this.location.x = this.location.x +1;
                }
                if (pacman.location.x >27){
                    pacman.location.x = 0;
                }
                break;
            default:
          }
    }
}