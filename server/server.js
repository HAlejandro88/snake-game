const io = require('socket.io')();
const { createGameCenter, gameLoop } = require('./game');
const { FRAME_RATE } = require('./constants');


io.on('connection', client => {
    const state = createGameCenter();

    startGameInterval(client, state)
})


const startGameInterval = (client, state) => {
    const intervalId = setInterval(() => {
        const winner = gameLoop(state);
        if (!winner) {
            client.emit('gameState', JSON.stringify(state));
        } else {
            client.emit('gameOver');
            clearInterval(intervalId)
        }
    }, 100 / FRAME_RATE)
}

io.listen(3000)