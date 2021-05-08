
let cxt;

var kevinImg = new Image();
kevinImg.src ="https://uncnews.unc.edu/wp-content/uploads/sites/933/2019/12/017319_guskiewicz_kevin011.jpg";

window.onload = function(){
    let canvas = document.getElementById('canvas');
    cxt = canvas.getContext('2d');
    document.addEventListener('keydown', keyPressed);
    setInterval(game, 1000/10);
    let darkMode = localStorage.getItem('darkMode');
    if(darkMode === 'enabled'){
        //add class darkmode to the body
    document.body.classList.add('darkmode');
    //update dark mode to local storage
    localStorage.setItem('darkMode','enabled');
    }
    else{
        document.body.classList.remove('darkmode');
        //update dark mode to local storage
        localStorage.setItem('darkMode', null);
    }
}
let playerX = 10;
let playerY = 10;
let gridSize = 20;
let tileCnt = 20;
let tx = 15;
let ty = 15;
let ghostX = 0;
let ghostY = 0;
let gx = 0;
let gy = 0;
let x = 0;
let y = 0
let trail = [];
let tail = 7;
let score = 0;
let score2 = 0;
let winner;
$('#score').append(`<p class = "score"> Player1 score: ${score} </p>`);
$('#score').append(`<p class = "score"> Player2 score: ${score2} </p>`)
let over = false;
function game(){
    playerX += x;
    playerY += y;
    ghostX +=gx;
    ghostY +=gy;
    if(playerX <0){
        playerX = tileCnt-1;
    }
    if(playerX >tileCnt-1){
        playerX = 0;
    }
    if(playerY <0){
        playerY = tileCnt-1;
    }
    if(playerY >tileCnt-1){
        playerY = 0;
    }
    if(ghostX <0){
        ghostX = tileCnt-11;
    }
    if(ghostX >tileCnt-1){
        ghostX = 0;
    }
    if(ghostY <0){
        ghostY = tileCnt-1;
    }
    if(ghostY > tileCnt-1){
        ghostY = 0;
    }
    cxt.fillStyle = "black";
    cxt.fillRect(0,0,canvas.width,canvas.height);

    cxt.fillStyle = "yellow";
    cxt.fillRect(playerX*gridSize,playerY*gridSize,gridSize-2,gridSize-2);
 
    cxt.fillStyle = "blue";
    cxt.fillRect(ghostX*gridSize,ghostY*gridSize,gridSize-2,gridSize-2)

    if((tx == playerX) && (ty == playerY) ){
        score+=10;
        $('#score').empty();
        $('#score').append(`<p class = "score"> Player1 score: ${score} </p>`);
        $('#score').append(`<p class = "score"> Player2 score: ${score2} </p>`);
        if(score >= 100){
            winner = "Player1";
            gameOver();
        }
        tx = Math.floor(Math.random() *tileCnt);
        ty = Math.floor(Math.random() *tileCnt);
    }
    if((tx == ghostX) && (ty == ghostY) ){
        score2+=10;
        $('#score').empty();
        $('#score').append(`<p class = "score"> Player1 score: ${score} </p>`);
        $('#score').append(`<p class = "score"> Player2 score: ${score2} </p>`);
        if(score2 >= 100){
            winner = "Player2";
            gameOver();
        }
        tx = Math.floor(Math.random() *tileCnt);
        ty = Math.floor(Math.random() *tileCnt);
    }
    cxt.fillStyle = "white";
    cxt.fillRect(tx*gridSize,ty*gridSize,gridSize-2,gridSize-2);
    
}
function gameOver(){
    $('#score').empty();
    $('#root4').empty();
    $('#root4').append(`
    <audio controls autoplay>
    <source src="http://soundfxcenter.com/video-games/pacman/8d82b5_Pacman_Dies_Sound_Effect.mp3" type="audio/mpeg">
  </audio>`);
    $('#score').append(`<h3> GAME OVER! the Winner is ${winner}! </h3>`)
}

function keyPressed(event){
    event.preventDefault();
    if(event.keyCode == '37'){
        x=-1;
        y=0;
    }
    if(event.keyCode == '38'){
        x=0;
        y=-1;
    }
    if(event.keyCode == '39'){
        x=1;
        y=0;
    }
    if(event.keyCode == '40'){
        x=0;
        y=1;
    }
    if(event.keyCode == '68'){
        gx=1;
        gy=0;
    }
    if(event.keyCode == '65'){
        gx=-1;
        gy=0;
    }
    if(event.keyCode == '87'){
        gx=0;
        gy=-1;
    }
    if(event.keyCode == '83'){
        gx=0;
        gy=1;
    }

}

//https://www.youtube.com/watch?v=xGmXxpIj6vs&t=361s&ab_channel=ChrisDeLeonofHomeTeamGameDev