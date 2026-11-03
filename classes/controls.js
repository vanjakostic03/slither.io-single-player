class Controls{
    constructor(){

        //this allows only 8 possible directions - for smoother movement implement physics using continuous vectors
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;

        //this.#addKeyBoardListeners();
        this.changeState();
    }

    changeState(x,y){
        const threshold = 200;
        this.left = x > 509 - threshold;
        this.right = x < 509 + threshold;
        this.up = y < 504 - threshold;
        this.down = y > 504 + threshold;
    }

    #addKeyBoardListeners(){               //arrow function bcs this refers on attributes
        document.onkeydown=(event)=>{       //on button press
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.up=true;
                    break;
                case "ArrowDown":
                    this.down=true;
                    break;
            }
        }

        document.onkeyup=(event)=>{         //on button release
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.up=false;
                    break;
                case "ArrowDown":
                    this.down=false;
                    break;
            }
        }
    }
}