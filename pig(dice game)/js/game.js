//setting varibles
let player1Score, player2Score, player1TempScore, player2TempScore, diceDom;
let currentPlayer = 0;//player1 = 0   player2 = 1
let tempScore = 0;//current turns points
let totalScore1 = 0, totalScore2 = 0;//players final score

player1Score = $(".total-score-1");
player2Score = $(".total-score-2");
player1TempScore = $(".score1");
player2TempScore = $(".score2");
diceDom = $("#dice");

diceDom.style.display = "none";
player1Score.innerHTML = totalScore1;
player2Score.innerHTML = totalScore2;
player1TempScore.innerHTML = 0;
player2TempScore.innerHTML = 0;
$(".player1").style.backgroundColor = "#dddddd";
$(".player-b-1").style.backgroundColor = "#dddddd";
$(".dice-roll").addEventListener("click", function()
{
    diceDom.style.display = "block";
    let dice = Math.floor((Math.random() * 6) + 1);
    tempScore += dice;
    if(dice == 1)
    {
        diceDom.src = "image/dice-1.png";
    }
    if(dice == 2)
    {
        diceDom.src = "image/dice-2.png";
    }
    if(dice == 3)
    {
        diceDom.src = "image/dice-3.png";
    }
    if(dice == 4)
    {
        diceDom.src = "image/dice-4.png";
    }
    if(dice == 5)
    {
        diceDom.src = "image/dice-5.png";
    }
    if(dice == 6)
    {
        diceDom.src = "image/dice-6.png";
    }
    //does following if dice lands on 1
    if (dice === 1) 
    {//if first player ends on 1 switched to player 2
        if(currentPlayer == 0 )
        { 
            currentPlayer = 1;
            player1TempScore.innerHTML = 0;
            tempScore = 0;
            //changes color so players know whos turn it is
            $(".player1").style.backgroundColor = "white";
            $(".player-b-1").style.backgroundColor = "white";
            $(".player2").style.backgroundColor = "#dddddd";
            $(".player-b-2").style.backgroundColor = "#dddddd";   
        }
         else 
         {//if second player ends on 1 switched to player first
            currentPlayer = 0;
            player2TempScore.innerHTML = 0;
            tempScore = 0;
            //changes color so players know whos turn it is
            $(".player1").style.backgroundColor = "#dddddd";
            $(".player-b-1").style.backgroundColor = "#dddddd";
            $(".player2").style.backgroundColor = "white";
            $(".player-b-2").style.backgroundColor = "white";   
        } 
    } 
    else//does if dice doesnt land on 1  
    {
        if (currentPlayer == 0)//player1
        {
            player1TempScore.innerHTML = tempScore;
        } 
        else//player2 
        {
            player2TempScore.innerHTML = tempScore;
        }
    }

});
$(".add-points").addEventListener("click", function()
{ 
    if (currentPlayer == 0)//if player one  switch to play2 
    {
            currentPlayer = 1;//changing players
            totalScore1 += tempScore;
            tempScore = 0;
            player1TempScore.innerHTML = 0;
            player1Score.innerHTML = totalScore1;
            $(".player1").style.backgroundColor = "white";
            $(".player-b-1").style.backgroundColor = "white";
            $(".player2").style.backgroundColor = "#dddddd";
            $(".player-b-2").style.backgroundColor = "#dddddd";
        } 
        else 
        {
            currentPlayer = 0;
            totalScore2 += tempScore;
            tempScore = 0;
            player2TempScore.innerHTML = 0;
            player2Score.innerHTML = totalScore2;
            $(".player1").style.backgroundColor = "#dddddd";
            $(".player-b-1").style.backgroundColor = "#dddddd";
            $(".player2").style.backgroundColor = "white";
            $(".player-b-2").style.backgroundColor = "white";
    }
    if (totalScore1 >= 100)//hard coding max posible score 
    {
        $(".player-t-1").innerHTML = "You are Winner :)";
        $(".player-t-1").style.color = "#f44336";
        player1TempScore.innerHTML = 0;
        player1Score.innerHTML = 0;
        player2TempScore.innerHTML = 0;
        player2Score.innerHTML = 0;
        diceDom.style.display = "none";
    }
     else if(totalScore2 >= 100) 
    {
        $(".player-t-2").style.color = "#f44336";
        $(".player-t-2").innerHTML = "You are Winner :)";
        player1TempScore.innerHTML = 0;
        player1Score.innerHTML = 0;
        player2TempScore.innerHTML = 0;
        player2Score.innerHTML = 0;
        diceDom.style.display = "none";
        
    }
});
function $(par) 
{
    return document.querySelector(par);
}
