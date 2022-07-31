
class ComputerPaddle extends Entity {

    private speed: number = 10;

    constructor(w: number, h: number, x: number, y: number) {
        super(w, h, x, y);
    }

    update(ball: Ball, canvas) {

        //chase ball
        if (ball.y < this.y && ball.xVel == 1) {
            this.yVel = -1;

            if (this.y <= 20) {
                this.yVel = 0;
            }
        }
        else if (ball.y > this.y + this.height && ball.xVel == 1) {
            this.yVel = 1;

            if (this.y + this.height >= canvas.height - 20) {
                this.yVel = 0;
            }
        }
        else {
            this.yVel = 0;
        }

        this.y += this.yVel * this.speed;

    }

}

class Ball extends Entity {

    private speed: number = 5;

    constructor(w: number, h: number, x: number, y: number) {
        super(w, h, x, y);
        var randomDirection = Math.floor(Math.random() * 2) + 1;
        if (randomDirection % 2) {
            this.xVel = 1;
        } else {
            this.xVel = -1;
        }
        this.yVel = 1;
    }

    update(player: Paddle, computer: ComputerPaddle, canvas) {

        //check top canvas bounds
        if (this.y <= 10) {
            this.yVel = 1;
        }

        //check bottom canvas bounds
        if (this.y + this.height >= canvas.height - 10) {
            this.yVel = -1;
        }

        //check left canvas bounds
        if (this.x <= 0) {
            this.x = canvas.width / 2 - this.width / 2;
            Game.computerScore += 1;
        }

        //check right canvas bounds
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width / 2 - this.width / 2;
            Game.playerScore += 1;
        }


        //check player collision
        if (this.x <= player.x + player.width) {
            if (this.y >= player.y && this.y + this.height <= player.y + player.height) {
                this.xVel = 1;
            }
        }

        //check computer collision
        if (this.x + this.width >= computer.x) {
            if (this.y >= computer.y && this.y + this.height <= computer.y + computer.height) {
                this.xVel = -1;
            }
        }

        this.x += this.xVel * this.speed;
        this.y += this.yVel * this.speed;
    }
}

var game = new Game();
requestAnimationFrame(game.gameLoop);
