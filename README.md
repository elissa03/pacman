# Pacman Game Project

## Overview
This project is a recreation of the classic Pacman game using HTML5 Canvas and JavaScript. The game features a Pacman character navigating through a grid, collecting coins and avoiding ghosts.

## Features
- Interactive game canvas where Pacman can move up, down, left, and right.
- Score tracking based on the number of coins eaten.
- Game resets when all coins are collected.
- Keyboard event handling for Pacman's movement.
- Multiple sprites including Pacman and ghosts with unique behaviors.

## Classes and Functionality
### Game Class
- Manages the game canvas, score, and coin count.
- Handles key presses for Pacman's movement.
- Resets the game when all coins are collected.

### Sprite Class
- Base class for all movable objects in the game.

### MiniMap Class
- Creates the grid layout for the game.
- Manages the placement and type of tiles in the grid.

### Pacman Class
- Represents the Pacman character.
- Handles movement and direction based on user input.
- Eats coins and updates the score.

### Ghost Class
- Represents the ghost characters.
- Moves independently within the game grid.

## Setup
To run the game, simply load the HTML file containing the canvas element (`<canvas id="myCanvas"></canvas>`) in a browser. Ensure that the JavaScript file containing the game code is correctly linked to the HTML file.

## Controls
- Use the arrow keys to move Pacman:
  - Left Arrow: Move left
  - Right Arrow: Move right
  - Up Arrow: Move up
  - Down Arrow: Move down

## Developers
- Add additional features or modify the game behavior by editing the JavaScript classes.
- Create new sprites or modify the grid layout by extending the `Sprite` and `MiniMap` classes.

Enjoy the classic Pacman experience with a modern twist!
