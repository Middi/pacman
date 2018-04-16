function Ghost () {
    this.img = ghostPink;
    this.location = {
        x: 12,
        y: 14
    };

    this.show = function () {
        image(this.img, this.location.x * cell + 2, this.location.y * cell + 2, 16, 16);
    }
    
}