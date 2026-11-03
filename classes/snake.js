class Snake{
    constructor(x,y,tailLength = 3){
        this.x = x;
        this.y = y;
        this.tailLength = tailLength;

        this.isMoving = false;         //initially rests, on controlls changes
        this.speed = 180;               //pixels per second 
        this.controls = new Controls();

    }


    updateDirection(a,b){
        this.controls.changeState(a,b);
    }
    
    updatePosition( deltaTime){
        
        let dx = 0;     //movement directions
        let dy = 0;

        // const distance = this.speed * deltaTime;

        if(this.controls.up){
            dy-=1;
        }
        if(this.controls.down){
            dy+=1;
        }
        if(this.controls.left){
            dx-=1;
        }
        if(this.controls.right){
            dx+=1;
        }

        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance > 0){
            dx /= distance;
            dy /= distance;
        }

        this.x += dx * this.speed * deltaTime;
        this.y += dy * this.speed * deltaTime;

    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();

        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
        ctx.fill();

    }
}

