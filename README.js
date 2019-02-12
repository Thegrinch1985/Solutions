

const ctx = myCanvas.getContext("2d");
//Ball Radius
const BALL_RADIUS = 10;

//Paddle 
const PADDLE_WIDTH = 75;
const PADDLE_HEIGHT = 10;
const PADDLE_DX = 5;
const PADDLE_DY = 5;
//Paddle Keys to Move Left and Right
const KEY_LEFT = 39;
const KEY_RIGHT = 37;

//Track Key Press
let moveRight = false;
let moveLeft = false;

//Listen for Key down
document.addEventListener('keydown', function(e) { 
    if(e.keyCode == KEY_LEFT){
        moveRight = true;
    }
    else if(e.keyCode == KEY_RIGHT){
        moveLeft = true;
    }
}, false);
 
//Listen for key up event
document.addEventListener('keyup', function(e){
        if(e.keyCode == KEY_LEFT){
            moveRight = false;
        }
        else if(e.keyCode == KEY_RIGHT){
            moveLeft = false;
        }
}, false);

//Ball Attributes
ctx.lineWidth = 4;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';

//Positioning Ball on Canvas 
let x = myCanvas.width / 2;
let y = myCanvas.height - (BALL_RADIUS * 2);

//Positioning Paddle On Canvas
let paddleX = (myCanvas.width - PADDLE_WIDTH) / 2;
let paddleY = (myCanvas.height - PADDLE_HEIGHT) / 2;

let dx = 2;
let dy = 7;

//Draw Ball
function drawBall(cx, cy) {
    ctx.beginPath();
    ctx.arc(cy, cx, BALL_RADIUS, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

//Draw Paddle
function drawPaddle(){
    ctx.fillRect(paddleX, myCanvas.height - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);
}

//Updates the Position of the Ball on Canvas 
function update() {
    
    ctx.clearRect(0,0, myCanvas.height, myCanvas.width);
    
    x += dx;
    y += dy;

    //Detection Collision of Ball and Canvas7
    
    if(x + dx > 400){
        dx = -dx;
    }
    
    if(x + dx < 0){
        dx = -dx;
    }
    
    if(y + dy > 400){
        dy = -dy;
    }
    
    if(y + dy < 0){
        dy = -dy;
    } 

    //Move Paddle
    if(moveRight && paddleX < myCanvas.width - PADDLE_WIDTH){
        paddleX += PADDLE_DX;
    }
    else if(moveLeft && paddleX > 0){
        paddleX -= PADDLE_DX;
    }
		
	if(x + dx > paddleX && x + dx < paddleX + PADDLE_WIDTH - myCanvas.Width){
		dx = -dx;
	}		
	
    //If Paddle Misses Ball
    else if(x + dx == 400) {
        alert('GAME OVER');
        document.location.reload();
    }
    

    
    drawBall(x,y);
    requestAnimationFrame(update);
    drawPaddle();
}

//Calls update function
update();