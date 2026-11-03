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
for (let i  = 0; i<100; i++){
    let [bubbleX, bubbleY] = generateBubble();

    bubbles.add(new Bubble(bubbleX, bubbleY));
}

let score = 0;

let lastTime = 0;

animate(lastTime);

function animate(time){

    const deltaTime = (lastTime-time) / 1000;
    lastTime = time;

    

    snake.updatePosition(deltaTime);
    checkCollisions();
    canvas.height = window.innerHeight;
    bubbles.forEach(bubble => {
        bubble.draw(ctx);
    });
    snake.draw(ctx);

    
    
    requestAnimationFrame(animate);
}

function generateBubble(){
    let bubbleX;
    let bubbleY;

    do {
        bubbleX = getRandomIntInclusive(canvas.width * 0.05, canvas.width * 0.95);
        bubbleY = getRandomIntInclusive(canvas.height * 0.05, canvas.height * 0.95);

    } while (isTooCloseToSnake(bubbleX, bubbleY, 40));

    return [bubbleX,bubbleY];
}

function checkCollisions() {
    bubbles.forEach(bubble => {
        if (bubble.isColliding(snake)) {
            score+=bubble.value;
            snake.grow(bubble.value);
            bubbles.delete(bubble);
            let [bubbleX, bubbleY] = generateBubble();

            bubbles.add(new Bubble(bubbleX, bubbleY));
            
        }
    });
}

