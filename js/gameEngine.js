// Main Game Class
class Game {
	constructor() {
		this.canvas = document.getElementById("myCanvas");
		this.ctx = this.canvas.getContext("2d");
		this.sprites = [];
		this.score = 0;
		this.coinsLeft = 115;
		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;

		document.addEventListener("keydown", this.keyPressHandler.bind(this), false);

	}
	eatCoin() {
		this.coinsLeft--;
		this.score += 10;

		if (this.coinsLeft === 0) {
			this.resetGame();
		}
	}

	resetGame() {
		var map = this.sprites[0];
		var pacman = this.sprites[1];
		this.sprites = [];
		this.addSprite(map);
		this.addSprite(pacman);
		this.score = 0;
		this.coinsLeft = 115;
		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;
		pacman.isMoving = false;
		pacman.x = map.blackAreaX * map.gridSize + map.gridSize / 2;
		pacman.y = map.blackAreaY * map.gridSize + map.gridSize / 2;

		for (var row = 0; row < map.gridHeight; row++) {
			for (var col = 0; col < map.gridWidth; col++) {
				if (map.map[row][col] === 0) {
					map.map[row][col] = 1;
				}
			}
		}
	}

	keyPressHandler(e) {
		if (e.key === "Left" || e.key === "ArrowLeft") {
			this.leftPressed = true;
			this.rightPressed = false;
			this.upPressed = false;
			this.downPressed = false;
		} else if (e.key === "Right" || e.key === "ArrowRight") {
			this.leftPressed = false;
			this.rightPressed = true;
			this.upPressed = false;
			this.downPressed = false;
		} else if (e.key === "Up" || e.key === "ArrowUp") {
			this.leftPressed = false;
			this.rightPressed = false;
			this.upPressed = true;
			this.downPressed = false;
		} else if (e.key === "Down" || e.key === "ArrowDown") {
			this.leftPressed = false;
			this.rightPressed = false;
			this.upPressed = false;
			this.downPressed = true;
		}
	}


	update() {
		for (var i = 0; i < this.sprites.length; i++) {
			if (this.sprites[i] instanceof Pacman) {
				if (this.leftPressed) {
					this.sprites[i].setDirection("left");
				} else if (this.rightPressed) {
					this.sprites[i].setDirection("right");
				} else if (this.upPressed) {
					this.sprites[i].setDirection("up");
				} else if (this.downPressed) {
					this.sprites[i].setDirection("down");
				}
			}
			this.sprites[i].update();
		}
	}


	drawScore() {
		this.ctx.font = "16px Arial";
		this.ctx.fillStyle = "#FFFFFF";
		this.ctx.fillText("Score: " + this.score, 8, 20);
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (var i = 0; i < this.sprites.length; i++)
			this.sprites[i].draw(this.ctx);

		this.drawScore();
	}

	addSprite(pSprite) {
		this.sprites.push(pSprite);
	}
}

//Sprite
class Sprite {
	constructor() {

	}
	update() {

	}
	draw(ctx) {

	}
}



class MiniMap extends Sprite {
	constructor() {
		super();
		this.gridSize = 40;
		this.gridWidth = 19;
		this.gridHeight = 12;
		this.blackAreaX = 9;
		this.blackAreaY = 5;
		this.map = [
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			[2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2],
			[2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
			[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
			[2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
			[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
			[2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2],
			[2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			[2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
			[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
		];
	}

	draw(ctx) {
		const canvasWidth = this.gridWidth * this.gridSize;
		const canvasHeight = this.gridHeight * this.gridSize;
		ctx.canvas.width = canvasWidth;
		ctx.canvas.height = canvasHeight;

		for (let row = 0; row < this.gridHeight; row++) {
			for (let col = 0; col < this.gridWidth; col++) {
				const tileX = col * this.gridSize;
				const tileY = row * this.gridSize;
				const tileType = this.map[row][col];

				if (tileType === 0) {
					ctx.fillStyle = "#000";
					ctx.fillRect(tileX, tileY, this.gridSize, this.gridSize);
				}
				else if (tileType === 1) {
					ctx.fillStyle = "#000";
					ctx.fillRect(tileX, tileY, this.gridSize, this.gridSize);
					ctx.beginPath();
					ctx.fillStyle = "yellow";
					ctx.arc(tileX + this.gridSize / 2, tileY + this.gridSize / 2, 5, 0, 2 * Math.PI);
					ctx.fill();
				}

				else if (tileType === 2) {
					ctx.fillStyle = "#00f";
					ctx.fillRect(tileX, tileY, this.gridSize, this.gridSize);
				}
			}
		}

	}
}


class Pacman extends Sprite {
	constructor(x, y) {
		super();
		this.x = x * map.gridSize + map.gridSize / 2;
		this.y = y * map.gridSize + map.gridSize / 2;
		this.radius = 13;
		this.direction = "right";
		this.nextDirection = null;
		this.speed = 2;
		this.angle1 = 0.25;
		this.angle2 = 1.75;
		this.isMoving = false;
	}

	setDirection(pDirection) {
		this.nextDirection = pDirection;
		this.isMoving = true;
	}

	isValid() {
		if (this.nextDirection == null)
			return false;

		let nextX = this.x;
		let nextY = this.y;

		if (this.nextDirection === "right") {
			nextX += this.speed;
		}
		else if (this.nextDirection === "left") {
			nextX -= this.speed;
		}
		else if (this.nextDirection === "up") {
			nextY -= this.speed;
		}
		else if (this.nextDirection === "down") {
			nextY += this.speed;
		}

		var nextTileX = Math.floor((nextX + this.radius + 5.5) / map.gridSize);
		var nextTileY = Math.floor((nextY + this.radius + 5.5) / map.gridSize);
		var nextTileType1 = map.map[nextTileY][nextTileX];

		nextTileX = Math.floor((nextX + this.radius + 5.5) / map.gridSize);
		nextTileY = Math.floor((nextY - this.radius - 5.5) / map.gridSize);
		var nextTileType2 = map.map[nextTileY][nextTileX];

		nextTileX = Math.floor((nextX - this.radius - 5.5) / map.gridSize);
		nextTileY = Math.floor((nextY + this.radius + 5.5) / map.gridSize);
		var nextTileType3 = map.map[nextTileY][nextTileX];

		nextTileX = Math.floor((nextX - this.radius - 5.5) / map.gridSize);
		nextTileY = Math.floor((nextY - this.radius - 5.5) / map.gridSize);
		var nextTileType4 = map.map[nextTileY][nextTileX];

		if (nextTileType1 !== 2 && nextTileType2 !== 2
				&& nextTileType3 !== 2 && nextTileType4 !== 2) {
			return true;
		}
		else
			return false;

	}


	update() {
		if (this.isMoving) {
			let nextX = this.x;
			let nextY = this.y;


			if ((this.nextDirection == "right" || this.nextDirection == "left")
					&& (this.direction == "right" || this.direction == "left")) {
				this.direction = this.nextDirection;
				this.nextDirection = null;
			}
			else if ((this.nextDirection == "up" || this.nextDirection == "down")
					&& (this.direction == "up" || this.direction == "down")) {
				this.direction = this.nextDirection;
				this.nextDirection = null;
			}
			else if (this.isValid()) {
				this.direction = this.nextDirection;
				this.nextDirection = null;
			}

			// Move Pacman in the desired direction
			if (this.direction === "right") {
				nextX += this.speed;
			}
			else if (this.direction === "left") {
				nextX -= this.speed;
			}
			else if (this.direction === "up") {
				nextY -= this.speed;
			}
			else if (this.direction === "down") {
				nextY += this.speed;
			}

			// Check if the next position of Pacman is within the black area of the map
			var nextTileX = Math.floor((nextX + this.radius + 5.5) / map.gridSize);
			var nextTileY = Math.floor((nextY + this.radius + 5.5) / map.gridSize);
			var nextTileType1 = map.map[nextTileY][nextTileX];

			nextTileX = Math.floor((nextX + this.radius + 5.5) / map.gridSize);
			nextTileY = Math.floor((nextY - this.radius - 5.5) / map.gridSize);
			var nextTileType2 = map.map[nextTileY][nextTileX];

			nextTileX = Math.floor((nextX - this.radius - 5.5) / map.gridSize);
			nextTileY = Math.floor((nextY + this.radius + 5.5) / map.gridSize);
			var nextTileType3 = map.map[nextTileY][nextTileX];

			nextTileX = Math.floor((nextX - this.radius - 5.5) / map.gridSize);
			nextTileY = Math.floor((nextY - this.radius - 5.5) / map.gridSize);
			var nextTileType4 = map.map[nextTileY][nextTileX];
			if (nextTileType1 !== 2 && nextTileType2 !== 2
				&& nextTileType3 !== 2 && nextTileType4 !== 2) {
				this.x = nextX;
				this.y = nextY;
				var tileX = Math.floor(this.x / map.gridSize);
				var tileY = Math.floor(this.y / map.gridSize);
				if (map.map[tileY][tileX] === 1) {
					map.map[tileY][tileX] = 0;
					myGame.eatCoin();
				}
			}
			else {
				this.isMoving = false;
			}
		}
	}

	draw(ctx) {
		//draw the Pacman based on its direction
		ctx.beginPath();

		if(this.direction === "right"){
			ctx.arc(this.x, this.y, this.radius, this.angle1 * Math.PI, this.angle2 * Math.PI);
		}

		if(this.direction === "left"){
			ctx.arc(this.x, this.y, this.radius, (this.angle1 + 1) * Math.PI, (this.angle2 + 1) * Math.PI);
		}

		if(this.direction === "up"){
			ctx.arc(this.x, this.y, this.radius, (this.angle1 + 1.5) * Math.PI, (this.angle2 + 1.5) * Math.PI);
		}

		if(this.direction === "down"){
			ctx.arc(this.x, this.y, this.radius, (this.angle1 + 0.5) * Math.PI, (this.angle2 + 0.5) * Math.PI);
		}

		ctx.lineTo(this.x, this.y);
		ctx.fillStyle = "yellow";
		ctx.fill();
	}

}

//Ghost class
class Ghost extends Sprite {
	constructor(x, y, color, map) {
		super();
		this.x = x;
		this.y = y;
		this.color = color;
		this.speed = 2;
		this.map = map;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x + this.map.gridSize / 2, this.y + this.map.gridSize / 2, this.map.gridSize / 3 - 2, 0, 2 * Math.PI);
		ctx.fill();
	}
}


var requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();



var myGame = new Game();

const map = new MiniMap();
myGame.addSprite(map);

const pacman = new Pacman(map.blackAreaX, map.blackAreaY, myGame.canvas);
myGame.addSprite(pacman);

const ghost1 = new Ghost(200, 200, "red", map);
const ghost2 = new Ghost(400, 320, "orange", map);
myGame.addSprite(ghost1);
myGame.addSprite(ghost2);


function gameEngineLoop() {
	myGame.update();
	myGame.draw();
	requestAnimFrame(gameEngineLoop);
}

gameEngineLoop();