let LivingCreature = require("./LivingCreature") 

module.exports = class Hrashagorc extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.directions = [];
    }
    getNewCordinates() {
        this.directions = [

            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCordinates();
        return super.chooseCell(char)

    }

    move() {
        let found = this.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 4;
            let grasseater = new GrassEater(this.x, this.y);
            matrix[this.y][this.x] = 2;
            grassEaterArr.push(grasseater);
            this.x = x;
            this.y = y;

        }
    }
}
