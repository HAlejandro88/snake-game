const { GRID_SIZE } = require('./constants');


const createGameCenter = () => {
    return {
        players: [{
            pos: {
              x: 3,
              y: 10,
            },
            vel: {
              x: 1,
              y: 0,
            },
            snake: [
              {x: 1, y: 10},
              {x: 2, y: 10},
              {x: 3, y: 10},
            ],
          }, {
            pos: {
              x: 18,
              y: 10,
            },
            vel: {
              x: 0,
              y: 0,
            },
            snake: [
              {x: 20, y: 10},
              {x: 19, y: 10},
              {x: 18, y: 10},
            ],
          }],
          food: {},
          gridsize: GRID_SIZE,
        };
}


const gameLoop = state => {
    if (!state) {
        return;
    }

    const playerOne = state.player;
    playerOne.pos.x += playerOne.vel.x;
    playerOne.pos.y += playerOne.vel.y;

    if (playerOne.pos.x < 0 || playerOne.pos.x > GRID_SIZE || playerOne.pos.y < 0 || playerOne.pos.y > GRID_SIZE ) {
        return 2;
    }

    if (state.food.x === playerOne.pos.x && state.food.y === playerOne.pos.y) {
        playerOne.snake.push({ ...playerOne.pos })
        playerOne.pos.x += playerOne.vel.x;
         playerOne.pos.y += playerOne.vel.y;
         randomFood();
    }
}


module.exports = {
    createGameCenter,
    gameLoop
}