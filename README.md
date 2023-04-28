# pacman
This is a simple JavaScript game that creates a canvas element and draws a game map and Pacman sprite on it. The game allows the player to move Pacman using the arrow keys and score points by eating coins. The game is reset once all the coins are eaten. <br><br>

Game class<br>
The Game class is the main class of the game. It initializes the canvas and sets up various properties like sprites, score, and coinsLeft. It also has methods to handle player input, update the game state, and draw the game on the canvas.<br><br>

constructor()<br>
The constructor initializes the canvas and sets up event listeners for key presses.<br><br>

addSprite(pSprite)<br>
This method adds a new sprite to the game.<br><br>

update()<br>
This method updates the state of all the sprites in the game, including Pacman and coins.<br><br>

draw()<br>
This method draws the game on the canvas.<br><br>

drawScore()<br>
This method draws the player's score on the canvas.<br><br>

eatCoin()<br>
This method is called when Pacman eats a coin. It increments the player's score and decrements the number of coins left. If all the coins have been eaten, the game is reset.<br><br>

resetGame()<br>
This method resets the game state to its initial values.<br><br>

keyPressHandler(e)<br>
This method handles key presses by setting various properties based on which key was pressed.<br><br>

Sprite class<br>
The Sprite class is the base class for all sprites in the game. It defines two methods, update and draw, which are called by the Game class.<br><br>

MiniMap class<br>
The MiniMap class is a subclass of Sprite that represents the game map. It defines various properties like gridSize, gridWidth, and gridHeight, and initializes a 2D array to represent the map. The MiniMap class also defines a blackAreaX and blackAreaY property, which represent the location of the black area in the map.<br><br>

How to run the game<br>
To run the game, simply open the HTML file in a web browser. The game should start automatically. Use the arrow keys to move Pacman and eat the coins.
