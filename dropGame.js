var circle = document.getElementById('circle');

document.addEventListener('keydown', checkKey)
var x = 300;
var y = 0;
var score = 0;
var ballY = 380;
var ballX = 330;

function checkKey() {
    var e = event
    if (e.which == '37'){ 
        x = x - 40;
        document.getElementById("rect").style.left = x + "px"
      }
    if (e.which == '39'){
      x = x + 40;
      document.getElementById("rect").style.left = x + "px"
    }
    /*if (e.which == '38'){
      y = y + 20;
      document.getElementById("rect").style.bottom = y + "px"
    }
    if (e.which == '40'){
      y = y - 20;
      document.getElementById("rect").style.bottom = y + "px"
    }*/
}

function startGame(){    
    var speed = 17;
    var timer = 30;
    var countdown = setInterval(function() {
        timer--;
        document.getElementById("clock").innerHTML = "Time Left: " + timer}
        , 1000)
    dropBall()
    function dropBall(){
        var runGame = 
        setInterval(function(){
            ballY = ballY-2.5;
            document.getElementById("ball").style.bottom = ballY + "px"
            if(ballY < -20){
                //Check for hit
                if(ballX < (x+95) && ballX > (x-20)){
                 score++
                 speed--
                document.getElementById("gameScore").innerHTML = "Game Score: " + score
                // Reset Ball
                resetBall()
                clearInterval(runGame)
                    if (timer > 0){
                    dropBall()
                    }
                    else{
                    endGame()
                    }
                } 
                else{
                endGame()
                }       
            }
        }  , speed)  
    }
}

function endGame(){
    document.getElementById("gameScore").innerHTML = "Game over.  Final Score: " + score
    document.getElementById("clock").innerHTML = "Game over."
    clearInterval(runGame);
    clearInterval(countDown);
    resetBall()
    score = 0;
    timer = 30;
}


function resetBall(){
    ballY = 380
    ballX = Math.random() * 660;
    document.getElementById("ball").style.bottom = ballY + "px"
    document.getElementById("ball").style.left = ballX + "px"
  }
