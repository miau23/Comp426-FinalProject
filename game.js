
let cxt;

var kevinImg = new Image();
kevinImg.src ="https://uncnews.unc.edu/wp-content/uploads/sites/933/2019/12/017319_guskiewicz_kevin011.jpg";

window.onload = function(){
    let canvas = document.getElementById('canvas');
    cxt = canvas.getContext('2d');
    document.addEventListener('keydown', keyPressed);
    setInterval(game, 1000/15);
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
let x = 0;
let y = 0
let trail = [];
let tail = 7;

function game(){
    playerX += x;
    playerY += y;
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
    cxt.fillStyle = "black";
    cxt.fillRect(0,0,canvas.width,canvas.height);

    cxt.fillStyle = "purple";
    for(let i = 0; i < trail.length; i++){
        cxt.fillRect(trail[i].x*gridSize,trail[i].y*gridSize,gridSize-2,gridSize-2);
        if(trail[i].x ===playerX && trail[i].y ===playerY){
            tail = 7;
        }
    }
    trail.push({x:playerX,y:playerY});

    while(trail.length>tail){
        trail.shift();
    }

    if(tx === playerX && ty === playerY){
        tail++;
        tx = Math.floor(Math.random() *tileCnt);
        ty = Math.floor(Math.random() *tileCnt);
    }
    cxt.fillStyle = "pink";
    cxt.fillRect(tx*gridSize,ty*gridSize,gridSize-2,gridSize-2);

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
}

//https://www.youtube.com/watch?v=xGmXxpIj6vs&t=361s&ab_channel=ChrisDeLeonofHomeTeamGameDev