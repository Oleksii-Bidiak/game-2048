# 2048 Game

**[Click the link to see DEMO](https://oleksii-bidiak.github.io/game-2048/)**

## Description
This is a browser-based version of the popular 2048 puzzle game. The project is written in vanilla JavaScript and uses modern development practices. The game features responsive design and smooth animations for an enhanced user experience. The project structure is modular and follows the best principles of maintainability.

## Key Parts of the Project Structure
```bash
src/
  ├── modules/              # Game logic and structure
  │   ├── Cell.class.js      # Cell class responsible for individual cells in the grid
  │   ├── Game.class.js      # Game class that manages game state and rules
  │   └── Tile.class.js      # Tile class that handles tiles behavior and movement
  ├── scripts/              # Main script that initializes the game
  │   └── main.js           # Entry point of the game, starts the game logic
  ├── styles/               # Styles for the game interface
  │   └── main.scss         # Main SCSS file for styling the game UI
  └── index.html            # Main HTML file that renders the game
```

## Technologies used
- HTML
- SCSS
- JavaScript (ES6+)

## Features
- Fully responsive layout for mobile and desktop
- Smooth animations for tile movement
- Modular and scalable structure

## Installing
1. Fork and clone this repository.
2. Run `npm install` in your terminal to install dependencies.
3. Run `npm start` to start the project locally.
