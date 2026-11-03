class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.tailLength = 0;
        this.tail = [];
        this.radius = 15;
        this.ribRadius = 9;
        this.path=[];                //history of head position

        this.isMoving = false;         //initially rests, on controlls changes
        this.speed = 180;               //pixels per second 
        this.controls = new Controls();

    }

    grow(numOfRibs){
        for (let i = 0; i < numOfRibs; i++) {
            this.tailLength++;

            this.tail.push({
                x: this.x,
                y: this.y + this.tailLength * this.ribRadius * 2
            });
        }
    }


    updateDirection(a,b){
        this.controls.changeState(a,b);
    }
    
    updatePosition( deltaTime){
        
        let dx = 0;     //movement directions
        let dy = 0;

        // const distance = this.speed * deltaTime;

        if(this.controls.up){
            dy+=1;
        }
        if(this.controls.down){
            dy-=1;
        }
        if(this.controls.left){
            dx+=1;
        }
        if(this.controls.right){
            dx-=1;
        }

        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance > 0){
            dx /= distance;
            dy /= distance;
        }

        this.x += dx * this.speed * deltaTime;
        this.y += dy * this.speed * deltaTime;

        this.path.unshift({                     //adding element od top
            x: this.x,
            y: this.y
        });

        this.updateTail(deltaTime);

    }

    updateTail() {
        const spacing = this.ribRadius*0.65;

        this.tail.forEach((segment, i) => {
            const index = Math.floor((i + 1) * spacing);

            if (this.path[index]) {
                segment.x = this.path[index].x;
                segment.y = this.path[index].y;
            }
        });
    }

    draw(ctx){
        if (this.tailLength > 0){
            this.drawTail(ctx);
        }
        
        ctx.save();
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = '#7afc00';   
        ctx.fill();
        ctx.restore();  

    }

    drawTail(ctx){
        this.tail.forEach(element => {
            ctx.beginPath();

        ctx.arc(element.x, element.y, this.ribRadius, 0, 2*Math.PI);
        ctx.fillStyle = '#008c2f';   
        ctx.fill();
        });
    }
}

