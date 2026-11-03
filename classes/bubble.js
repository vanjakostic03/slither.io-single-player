class Bubble{
    constructor(x,y, value = 1){
        this.x = x;
        this.y = y;
        this.value = getRandomIntInclusive(1,5,2);
        this.radius = this.value*2;
    }

    isColliding(snake) {
        
        const dx = this.x - snake.x;
        const dy = this.y - snake.y;

        const distanceSquared = dx * dx + dy * dy;
        const radiusSum = this.radius + snake.radius;

        return distanceSquared <= radiusSum * radiusSum;
    };


    draw(ctx){
        ctx.save();
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = '#ff1149';  
        ctx.strokeStyle = '#000000'; 
        ctx.lineWidth = 5; 
        ctx.stroke();
        ctx.fill();

    }
}