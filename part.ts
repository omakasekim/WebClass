
    drawBoardDetails() {
        //draw court outline
        this.gameContext.strokeStyle = "#fff";
        this.gameContext.lineWidth = 5;
        this.gameContext.strokeRect(10, 10, this.gameCanvas.width - 20,
             this.gameCanvas.height - 20);
        for (var i = 0; i + 30 < this.gameCanvas.height; i += 30) {
            this.gameContext.fillStyle = "#fff";
            this.gameContext.fillRect(this.gameCanvas.width / 2 - 10,
             i + 10, 15, 20);
        }
        this.gameContext.fillText(Game.playerScore, 280, 50);
        this.gameContext.fillText(Game.computerScore, 390, 50);

    }

    update() {
        this.player1.update(this.gameCanvas);
        this.computerPlayer.update(this.ball, this.gameCanvas);
        this.ball.update(this.player1, this.computerPlayer, this.gameCanvas);
    }
    draw() {
        this.gameContext.fillStyle = "#000";
        this.gameContext.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

        this.drawBoardDetails();
        this.player1.draw(this.gameContext);
        this.computerPlayer.draw(this.gameContext);
        this.ball.draw(this.gameContext);
    }
    gameLoop() {
        game.update();
        game.draw();
        requestAnimationFrame(game.gameLoop);
    }
}
