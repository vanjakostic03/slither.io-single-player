const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Connected to Node.js');
};

socket.onmessage = (event) => {
    console.log(event.data);
    const [a,b] = event.data.split(',').map(Number);
    snake.updateDirection(a,b);
};

const canvas=document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const snake = new Snake(canvas.width/2,canvas.height/2);
let bubbles = new Set();
for (let i  = 0; i<40; i++){
    let bubbleX;
    let bubbleY;

    do {
        bubbleX = getRandomIntInclusive(canvas.width * 0.1, canvas.width * 0.9);
        bubbleY = getRandomIntInclusive(canvas.height * 0.1, canvas.height * 0.9);

    } while (isTooCloseToSnake(bubbleX, bubbleY, 40));

    bubbles.add(new Bubble(bubbleX, bubbleY));
}

let lastTime = 0;

animate(lastTime);

function animate(time){

    const deltaTime = (lastTime-time) / 1000;
    lastTime = time;

    snake.updatePosition(deltaTime);
    canvas.height = window.innerHeight;
    snake.draw(ctx);
    bubbles.forEach(bubble => {
        bubble.draw(ctx);
    });
    requestAnimationFrame(animate);
}