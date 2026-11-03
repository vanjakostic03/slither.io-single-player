const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Connected to Node.js');
};

socket.onmessage = (event) => {
    console.log(event.data);
    const [a,b] = event.data.split(',').map(Number);
    snake.updatePosition(a,b);
};

const canvas=document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const snake = new Snake(canvas.width/2,canvas.height/2);

animate();

function animate(){

    // snake.updatePosition();
    canvas.height = window.innerHeight;
    snake.draw(ctx);
    requestAnimationFrame(animate);
}