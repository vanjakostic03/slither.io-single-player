class Snake{
    constructor(x,y,tailLength = 3){
        this.x = x;
        this.y = y;
        this.tailLength = tailLength;

        this.isMoving = false;         //initially rests, on controlls changes
        
        this.controls = new Controls();

    }


    updatePosition(){

        if(this.controls.up){
            this.y-=2;
        }
        if(this.controls.down){
            this.y+=2;
        }
        if(this.controls.left){
            this.x-=2;
        }
        if(this.controls.right){
            this.x+=2;
        }
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();

        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
        ctx.fill();

    }
}

