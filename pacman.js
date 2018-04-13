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
                    this.location.y = this.location.y -1;
                }
                break;
            case DOWN_ARROW:
                if(world[this.location.y+1][this.location.x] !== '0') {
                    this.location.y = this.location.y +1;
                }
                break;
            case LEFT_ARROW:
                if(world[this.location.y][this.location.x -1] !== '0') {
                    this.location.x = this.location.x -1;
                }
                break;
            case RIGHT_ARROW:
                if(world[this.location.y][this.location.x +1] !== '0') {
                    this.location.x = this.location.x +1;
                }
                break;
            default:
          }
    }
}